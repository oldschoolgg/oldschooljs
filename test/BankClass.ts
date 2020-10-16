import test from 'tape';

import { Bank } from '../dist';
import { ReturnedLootItem } from '../dist/meta/types';
import LootTable from '../dist/structures/LootTable';

const TestLootTable = new LootTable().add('Toolkit');

test('adding', t => {
	const bank = new Bank({ 1: 1 });
	t.is(bank.amount(1), 1);
	bank.add(1, 1);
	t.is(bank.amount(1), 2);
	t.is(bank.amount('Toolkit'), 2);
	t.is(bank.amount('Twisted bow'), 0);
	t.deepEqual(bank.bank, { 1: 2 });

	t.end();
});

test('removing', t => {
	const bank = new Bank({ 1: 1 });
	t.is(bank.amount(1), 1);
	bank.remove(1, 1);
	t.is(bank.amount(1), 0);
	t.is(bank.amount('Toolkit'), 0);

	t.deepEqual(bank.bank, {});

	t.end();
});

test('chaining', t => {
	const bank = new Bank()
		.add(1)
		.remove(1)
		.add(1);

	t.is(bank.amount(1), 1);
	t.end();
});

test('multiply', t => {
	const bank = new Bank({ 1: 1, 2: 1, 3: 1, 4: 1 });
	bank.multiply(10);
	t.is(bank.amount(1), 10);
	t.is(bank.amount(2), 10);
	t.is(bank.amount(3), 10);
	t.is(bank.amount(4), 10);
	t.end();
});

test('random', t => {
	const bank = new Bank({ 69: 420 });
	const random = bank.random();
	t.deepEqual(random, { id: 69, qty: 420 });
	t.end();
});

test('ReturnedLootItem', t => {
	const items: ReturnedLootItem[] = [
		{ item: 1, quantity: 5 },
		{ item: 1, quantity: 5 },
		{ item: 1, quantity: 0 },
		{ item: 2, quantity: 10 }
	];
	const bank = new Bank().add(items);
	t.deepEqual(bank.bank, { 1: 10, 2: 10 });
	bank.remove(items);
	t.deepEqual(bank.bank, {});
	t.is(bank.amount(1), 0);
	t.is(bank.amount(2), 0);

	t.end();
});

test('other', t => {
	const bank = new Bank()
		.add(1)
		.add(1)
		.add(1)
		.add(1);

	t.is(bank.amount(1), 4);

	bank.remove({ 1: 4 });
	t.is(bank.amount(1), 0);

	bank.add({ Toolkit: 4 });
	t.is(bank.amount(1), 4);

	bank.remove({ Toolkit: 4 });
	t.is(bank.amount(1), 0);

	bank.add(TestLootTable.roll());
	t.is(bank.amount(1), 1);

	bank.add(new Bank({ 1: 1 }));
	t.is(bank.amount(1), 2);

	bank.add(new Bank({ 1: 0 }));
	t.is(bank.amount(1), 2);

	bank.remove(new Bank({ 1: 1 }));
	bank.add(new Bank({}));
	bank.add({});

	t.is(bank.amount(1), 1);

	t.end();
});
