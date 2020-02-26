import { Items } from '../dist';
import test from 'tape';
import { Item } from '../dist/meta/types';

const expectedIDTuple = [
	['Coins', 995],

	['Clue scroll (beginner)', 23182],
	['Clue scroll (easy)', 2677],
	['Clue scroll (medium)', 2801],
	['Clue scroll (hard)', 2722],
	['Clue scroll (elite)', 12073],
	['Clue scroll (master)', 19835],

	['Reward casket (beginner)', 23245],
	['Reward casket (easy)', 20546],
	['Reward casket (medium)', 20545],
	['Reward casket (hard)', 20544],
	['Reward casket (elite)', 20543],
	['Reward casket (master)', 19836],

	// Random
	['Air rune', 556],
	["Zulrah's scales", 12934],
	['Bones', 526],
	['Cannonball', 2],
	['Opal bolt tips', 45],
	['Runite bolts', 9144],
	['Sapphire bolt tips', 9189],
	['Onyx bolts (e)', 9245],
	['Runite bolts (unf)', 9381],
	['Dragon arrow', 11212],
	['Dragon dart tip', 11232],
	['Dragon arrowtips', 11237],
	['Armadyl hilt', 11810],
	['Godsword shard 1', 11818],
	['Elysian sigil', 12819],

	// Clue
	['Spiked manacles', 23389],
	['Adamant platebody (h1)', 23392],
	['Adamant platebody (h2)', 23395],
	['Adamant platebody (h3)', 23398],
	['Adamant platebody (h4)', 23401],
	['Adamant platebody (h5)', 23404],
	['Wolf mask', 23407],
	['Wolf cloak', 23410],
	['Climbing boots (g)', 23413]
];

// Check that items have the ID that we expect them to have, and not some random other version of that item.
function checkItems(): void {
	for (const [itemName, itemID] of expectedIDTuple) {
		const item = Items.get(itemName);
		if (!item) {
			console.error(`*ERROR*: ${itemName} doesnt exist?`);
			continue;
		}
		if (item.id !== itemID) {
			console.error(
				`*ERROR*: ${itemName} has the wrong item ID! Is[${item.id}] ShouldBe[${itemID}]`
			);
			continue;
		}
		console.log(`${itemName} has the right ID!`);
	}
}

test('Pre-fetch checks', t => {
	checkItems();
	t.end();
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
	checkItems();
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
