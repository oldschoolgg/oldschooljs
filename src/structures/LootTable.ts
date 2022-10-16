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

	public constructor(lootTableOptions: LootTableOptions = {}) {
		this.table = [];
		this.oneInItems = [];
		this.tertiaryItems = [];
		this.everyItems = [];
		this.length = 0;
		this.totalWeight = 0;
		this.limit = lootTableOptions.limit;
	}

	private cloneLootTableItems(lootTableItem: OneInItems[] | LootTableItem[]): OneInItems[] | LootTableItem[] {
		const result = [];
		for (const e of lootTableItem) {
			if (typeof e.item === 'number') {
				result.push({ ...e });
			} else if (e.item instanceof LootTable) {
				result.push({ ...e, item: e.item.clone() });
			} else {
				result.push({ ...e, item: this.cloneLootTableItems(e.item) });
			}
		}
		return result;
	}

	private getItemsFromLootTableItems(lootTableItem: OneInItems[] | LootTableItem[]): number[] {
		const result = [];
		for (const e of lootTableItem) {
			if (typeof e.item === 'number') {
				result.push(e.item);
			} else if (e.item instanceof LootTable) {
				result.push(...e.item.allItems);
			} else {
				result.push(...this.getItemsFromLootTableItems(e.item));
			}
		}
		return result;
	}

	public get allItems() {
		return Array.from(
			new Set([
				...this.getItemsFromLootTableItems(this.table),
				...this.getItemsFromLootTableItems(this.oneInItems),
				...this.getItemsFromLootTableItems(this.tertiaryItems),
				...this.getItemsFromLootTableItems(this.everyItems)
			])
		);
	}

	public clone(): LootTable {
		const newTable = new LootTable();
		newTable.table = this.cloneLootTableItems(this.table);
		newTable.oneInItems = this.cloneLootTableItems(this.oneInItems) as OneInItems[];
		newTable.tertiaryItems = this.cloneLootTableItems(this.tertiaryItems) as OneInItems[];
		newTable.everyItems = this.cloneLootTableItems(this.everyItems);
		newTable.length = this.length;
		newTable.totalWeight = this.totalWeight;
		newTable.limit = this.limit;

		return newTable;
	}

	private resolveName(name: string): number {
		return itemID(name);
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
				newItems.push({
					item: resolvedId,
					quantity: this.determineQuantity(itemToAdd[1]!) || 1
				});
			}

			return this.add(newItems, quantity, weight, options);
		}

		this.length += 1;
		this.totalWeight += weight;

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
