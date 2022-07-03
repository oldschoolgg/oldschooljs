import { randInt, roll } from 'e';

import { LootTableItem, LootTableMoreOptions, LootTableOptions, OneInItems } from '../meta/types';
import itemID from '../util/itemID';
import Bank from './Bank';
import LootTable from './LootTable';

export function isArrayOfItemTuples(x: readonly unknown[]): x is [string, (number | number[])?][] {
	return Array.isArray(x[0]);
}

export default class NewLootTable {
	public length: number;
	public table: LootTableItem[];
	public totalWeight: number;
	public limit?: number;
	public oneInItems: OneInItems[];
	public tertiaryItems: OneInItems[];
	public everyItems: LootTableItem[];
	public allItems: number[];
	public premadeTable: number[] = [];

	public constructor(lootTableOptions: LootTableOptions = {}) {
		this.table = [];
		this.oneInItems = [];
		this.tertiaryItems = [];
		this.everyItems = [];
		this.length = 0;
		this.totalWeight = 0;
		this.limit = lootTableOptions.limit;
		this.allItems = [];
	}

	public clone(): NewLootTable {
		const newTable = new NewLootTable();
		newTable.table = [...this.table];
		newTable.oneInItems = [...this.oneInItems];
		newTable.tertiaryItems = [...this.tertiaryItems];
		newTable.everyItems = [...this.everyItems];
		newTable.length = this.length;
		newTable.totalWeight = this.totalWeight;
		newTable.limit = this.limit;
		newTable.allItems = [...this.allItems];

		return newTable;
	}

	private resolveName(name: string): number {
		return itemID(name);
	}

	private addToAllItems(items: number | number[] | NewLootTable | LootTable | LootTableItem | LootTableItem[]): void {
		if (Array.isArray(items)) {
			for (const item of items) {
				this.addToAllItems(item);
			}
			return;
		}

		if (items instanceof NewLootTable || items instanceof LootTable) {
			this.allItems = Array.from(new Set(this.allItems.concat(Array.isArray(items) ? items : items.allItems)));
			return;
		}

		if (typeof items === 'number') {
			if (this.allItems.includes(items)) return;
			this.allItems.push(items);
		} else {
			this.addToAllItems(items.item);
		}
	}

	public oneIn(
		chance: number,
		item: NewLootTable | number | string,
		quantity: number | number[] = 1,
		options?: LootTableMoreOptions
	): this {
		const resolved = typeof item === 'string' ? this.resolveName(item) : item;
		this.oneInItems.push({
			item: resolved,
			chance,
			quantity,
			options
		});

		this.addToAllItems(resolved);

		return this;
	}

	public tertiary(
		chance: number,
		item: NewLootTable | number | string,
		quantity: number | number[] = 1,
		options?: LootTableMoreOptions
	): this {
		const resolved = typeof item === 'string' ? this.resolveName(item) : item;
		this.tertiaryItems.push({
			item: resolved,
			chance,
			quantity,
			options
		});

		this.addToAllItems(resolved);

		return this;
	}

	public every(
		item: NewLootTable | number | string,
		quantity: number | number[] = 1,
		options?: LootTableMoreOptions
	): this {
		const resolved = typeof item === 'string' ? this.resolveName(item) : item;
		this.everyItems.push({
			item: resolved,
			quantity,
			options
		});

		this.addToAllItems(resolved);

		return this;
	}

	public add(
		item: NewLootTable | number | string | [string, (number | number[])?][] | LootTableItem[],
		quantity: number[] | number = 1,
		weight = 1,
		options?: LootTableMoreOptions
	): this {
		if (this.limit && weight + this.totalWeight > this.limit) {
			throw new Error('Loot table total weight exceeds limit');
		}
		if (typeof item === 'string') {
			return this.add(this.resolveName(item), quantity, weight, options);
		}

		// If its an array, but not a LootTableItem[] array.
		// i.e, if its directly from the user, and not being internally added.
		if (Array.isArray(item) && isArrayOfItemTuples(item)) {
			const newItems = [];
			const _item = item as [string, (number | number[])?][];
			for (const itemToAdd of _item) {
				const resolvedId = this.resolveName(itemToAdd[0]);
				this.addToAllItems(resolvedId);
				newItems.push({
					item: resolvedId,
					quantity: this.determineQuantity(itemToAdd[1]!) || 1
				});
			}

			return this.add(newItems, quantity, weight, options);
		}

		this.length += 1;
		this.totalWeight += weight;

		this.addToAllItems(item);
		const tableItem = {
			item,
			weight,
			quantity,
			options
		};
		this.table.push(tableItem);
		for (let i = 0; i < weight; i++) {
			this.premadeTable.push(this.table.indexOf(tableItem));
		}

		return this;
	}

	public roll(quantity = 1): Bank {
		const loot = new Bank();

		outerLoop: for (let i = 0; i < quantity; i++) {
			for (const item of this.everyItems) {
				this.addResultToLoot(item, loot);
			}

			for (const { chance, item, quantity, options } of this.tertiaryItems) {
				if (roll(chance)) this.addResultToLoot({ item, quantity, options }, loot);
			}

			for (const { chance, item, quantity, options } of this.oneInItems) {
				if (roll(chance)) {
					this.addResultToLoot({ item, quantity, options }, loot);
					continue outerLoop;
				}
			}

			const chosenItem = randInt(0, this.totalWeight);
			this.addResultToLoot(this.table[chosenItem], loot);
		}

		return loot;
	}

	private addResultToLoot(result: LootTableItem | undefined, loot: Bank): void {
		if (!result) return;
		const { item, quantity, options } = result;

		if (Array.isArray(item)) {
			for (const singleItem of item) {
				this.addResultToLoot(singleItem, loot);
			}
			return;
		}

		const qty = this.determineQuantity(quantity);

		if (item instanceof NewLootTable || item instanceof LootTable) {
			if (options?.multiply) loot.add(item.roll(1).multiply(qty));
			else loot.add(item.roll(qty));
			return;
		}

		loot.add(item, qty);
	}

	protected determineQuantity(quantity: number | number[]): number {
		if (Array.isArray(quantity)) {
			return randInt(quantity[0], quantity[1]);
		}
		return quantity;
	}
}
