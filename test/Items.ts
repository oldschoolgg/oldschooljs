import { Items } from '../dist';

import test from 'tape';

test('Fetching Item by ID', async t => {
	t.plan(6);

	const [tbow, superStr, dragonDagger, coins] = await Promise.all([
		Items.fetch(20997),
		Items.fetch(2440),
		Items.fetch('dragon dagger(p++)'),
		Items.fetch('Coins')
	]);

	if (!tbow) return t.fail('Missing item.');
	t.equal(tbow.id, 20997, 'Expected Twisted bow id to be 20997');
	t.equal(tbow.name, 'Twisted bow', 'Expected Twisted bow name to be correct');

	if (!superStr) return t.fail('Missing item.');
	t.equal(superStr.id, 2440);

	if (!dragonDagger) return t.fail('Missing item.');
	t.equal(dragonDagger.id, 5698, 'Expected Dragon dagger(p++) to return 5699');
	t.equal(
		dragonDagger.name,
		'Dragon dagger(p++)',
		'Expected Dragon dagger(p++) name to be correct'
	);

	if (!coins) return t.fail('Missing item.');
	t.equal(coins.id, 995);
});
