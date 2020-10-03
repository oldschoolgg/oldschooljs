import test from 'tape';

import { Bank } from '../dist';

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
