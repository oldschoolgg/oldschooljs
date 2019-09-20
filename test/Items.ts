import { Items } from '../dist';

import * as test from 'tape';

test('Setup', async t => {
	await Items.fetchAll();
	t.end();
});

test('Fetching Item by ID', t => {
	t.plan(2);

	const twistedBow = Items.get(20997);
	if (!twistedBow) return t.fail('Missing item.');
	t.equal(twistedBow.id, 20997, 'Expected Twisted bow id to be 20997');
	t.equal(twistedBow.name, 'Twisted bow', 'Expected Twisted bow name to be correct');
});

test('Fetching Item by Name', t => {
	t.plan(2);

	const dragonDagger = Items.get('dragon dagger(p++)');
	if (!dragonDagger) return t.fail('Missing item.');
	t.equal(dragonDagger.id, 5699, 'Expected Dragon dagger(p++) to return 5699');
	t.equal(
		dragonDagger.name,
		'Dragon dagger(p++)',
		'Expected Dragon dagger(p++) name to be correct'
	);
});

test('Fetching Item by .find', t => {
	t.plan(2);

	const twistedBow = Items.find(item => item.name.includes('Twisted bow'));
	if (!twistedBow) return t.fail('Failed to find Twisted bow item with .find method.');
	t.equal(twistedBow.id, 20997, 'Expected Twisted Bow ID to be 20997');
	t.equal(twistedBow.name, 'Twisted bow', 'Expected Twisted bow name to be correct');
});
