import { rand, roll } from '../util/util';
import { LootTableItem, OneInItems, ReturnedLootItem, LootTableOptions } from '../meta/types';
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

	public constructor(lootTableOptions: LootTableOptions = {}) {
		this.table = [];
		this.oneInItems = [];
		this.tertiaryItems = [];
		this.everyItems = [];
		this.length = 0;
		this.totalWeight = 0;
		this.limit = lootTableOptions.limit;
	}

	private resolveName(name: string): number {
		return itemID(name);
	}

	public oneIn(chance: number, item: string | LootTable, quantity: number | number[] = 1): this {
		this.oneInItems.push({
			item: typeof item === 'string' ? this.resolveName(item) : item,
			chance,
			quantity
		});

		return this;
	}

	public tertiary(
		chance: number,
		item: string | LootTable,
		quantity: number | number[] = 1
	): this {
		this.tertiaryItems.push({
			item: typeof item === 'string' ? this.resolveName(item) : item,
			chance,
			quantity
		});

		return this;
	}

	public every(item: string | LootTable, quantity: number | number[] = 1): this {
		this.everyItems.push({
			item: typeof item === 'string' ? this.resolveName(item) : item,
			quantity
		});

		return this;
	}

	public add(
		item: LootTable | number | string | [string, (number | number[])?][] | LootTableItem[],
		quantity: number[] | number = 1,
		weight = 1,
		mult = false /* set if the added item is a loot table and
						the monster multiplies the drop from that table
						by the quantity instead of rolling that table separately */
	): this {
		if (typeof item === 'string') {
			return this.add(this.resolveName(item), quantity, weight, mult);
		}

		// If its an array, but not a LootTableItem[] array.
		// i.e, if its directly from the user, and not being internally added.
		if (Array.isArray(item) && isArrayOfItemTuples(item)) {
			const newItems = [];
			const _item = item as [string, (number | number[])?][];
			for (const itemToAdd of _item) {
				newItems.push({
					item: this.resolveName(itemToAdd[0]),
					quantity: this.determineQuantity(itemToAdd[1]) || 1
				});
			}

			return this.add(newItems, quantity, weight, mult);
		}

		this.length += 1;
		this.totalWeight += weight;

		this.table.push({
			item,
			weight,
			quantity,
			mult
		});

		return this;
	}

	public roll(): ReturnedLootItem[] {
		// Random number between 1 and the total weighting
		const randomWeight = rand(1, this.limit || this.totalWeight);

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

		return chosenItem == undefined
			? items
			: items.concat(this.generateResultItem(chosenItem, chosenItem.mult));
	}

	private generateResultItem(item: LootTableItem, mult = false): ReturnedLootItem[] {
		// If the chosen item is a loot table, the result is a roll of that table.
		if (item.item instanceof LootTable) {
			const quantity = this.determineQuantity(item.quantity);
			let items: ReturnedLootItem[] = [];

			//some monsters multiply the drop from a roll instead of having separate rolls on a table
			if (mult) {
				items = items.concat(item.item.roll());
				if (items.length > 0) {
					for (let i = 0; i < items.length; i++) {
						items[i].quantity *= quantity;
					}
				}
			} else {
				for (let i = 0; i < quantity; i++) {
					items = items.concat(
						item.item
							.roll()
							.map(item => this.generateResultItem(item))
							.flat()
					);
				}
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
			return rand(quantity[0], quantity[1]);
		} else {
			return quantity;
		}
	}
}
