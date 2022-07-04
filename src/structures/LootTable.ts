import { randFloat, randInt, roll } from 'e';

import { LootTableItem, LootTableMoreOptions, LootTableOptions, OneInItems } from '../meta/types';
import itemID from '../util/itemID';
import Bank from './Bank';

export function isArrayOfItemTuples(x: readonly unknown[]): x is [string, (number | number[])?][] {
	return Array.isArray(x[0]);
}

export default class LootTable {
	public length: number;
	public table: LootTableItem[];
	public totalWeight: number;
	public limit?: number;
	public oneInItems: OneInItems[];
	public tertiaryItems: OneInItems[];
	public everyItems: LootTableItem[];
	public allItems: number[];

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

	public clone(): LootTable {
		const newTable = new LootTable();
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

	private addToAllItems(items: number | number[] | LootTable | LootTableItem | LootTableItem[]): void {
		if (Array.isArray(items)) {
			for (const item of items) {
				this.addToAllItems(item);
			}
			return;
		}

		if (items instanceof LootTable) {
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
		item: LootTable | number | string,
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
		item: LootTable | number | string,
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
		item: LootTable | number | string,
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
		item: LootTable | number | string | [string, (number | number[])?][] | LootTableItem[],
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

		this.table.push({
			item,
			weight,
			quantity,
			options
		});

		return this;
	}

	public roll(quantity = 1): Bank {
		const loot = new Bank();

		outerLoop: for (let i = 0; i < quantity; i++) {
			// The items that are rolled.
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

			// Random float between 0 and the total weighting
			const randomWeight = randFloat(0, this.limit || this.totalWeight);

			// The index of the item that will be used.
			let result: number = -1;
			let weight = 0;

			for (let i = 0; i < this.table.length; i++) {
				const item = this.table[i]!;

				weight += item.weight!;
				if (randomWeight <= weight) {
					result = i;
					break;
				}
			}

			const chosenItem = this.table[result];
			this.addResultToLoot(chosenItem, loot);
		}

		return loot;
	}

	private addResultToLoot(result: LootTableItem | undefined, loot: Bank): void {
		if (!result) return;
		const { item, quantity, options } = result;
		const multiply = options?.multiply;

		if (Array.isArray(item)) {
			for (const singleItem of item) {
				this.addResultToLoot(singleItem, loot);
			}
			return;
		}

		const qty = this.determineQuantity(quantity);

		if (item instanceof LootTable) {
			if (multiply) loot.add(item.roll(1).multiply(qty));
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
