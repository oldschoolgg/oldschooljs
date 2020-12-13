import { randFloat, randInt, roll } from 'e';

import { LootTableItem, LootTableOptions, OneInItems, ReturnedLootItem } from '../meta/types';
import itemID from '../util/itemID';

export function isArrayOfItemTuples(x: readonly unknown[]): x is [string, (number | number[])?][] {
	return Array.isArray(x[0]);
}

export default class LootTable {
	public length: number;
	public table: LootTableItem[];
	public totalWeight: number;
	public limit: number;
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

	private resolveName(name: string): number {
		return itemID(name);
	}

	private addToAllItems(
		items: number | number[] | LootTable | LootTableItem | LootTableItem[]
	): void {
		if (Array.isArray(items)) {
			for (const item of items) {
				this.addToAllItems(item);
			}
			return;
		}

		if (items instanceof LootTable) {
			this.allItems = Array.from(
				new Set(this.allItems.concat(Array.isArray(items) ? items : items.allItems))
			);
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
		quantity: number | number[] = 1
	): this {
		const resolved = typeof item === 'string' ? this.resolveName(item) : item;
		this.oneInItems.push({
			item: resolved,
			chance,
			quantity
		});

		this.addToAllItems(resolved);

		return this;
	}

	public tertiary(
		chance: number,
		item: LootTable | number | string,
		quantity: number | number[] = 1
	): this {
		const resolved = typeof item === 'string' ? this.resolveName(item) : item;
		this.tertiaryItems.push({
			item: resolved,
			chance,
			quantity
		});

		this.addToAllItems(resolved);

		return this;
	}

	public every(item: LootTable | number | string, quantity: number | number[] = 1): this {
		const resolved = typeof item === 'string' ? this.resolveName(item) : item;
		this.everyItems.push({
			item: resolved,
			quantity
		});

		this.addToAllItems(resolved);

		return this;
	}

	public add(
		item: LootTable | number | string | [string, (number | number[])?][] | LootTableItem[],
		quantity: number[] | number = 1,
		weight = 1
	): this {
		if (typeof item === 'string') {
			return this.add(this.resolveName(item), quantity, weight);
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
					quantity: this.determineQuantity(itemToAdd[1]) || 1
				});
			}

			return this.add(newItems, quantity, weight);
		}

		this.length += 1;
		this.totalWeight += weight;

		this.addToAllItems(item);

		this.table.push({
			item,
			weight,
			quantity
		});

		return this;
	}

	public roll(): ReturnedLootItem[] {
		// Random float between 0 and the total weighting
		const randomWeight = randFloat(0, this.limit || this.totalWeight);

		// The index of the item that will be used.
		let result;
		let weight = 0;

		for (let i = 0; i < this.table.length; i++) {
			const item = this.table[i];

			weight += item.weight;
			if (randomWeight <= weight) {
				result = i;
				break;
			}
		}

		const chosenItem = this.table[result];

		// The items that are rolled.
		let items: ReturnedLootItem[] = [];
		for (const item of this.everyItems) {
			items = items.concat(this.generateResultItem(item));
		}

		for (const { chance, item, quantity } of this.tertiaryItems) {
			if (roll(chance)) items = items.concat(this.generateResultItem({ item, quantity }));
		}

		for (const { chance, item, quantity } of this.oneInItems) {
			if (roll(chance)) {
				items = items.concat(this.generateResultItem({ item, quantity }));
				return items;
			}
		}

		return chosenItem == undefined ? items : items.concat(this.generateResultItem(chosenItem));
	}

	private generateResultItem(item: LootTableItem): ReturnedLootItem[] {
		// If the chosen item is a loot table, the result is a roll of that table.
		if (item.item instanceof LootTable) {
			const quantity = this.determineQuantity(item.quantity);
			let items: ReturnedLootItem[] = [];

			for (let i = 0; i < quantity; i++) {
				items = items.concat(
					item.item
						.roll()
						.map((item) => this.generateResultItem(item))
						.flat()
				);
			}

			return items;
		}

		if (Array.isArray(item.item)) {
			const items = [];
			for (const singleItem of item.item) {
				items.push(this.generateResultItem(singleItem)[0]);
			}
			return items;
		}

		return [
			{
				item: item.item,
				quantity: this.determineQuantity(item.quantity)
			}
		];
	}

	protected determineQuantity(quantity: number | number[]): number {
		if (Array.isArray(quantity)) {
			return randInt(quantity[0], quantity[1]);
		} else {
			return quantity;
		}
	}
}
