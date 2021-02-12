import { Bank, Items } from '../dist';
import { Item, ReturnedLootItem } from '../dist/meta/types';
import LootTable from '../dist/structures/LootTable';
import { itemID, multiplyBank, resolveNameBank } from '../dist/util';

const TestLootTable = new LootTable().add('Toolkit');

describe('Bank Class', () => {
	test('adding', () => {
		const bank = new Bank({ 1: 1 });
		expect(bank.amount(1)).toBe(1);
		bank.add(1, 1);
		expect(bank.amount(1)).toBe(2);
		expect(bank.amount('Toolkit')).toBe(2);
		expect(bank.amount('Twisted bow')).toBe(0);
		expect(bank.bank).toEqual({ 1: 2 });
	});

	test('removing', () => {
		const bank = new Bank({ 1: 1 });
		expect(bank.amount(1)).toBe(1);
		bank.remove(1, 1);
		expect(bank.amount(1)).toBe(0);
		expect(bank.amount('Toolkit')).toBe(0);

		expect(bank.bank).toEqual({});

		bank.add({ Coal: 1, Emerald: 1, Ruby: 1 });
		bank.remove({ Coal: 9999, Emerald: 9999, Toolkit: 10000 });
		expect(bank.bank).toEqual({ 1603: 1 });
	});

	test('chaining', () => {
		const bank = new Bank().add(1).remove(1).add(1);

		expect(bank.amount(1)).toBe(1);
	});

	test('multiply', () => {
		const bank = new Bank({ 1: 1, 2: 1, 3: 1, 4: 1 });
		bank.multiply(10);
		expect(bank.amount(1)).toBe(10);
		expect(bank.amount(2)).toBe(10);
		expect(bank.amount(3)).toBe(10);
		expect(bank.amount(4)).toBe(10);
	});

	test('random', () => {
		const bank = new Bank({ 69: 420 });
		const random = bank.random();
		expect(random).toEqual({ id: 69, qty: 420 });
	});

	test('ReturnedLootItem', () => {
		const items: ReturnedLootItem[] = [
			{ item: 1, quantity: 5 },
			{ item: 1, quantity: 5 },
			{ item: 1, quantity: 0 },
			{ item: 2, quantity: 10 }
		];
		const bank = new Bank().add(items);
		expect(bank.bank).toEqual({ 1: 10, 2: 10 });
		bank.remove(items);
		expect(bank.bank).toEqual({});
		expect(bank.amount(1)).toBe(0);
		expect(bank.amount(2)).toBe(0);
	});

	test('other', () => {
		const bank = new Bank().add(1).add(1).add(1).add(1);

		expect(bank.amount(1)).toBe(4);

		bank.remove({ 1: 4 });
		expect(bank.amount(1)).toBe(0);

		bank.add({ Toolkit: 4 });
		expect(bank.amount(1)).toBe(4);

		bank.remove({ Toolkit: 4 });
		expect(bank.amount(1)).toBe(0);

		bank.add(TestLootTable.roll());
		expect(bank.amount(1)).toBe(1);

		bank.add(new Bank({ 1: 1 }));
		expect(bank.amount(1)).toBe(2);

		bank.add(new Bank({ 1: 0 }));
		expect(bank.amount(1)).toBe(2);

		bank.remove(new Bank({ 1: 1 }));
		bank.add(new Bank({}));
		bank.add({});

		expect(bank.amount(1)).toBe(1);
	});

	test('has', () => {
		const source = resolveNameBank({
			Coal: 100,
			'Monkey nuts': 100,
			Ruby: 100
		});
		const bank = new Bank(source);

		expect(bank.has('Coal')).toBe(true);
		expect(bank.has('Ruby')).toBe(true);
		expect(bank.has(itemID('Monkey nuts'))).toBe(true);

		expect(bank.has(itemID('Emerald'))).toBe(false);
		expect(bank.has('Emerald')).toBe(false);

		expect(bank.has(['Coal'])).toBe(true);
		expect(bank.has(['Coal', 'Ruby', 'Monkey nuts'])).toBe(true);
		expect(bank.has(['Emerald'])).toBe(false);
		expect(bank.has(['Coal', 'Ruby', 'Monkey nuts', 'Emerald'])).toBe(false);

		expect(bank.has(source)).toBe(true);
		expect(bank.has({ Emerald: 1 })).toBe(false);
	});

	test('toString', () => {
		const bank = new Bank(resolveNameBank({ Coal: 20, Egg: 5000, Emerald: 1, Ruby: 20_000 }));
		bank.add('Twisted bow', 0);
		expect(bank.toString()).toEqual('20,000x Ruby, 5,000x Egg, 20x Coal, 1x Emerald');
		expect(bank.length).toEqual(4);
		bank.add('3rd age platebody', 2);
		expect(bank.toString()).toEqual(
			'20,000x Ruby, 5,000x Egg, 20x Coal, 2x 3rd age platebody, 1x Emerald'
		);
		expect(bank.length).toEqual(5);
		expect(new Bank().toString()).toEqual('No items');
	});

	test('.items()', () => {
		const bank = new Bank(resolveNameBank({ Coal: 20, Egg: 5000, Emerald: 1, Ruby: 20_000 }));
		const actual = bank.items();
		const expected = [
			[Items.get('Coal'), 20],
			[Items.get('Egg'), 5000],
			[Items.get('Emerald'), 1],
			[Items.get('Ruby'), 20_000]
		];
		expect(actual).toEqual(expect.arrayContaining(expected));
		expect(expected).toEqual(expect.arrayContaining(actual));
	});

	test('.forEach()', () => {
		const bank = new Bank(resolveNameBank({ Coal: 20, Egg: 5000, Emerald: 1, Ruby: 20_000 }));
		const mockCallback = jest.fn(() => null);
		bank.forEach(mockCallback);
		expect(mockCallback).toHaveBeenCalledTimes(bank.length);
		expect(mockCallback).toHaveBeenCalledWith(Items.get('Coal'), 20);
	});

	test('.filter()', () => {
		const baseBank = resolveNameBank({
			Coal: 20,
			Egg: 5000,
			Emerald: 1,
			Ruby: 20_000,
			Toolkit: 1
		});
		const bank = new Bank(baseBank);
		const cb = jest.fn((item: Item) => item.tradeable);
		const filtered = bank.filter(cb);
		expect(cb).toHaveBeenCalledTimes(bank.length);
		expect(cb).toHaveBeenCalledWith(Items.get('Coal'), 20);
		expect(filtered.length).toEqual(bank.length - 1);
		expect(filtered.amount('Toolkit')).toEqual(0);
		expect(bank.amount('Toolkit')).toEqual(1);
	});

	test('.clone()', () => {
		const baseBank = resolveNameBank({
			Coal: 20,
			Egg: 5000,
			Emerald: 1,
			Ruby: 20_000,
			Toolkit: 1
		});
		const bank = new Bank(baseBank);
		const cloned = bank.clone();
		cloned.remove('Coal', 20);
		expect(cloned.amount('Coal')).toEqual(0);
		expect(bank.amount('Coal')).toEqual(20);
	});

	test('.fits()', () => {
		const baseBank = resolveNameBank({
			Coal: 20,
			Egg: 5000,
			Emerald: 1,
			Ruby: 20_000,
			Toolkit: 1
		});
		const bank = new Bank(baseBank);
		expect(bank.fits(bank)).toEqual(1);

		const b1 = new Bank(multiplyBank(bank.bank, 2));
		expect(b1.fits(bank)).toEqual(2);

		const b2 = new Bank(resolveNameBank({ Coal: 1 }));
		expect(bank.fits(b2)).toEqual(20);

		const b3 = new Bank(resolveNameBank({ Coal: 1, Emerald: 5 }));
		expect(bank.fits(b3)).toEqual(0);

		const b4 = new Bank(resolveNameBank({ Coal: 1, Ruby: 10_000 }));
		expect(bank.fits(b4)).toEqual(2);

		const b5 = new Bank(resolveNameBank({ Coal: 1, 'Twisted bow': 5 }));
		expect(bank.fits(b5)).toEqual(0);

		const b6 = new Bank(resolveNameBank({ Coal: 10, Ruby: 10_000 }));
		expect(bank.fits(b6)).toEqual(2);

		const b7 = new Bank(resolveNameBank({ Coal: 11, Ruby: 10_000 }));
		expect(bank.fits(b7)).toEqual(1);
		expect(b7.fits(bank)).toEqual(0);

		const b8 = new Bank().add('Coal', 100).add('Ruby', 100);
		expect(b8.fits(new Bank().add('Coal', 100).add('Ruby', 1))).toEqual(1);
		expect(b8.fits(new Bank().add('Coal', 500).add('Ruby', 1))).toEqual(0);

		expect(bank.fits(new Bank())).toEqual(0);
	});
});
