import { rand, randFloat, roll, itemID } from '../util';
import { LootTableItem, OneInItems, ReturnedLootItem, LootTableOptions } from '../meta/types';

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
	public weightPrecision = 7;

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

	public oneIn(chance: number, item: string | LootTable, quantity: number | number[] = 1): this {
		const resolved = typeof item === 'string' ? LootTable.resolveName(item) : item;
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
		item: string | LootTable,
		quantity: number | number[] = 1
	): this {
		const resolved = typeof item === 'string' ? LootTable.resolveName(item) : item;
		this.tertiaryItems.push({
			item: resolved,
			chance,
			quantity
		});
		this.addToAllItems(resolved);
		return this;
	}

	public every(item: string | LootTable, quantity: number | number[] = 1): this {
		const resolved = typeof item === 'string' ? LootTable.resolveName(item) : item;
		this.everyItems.push({
			item: resolved,
			quantity
		});

		this.addToAllItems(resolved);

		return this;
	}

	public precision(precision: number): this {
		this.weightPrecision = precision;
		return this;
	}

	public addNothing(): this {
		this.limit = 1;
		return this;
	}

	public add(
		item: LootTable | number | string | [string, (number | number[])?][] | LootTableItem[],
		quantity: number[] | number = 1,
		weight = 1
	): this {
		if (typeof item === 'string') {
			return this.add(LootTable.resolveName(item), quantity, weight);
		}
		// If its an array, but not a LootTableItem[] array.
		// i.e, if its directly from the user, and not being internally added.
		if (Array.isArray(item) && isArrayOfItemTuples(item)) {
			const newItems = [];
			const _item = item as [string, (number | number[])?][];
			for (const itemToAdd of _item) {
				const resolvedId = LootTable.resolveName(itemToAdd[0]);
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
		// Random number between 1 and limit the total weighting
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

	protected determineQuantity(quantity: number | number[]): number {
		if (Array.isArray(quantity)) {
			return rand(quantity[0], quantity[1]);
		} else {
			return quantity;
		}
	}

	private static resolveName(name: string): number {
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

		if (typeof items === 'number') {
			this.allItems.push(items);
		} else if (items instanceof LootTable) {
			this.allItems = this.allItems.concat(Array.isArray(items) ? items : items.allItems);
		} else {
			return this.addToAllItems(items.item);
		}
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
						.map(item => this.generateResultItem(item))
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
}
