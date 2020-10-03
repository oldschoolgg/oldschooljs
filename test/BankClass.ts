import test from 'tape';

import { Bank } from '../dist';
import LootTable from '../dist/structures/LootTable';

const TestLootTable = new LootTable().add('Toolkit');

test('adding', t => {
	const bank = new Bank({ 1: 1 });
	t.is(bank.amount(1), 1);
	bank.add(1, 1);
	t.is(bank.amount(1), 2);
	t.is(bank.amount('Toolkit'), 2);
	t.is(bank.amount('Twisted bow'), 0);
	t.deepEqual(bank.loot, { 1: 2 });

	t.end();
});

test('removing', t => {
	const bank = new Bank({ 1: 1 });
	t.is(bank.amount(1), 1);
	bank.remove(1, 1);
	t.is(bank.amount(1), 0);
	t.is(bank.amount('Toolkit'), 0);

	t.deepEqual(bank.loot, {});

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

	t.end();
});
