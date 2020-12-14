import { Bank } from '../dist';
import { ReturnedLootItem } from '../dist/meta/types';
import LootTable from '../dist/structures/LootTable';
import { itemID, resolveNameBank } from '../dist/util';

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
});
