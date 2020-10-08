import { ItemBank, ReturnedLootItem } from '../meta/types';
import {
	addBanks,
	addItemToBank,
	removeBankFromBank,
	removeItemFromBank,
	resolveNameBank
} from '../util';
import itemID from '../util/itemID';

export default class Bank {
	public bank: ItemBank;

	constructor(initialBank?: ItemBank) {
		this.bank = initialBank ?? {};
	}

	public amount(item: string | number): number {
		return this.bank[typeof item === 'string' ? itemID(item) : item] ?? 0;
	}

	public add(item: string | number | ReturnedLootItem[] | ItemBank | Bank, quantity = 1): Bank {
		if (Array.isArray(item)) {
			for (const _item of item) this.add(_item.item, quantity);
			return this;
		}

		// Bank.add('Twisted bow');
		// Bank.add('Twisted bow', 5);
		if (typeof item === 'string') {
			this.bank = addItemToBank(this.bank, itemID(item), quantity);
			return this;
		}

		// Bank.add(123);
		if (typeof item === 'number') {
			this.bank = addItemToBank(this.bank, item, quantity);
			return this;
		}

		if (item instanceof Bank) {
			return this.add(item.bank);
		}

		const firstKey = Object.keys(item)[0];
		if (isNaN(Number(firstKey))) {
			this.add(resolveNameBank(item));
		} else {
			this.bank = addBanks([item, this.bank]);
		}

		return this;
	}

	public remove(
		item: string | number | ReturnedLootItem[] | ItemBank | Bank,
		quantity = 1
	): Bank {
		if (Array.isArray(item)) {
			for (const _item of item) this.remove(_item.item, quantity);
			return this;
		}

		// Bank.remove('Twisted bow');
		// Bank.remove('Twisted bow', 5);
		if (typeof item === 'string') {
			this.bank = removeItemFromBank(this.bank, itemID(item), quantity);
			return this;
		}

		// Bank.remove(123);
		if (typeof item === 'number') {
			this.bank = removeItemFromBank(this.bank, item, quantity);
			return this;
		}

		if (item instanceof Bank) {
			return this.remove(item.bank);
		}

		const firstKey = Object.keys(item)[0];
		if (isNaN(Number(firstKey))) {
			this.remove(resolveNameBank(item));
		} else {
			this.bank = removeBankFromBank(this.bank, item);
		}

		return this;
	}

	public random(): number | null {
		const keys = Object.keys(this.bank);
		if (keys.length === 0) return null;
		return Number(keys[Math.floor(Math.random() * keys.length)]);
	}

	public values(): ItemBank {
		return this.bank;
	}
}
