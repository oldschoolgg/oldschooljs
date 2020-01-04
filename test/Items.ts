import { Items } from '../dist';

import test from 'tape';

test('Setup', async t => {
	await Items.fetchAll();
	t.end();
});

test('Correctness', t => {
	t.plan(2);

	const twistedBow = Items.filter(item => item.name === 'Twisted bow');
	if (!twistedBow) return t.fail('Expected 1 Twisted bow item.');
	t.equal(twistedBow.size, 1, 'Expected 1 Twisted bow item.');

	const superStrength = Items.filter(item => item.name === 'Super strength(4)');
	if (!superStrength) return t.fail('Expected 1 Super strength(4) item.');
	t.equal(superStrength.size, 1, 'Expected 1 Super strength(4) item.');
});

test('Fetching Item by ID', t => {
	t.plan(3);

	const twistedBow = Items.get(20997);
	if (!twistedBow) return t.fail('Missing item.');
	t.equal(twistedBow.id, 20997, 'Expected Twisted bow id to be 20997');
	t.equal(twistedBow.name, 'Twisted bow', 'Expected Twisted bow name to be correct');

	const superStrength = Items.get(2440);
	if (!superStrength) return t.fail('Missing item.');
	t.equal(superStrength.id, 2440);
});

//"2440": "Super strength(4)",

test('Fetching Item by Name', t => {
	t.plan(4);

	const dragonDagger = Items.get('dragon dagger(p++)');
	if (!dragonDagger) return t.fail('Missing item.');
	t.equal(dragonDagger.id, 5698, 'Expected Dragon dagger(p++) to return 5699');
	t.equal(
		dragonDagger.name,
		'Dragon dagger(p++)',
		'Expected Dragon dagger(p++) name to be correct'
	);

	const coins = Items.get('Coins');
	if (!coins) return t.fail('Missing item.');
	t.equal(coins.id, 995);

	const superStrength = Items.get('Super strength(4)');
	if (!superStrength) return t.fail('Missing item.');
	t.equal(superStrength.id, 2440);
});

test('Fetching Item by .find', t => {
	t.plan(4);

	const twistedBow = Items.find(item => item.name.includes('Twisted bow'));
	if (!twistedBow) return t.fail('Failed to find Twisted bow item with .find method.');
	t.equal(twistedBow.id, 20997, 'Expected Twisted Bow ID to be 20997');
	t.equal(twistedBow.name, 'Twisted bow', 'Expected Twisted bow name to be correct');

	const superStrength = Items.find(item => item.name === 'Super strength(4)');
	if (!superStrength) return t.fail('Failed to find super strength.');
	t.equal(superStrength.id, 2440);

	const dragonDagger = Items.find(item => item.name === 'Dragon dagger(p++)');
	if (!dragonDagger) return t.fail('Failed to find dragon dagger.');
	t.equal(dragonDagger.id, 5698);
});
