import { rand } from '../util';
import { Items } from '..';

export default class LootTable {
	public length: number;
	public table: any[];
	public totalWeight: number;
	public limit: number;

	public constructor(limit?: number) {
		this.table = [];
		this.length = 0;
		this.totalWeight = 0;
		this.limit = limit;
	}

	public add(item: any, quantity: number[] | number = 1, weight: number = 1) {
		this.length += 1;
		this.totalWeight += weight;

		this.table.push({
			item,
			weight,
			quantity
		});

		return this;
	}

	public addItem(item: number | string, quantity: number[] | number = 1, weight: number = 1) {
		const itemID = Items.get(item).id;
		return this.add(itemID, quantity, weight);
	}

	public roll() {
		// If this loot table has no items, return null;
		if (this.length === 0) return null;

		// Random number between 1 and the total weighting
		const randomWeight = rand(1, this.limit || this.totalWeight);

		if (randomWeight > this.totalWeight) return null;

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

		let chosenItem = this.table[result];

		if (chosenItem.item === undefined) return null;

		// If the chosen item is a loot table, the result is a roll of that table.
		if (chosenItem.item instanceof LootTable) {
			chosenItem = chosenItem.item.roll();
		}

		return {
			item: chosenItem.item,
			quantity: Array.isArray(chosenItem.quantity)
				? rand(chosenItem.quantity[0], chosenItem.quantity[1])
				: chosenItem.quantity
		};
	}
}
