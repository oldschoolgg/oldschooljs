import { objectEntries, randArrItem } from 'e';

import { BankItem, Item, ItemBank, ReturnedLootItem } from '../meta/types';
import {
	addBanks,
	bankHasAllItemsFromBank,
	multiplyBank,
	removeBankFromBank,
	resolveBank,
	resolveNameBank
} from '../util';
import itemID from '../util/itemID';
import Items from './Items';

export default class Bank {
	public bank: ItemBank;

	constructor(initialBank?: ItemBank) {
		this.bank = initialBank ? resolveBank(initialBank) : {};
	}

	public amount(item: string | number): number {
		return this.bank[typeof item === 'string' ? itemID(item) : item] ?? 0;
	}

	public addItem(item: number, quantity = 1): this {
		if (quantity < 1) return this;
		if (this.bank[item]) this.bank[item] += quantity;
		else this.bank[item] = quantity;
		return this;
	}

	public removeItem(item: number, quantity = 1): this {
		const currentValue = this.bank[item];

		if (typeof currentValue === 'undefined') return this;
		if (currentValue - quantity <= 0) {
			delete this.bank[item];
		} else {
			this.bank[item] = currentValue - quantity;
		}

		return this;
	}

	public add(
		item: string | number | ReturnedLootItem[] | ItemBank | Bank | undefined,
		quantity = 1
	): Bank {
		if (!item) {
			return this;
		}

		// Bank.add(123);
		if (typeof item === 'number') {
			return this.addItem(item, quantity);
		}

		if (Array.isArray(item)) {
			for (const _item of item) this.addItem(_item.item, _item.quantity);
			return this;
		}

		// Bank.add('Twisted bow');
		// Bank.add('Twisted bow', 5);
		if (typeof item === 'string') {
			return this.addItem(itemID(item), quantity);
		}

		if (item instanceof Bank) {
			return this.add(item.bank);
		}

		const firstKey: string | undefined = Object.keys(item)[0];
		if (firstKey === undefined) {
			return this;
		}

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
			for (const _item of item) this.remove(_item.item, _item.quantity);
			return this;
		}

		// Bank.remove('Twisted bow');
		// Bank.remove('Twisted bow', 5);
		if (typeof item === 'string') {
			return this.removeItem(itemID(item), quantity);
		}

		// Bank.remove(123);
		if (typeof item === 'number') {
			return this.removeItem(item, quantity);
		}

		if (item instanceof Bank) {
			return this.remove(item.bank);
		}

		const firstKey = Object.keys(item)[0];
		if (firstKey === undefined) {
			return this;
		}

		if (isNaN(Number(firstKey))) {
			this.remove(resolveNameBank(item));
		} else {
			this.bank = removeBankFromBank(this.bank, item);
		}

		return this;
	}

	public random(): BankItem | null {
		const entries = objectEntries(this.bank);
		if (entries.length === 0) return null;
		const randomEntry = randArrItem(entries);
		return { id: Number(randomEntry[0]), qty: randomEntry[1] };
	}

	public multiply(multiplier: number): this {
		this.bank = multiplyBank(this.bank, multiplier);
		return this;
	}

	public has(items: string | number | (string | number)[] | ItemBank): boolean {
		if (Array.isArray(items)) {
			return items.every((item) => this.amount(item) > 0);
		}

		if (typeof items === 'string' || typeof items === 'number') {
			return this.amount(items) > 0;
		}

		return bankHasAllItemsFromBank(this.bank, items);
	}

	public items(): [Item, number][] {
		const arr: [Item, number][] = [];
		for (const [key, val] of Object.entries(this.bank)) {
			arr.push([Items.get(parseInt(key)), val]);
		}
		return arr;
	}

	public forEach(fn: (item: Item, quantity: number) => unknown): void {
		for (const item of this.items()) {
			fn(...item);
		}
	}

	public clone(): Bank {
		return new Bank({ ...this.bank });
	}

	public fits(bank: Bank): number {
		const items = bank.items();
		const divisions = items
			.map(([item, qty]) => Math.floor(this.amount(item.id) / qty))
			.sort((a, b) => a - b);
		return divisions[0] ?? 0;
	}

	public filter(fn: (item: Item, quantity: number) => boolean, mutate = false): Bank {
		const result = new Bank();
		for (const item of this.items()) {
			if (fn(...item)) {
				result.add(item[0].id, item[1]);
			}
		}
		if (mutate) {
			this.bank = result.bank;
			return this;
		}
		return result;
	}

	public values(): ItemBank {
		return this.bank;
	}

	public toString(): string {
		const entries = Object.entries(this.bank);
		if (entries.length === 0) {
			return `No items`;
		}
		const res = [];
		for (const [id, qty] of entries.sort((a, b) => b[1] - a[1])) {
			res.push(`${qty.toLocaleString()}x ${Items.get(Number(id))?.name ?? 'Unknown item'}`);
		}

		return res.join(', ');
	}

	public get length(): number {
		return Object.keys(this.bank).length;
	}

	public value(): number {
		let value = 0;
		for (const [item, quantity] of this.items()) {
			value += item.price * quantity;
		}
		return value;
	}
}
