import { Items } from '../dist';
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
	['Climbing boots (g)', 23413],

	['Ring of endurance (uncharged)', 24844]
];

// Check that items have the ID that we expect them to have, and not some random other version of that item.
function checkItems(): void {
	for (const [itemName, itemID] of expectedIDTuple) {
		const item = Items.get(itemName);
		if (!item) {
			fail(`*ERROR*: ${itemName} doesnt exist?`);
		}
		if (item.id !== itemID) {
			fail(`*ERROR*: ${itemName} has the wrong item ID! Is[${item.id}] ShouldBe[${itemID}]`);
		}
	}
}

describe('Items', () => {
	beforeAll(() => {
		checkItems();
	});

	test.concurrent(
		'Fetching Item by ID',
		async (done) => {
			expect.assertions(6);

			const [tbow, superStr, dragonDagger, coins] = [
				Items.get(20997),
				Items.get(2440),
				Items.get('dragon dagger(p++)'),
				Items.get('Coins')
			];

			if (!tbow) return done.fail('Missing item.');
			expect(tbow.id).toBe(20997);
			expect(tbow.name).toBe('Twisted bow');

			if (!superStr) return done.fail('Missing item.');
			expect(superStr.id).toBe(2440);

			if (!dragonDagger) return done.fail('Missing item.');
			expect(dragonDagger.id).toBe(5698);
			expect(dragonDagger.name).toBe('Dragon dagger(p++)');

			if (!coins) return done.fail('Missing item.');
			expect(coins.id).toBe(995);
		},
		60000
	);

	test.concurrent.each(["Zulrah's scales", 'Belladonna seed'])(
		'Duplicate/Stacked item counts',
		(itemName) => {
			const itemArr = Items.filter((i) => i.name === itemName).array();
			expect(itemArr.length !== 1).toBeFalsy();

			const item = itemArr[0] as Item | undefined;

			if (!item || !item.tradeable || !item.highalch) {
				fail(`Invalid item for ${itemName}?`);
			}
		},
		60000
	);
});
