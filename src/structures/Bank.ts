import { ItemBank, ReturnedLootItem, StringKeyedBank } from '../meta/types';
import {
	addBanks,
	addItemToBank,
	removeBankFromBank,
	removeItemFromBank,
	resolveNameBank
} from '../util';
import itemID from '../util/itemID';

export default class Bank {
	public loot: ItemBank;

	constructor(initialBank?: ItemBank) {
		this.loot = initialBank ?? {};
	}

	public amount(item: string | number): number {
		return this.loot[typeof item === 'string' ? itemID(item) : item] ?? 0;
	}

	public add(item: string | number | ReturnedLootItem[] | StringKeyedBank, quantity = 1): Bank {
		if (Array.isArray(item)) {
			for (const _item of item) this.add(_item.item, quantity);
			return this;
		}

		// Bank.add('Twisted bow');
		// Bank.add('Twisted bow', 5);
		if (typeof item === 'string') {
			this.loot = addItemToBank(this.loot, itemID(item), quantity);
			return this;
		}

		// Bank.add(123);
		if (typeof item === 'number') {
			this.loot = addItemToBank(this.loot, item, quantity);
			return this;
		}

		const firstKey = Object.keys(item)[0];
		if (isNaN(Number(firstKey))) {
			this.add(resolveNameBank(item));
		} else {
			this.loot = addBanks([item, this.loot]);
		}

		return this;
	}

	public remove(
		item: string | number | ReturnedLootItem[] | StringKeyedBank,
		quantity = 1
	): Bank {
		if (Array.isArray(item)) {
			for (const _item of item) this.remove(_item.item, quantity);
			return this;
		}

		// Bank.remove('Twisted bow');
		// Bank.remove('Twisted bow', 5);
		if (typeof item === 'string') {
			this.loot = removeItemFromBank(this.loot, itemID(item), quantity);
			return this;
		}

		// Bank.remove(123);
		if (typeof item === 'number') {
			this.loot = removeItemFromBank(this.loot, item, quantity);
			return this;
		}

		const firstKey = Object.keys(item)[0];
		if (isNaN(Number(firstKey))) {
			this.remove(resolveNameBank(item));
		} else {
			this.loot = removeBankFromBank(this.loot, item);
		}

		return this;
	}

	public values(): ItemBank {
		return this.loot;
	}
}
