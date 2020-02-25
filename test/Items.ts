import { Items } from '../dist';
import test from 'tape';
import { Item } from '../dist/meta/types';

test('Pre-fetch checks', async t => {
	t.plan(1);
	t.equals(Items.get('Coins')?.id, 995);
});

test('Setup', async t => {
	await Items.fetchAll();
	t.end();
});

test('Fetching Item by ID', async t => {
	t.plan(6);

	const [tbow, superStr, dragonDagger, coins] = [
		Items.get(20997),
		Items.get(2440),
		Items.get('dragon dagger(p++)'),
		Items.get('Coins')
	];

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

test('Duplicate/Stacked item counts', async t => {
	for (const itemName of ["Zulrah's scales", 'Belladonna seed']) {
		const itemArr = Items.filter(i => i.name === itemName).array();
		if (itemArr.length !== 1) {
			throw `Should be only 1x ${itemName}. Was: ${itemArr.map(i => i.id)}`;
		}

		const item = itemArr[0] as Item | undefined;

		if (!item || !item.tradeable || !item.highalch) {
			throw `Invalid item for ${itemName}?`;
		}
	}
	t.end();
});
