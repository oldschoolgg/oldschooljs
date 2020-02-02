import { ItemBank, ReturnedLootItem } from '../meta/types';
import itemID from '../util/itemID';

export default class Loot {
	public loot: ItemBank = {};

	public add(item: string | ReturnedLootItem | ReturnedLootItem[] | string, quantity = 1): void {
		if (Array.isArray(item)) {
			for (const _item of item) this.add(_item);
			return;
		}

		// If they did just Loot.add('Bronze boots');
		if (typeof item === 'string') {
			return this.add({
				item: itemID(item),
				quantity
			});
		}

		const id = item.item;

		if (!this.loot[id]) this.loot[id] = item.quantity;
		else this.loot[id] += item.quantity;
	}

	public values(): ItemBank {
		return this.loot;
	}
}
