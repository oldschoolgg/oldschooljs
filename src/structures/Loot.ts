import { itemID } from '../util';
import { ItemBank, ReturnedLootItem } from '../meta/types';

export default class Loot {
	public loot: ItemBank = {};

	public add(item: ReturnedLootItem | ReturnedLootItem[] | string, quantity = 1): void {
		if (Array.isArray(item)) {
			for (const _item of item) this.add(_item);
			return;
		}

		// If they did just Loot.add('Bronze boots');
		if (typeof item === 'string') {
			return this.add({
				item,
				quantity
			});
		}

		const id = itemID(item.item);

		if (!this.loot[id]) this.loot[id] = item.quantity;
		else this.loot[id] += item.quantity;
	}

	public values(): ItemBank {
		return this.loot;
	}
}
