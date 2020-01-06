import { Monsters, Items, Clues } from '../dist';

import test from 'tape';
import { ItemBank } from '../dist/meta/types';

function withinThreshold(source: number, target: number, epsilon = 5): boolean {
	if (source === target) return true;
	return Math.abs(source - target) < (epsilon / 100) * target;
}

function i(name: string): number {
	const item = Items.get(name);
	if (!item) throw `Missing ${name}`;
	return item.id;
}

function checkThreshold(
	test: test.Test,
	expectedRates: { [key: string]: number },
	result: ItemBank,
	numberDone: number
): void {
	for (const [id, qty] of Object.entries(result)) {
		if (isNaN(parseInt(id))) {
			return test.fail(`${id} isnt a number?`);
		}

		const item = Items.get(parseInt(id));
		if (!item) return test.fail(`Missing item: ${item}`);

		const expectedRate = expectedRates[id];
		if (!expectedRate) continue;

		const effectiveRate = numberDone / qty;

		if (!withinThreshold(effectiveRate, expectedRate, 10)) {
			test.fail(
				`${item.name} wasn't within threshold. 1 in ${effectiveRate} instead of ${expectedRate}`
			);
		} else {
			test.pass(`${item.name} 1 in ${effectiveRate} - ${expectedRate}`);
		}
	}
}

test('Giant Mole', async (test): Promise<void> => {
	const expectedRates: { [key: string]: number } = {
		[i('Big bones')]: 1,
		[i('Mole claw')]: 1,
		[i('Adamant longsword')]: 12.8,
		[i('Mithril platebody')]: 14.22,
		[i('Mithril bar')]: 42.67,
		[i('Oyster pearls')]: 128,
		[i('Baby mole')]: 3000,
		[i('Curved bone')]: 5013,
		[i('Clue scroll (elite)')]: 500,
		[i('Long bone')]: 400,
		[i('Brimstone key')]: 74,
		[i('Rune med helm')]: 128,
		[i('Mithril battleaxe')]: 128
	};

	const number = 3_000_000;
	const loot = Monsters.GiantMole.kill(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Beginner Clues', async (test): Promise<void> => {
	const expectedRates: { [key: string]: number } = {
		[i('Mole slippers')]: 180,
		[i('Shoulder parrot')]: 180,
		[i('Sandwich lady hat')]: 180,
		[i('Rune scimitar ornament kit (guthix)')]: 180,
		[i("Monk's robe (t)")]: 180,
		[i('Black 2h sword')]: 402.55,
		[i('Black full helm')]: 402.55,
		[i('Black sq shield')]: 402.55,
		[i('Staff of water')]: 22.36,
		[i('Steel platebody')]: 22.36,
		[i('Wizard hat')]: 22.36
	};

	const number = 500_000;
	const loot = Clues.Beginner.open(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Easy Clues', async (test): Promise<void> => {
	const expectedRates: { [key: string]: number } = {
		[i('Amulet of magic (t)')]: 360 / 3,
		[i('Wooden shield (g)')]: 1404 / 3,
		[i('Black platelegs (t)')]: 1404 / 3,
		[i('Black full helm (g)')]: 1404 / 3,
		[i('Black helm (h1)')]: 1404 / 3,
		[i('Steel plateskirt (g)')]: 1404 / 3,
		[i('Bronze platebody (t)')]: 1404 / 3,
		[i('Blue skirt (t)')]: 1404 / 3,
		[i('Saradomin robe legs')]: 1404 / 3,
		[i('Ancient robe legs')]: 1404 / 3,
		[i("Bob's purple shirt")]: 1404 / 3,
		[i('White beret')]: 1404 / 3,
		[i('Beanie')]: 1404 / 3,
		[i('Staff of bob the cat')]: 1404 / 3,
		[i('Green elegant legs')]: 2808 / 3,
		[i('Golden apron')]: 2808 / 3,
		[i("Golden chef's hat")]: 2808 / 3,
		[i('Amulet of magic')]: 40 / 3,
		[i('Saradomin page 4')]: 864 / 3,
		[i('Guthix page 3')]: 864 / 3,
		[i('Ancient page 4')]: 864 / 3,
		[i('Ancient blessing')]: 2160 / 3,
		[i('Iorwerth camp teleport')]: 452.6 / 3 / 10,
		[i('Law rune')]: 36 / 3 / 7.5,
		[i('Clue scroll (master)')]: 50
	};

	const number = 1_000_000;
	const loot = Clues.Easy.open(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Medium Clues', async (test): Promise<void> => {
	const expectedRates: { [key: string]: number } = {
		[i('Clue scroll (master)')]: 30,
		[i('Ranger boots')]: 1133 / 4,
		[i('Wizard boots')]: 1133 / 4,
		[i('Holy sandals')]: 1133 / 4,
		[i('Spiked manacles')]: 1133 / 4,
		[i('Adamant helm (h3)')]: 1133 / 4,
		[i('Ancient mitre')]: 1133 / 4,
		[i('Orange boater')]: 1133 / 4,
		[i('Cat mask')]: 1133 / 4,
		[i('Crier coat')]: 1133 / 4,
		[i('Wolf cloak')]: 1133 / 4,
		[i('Earth rune')]: 34.1 / 4 / 75,
		[i('Ancient page 2')]: 818.4 / 4,
		[i('Holy blessing')]: 682 / 4
	};

	const number = 1_000_000;
	const loot = Clues.Medium.open(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Hard Clues', async (test): Promise<void> => {
	const expectedRates: { [key: string]: number } = {
		[i('Clue scroll (master)')]: 15,
		[i('Ancient page 2')]: 650 / 5,
		[i('Lobster')]: 27.1 / 5 / 13.5,
		[i('Holy blessing')]: 541.7 / 5,
		[i('Magic shortbow')]: 27.1 / 5,
		[i('Magic comp bow')]: 270.8 / 5,
		[i("Armadyl d'hide shield")]: 9750 / 5,
		[i('Rune platebody (h1)')]: 8125 / 5,
		[i('Dual sai')]: 1625 / 5,
		[i('Master scroll book (empty)')]: 595.8 / 5,
		[i('Cyclops head')]: 1625 / 5,
		[i('Ancient coif')]: 1625 / 5,
		[i('Robin hood hat')]: 1625 / 5,
		[i('Dragon boots ornament kit')]: 1625 / 5,
		[i('Super energy(4)')]: 16250 / 5 / 15,
		[i('Super restore(4)')]: 16250 / 5 / 15,
		[i('Super attack(4)')]: 16250 / 5 / 5,
		[i('Super defence(4)')]: 16250 / 5 / 5,
		[i('Super strength(4)')]: 16250 / 5 / 5,
		[i('Gilded full helm')]: 35750 / 5,
		[i('Gilded chainbody')]: 35750 / 5,
		[i('3rd age platelegs')]: 211250 / 5,
		[i('3rd age range coif')]: 211250 / 5,
		[i('3rd age robe')]: 211250 / 5
	};

	const number = 20_000_000;
	const loot = Clues.Hard.open(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Elite Clues', async (test): Promise<void> => {
	const expectedRates: { [key: string]: number } = {
		[i('Clue scroll (master)')]: 5,
		[i('Dragon full helm ornament kit')]: 1250 / 5,
		[i('Royal crown')]: 1250 / 5,
		[i('Top hat')]: 1250 / 5,
		[i('Fremennik kilt')]: 1250 / 5,
		[i('Afro')]: 1250 / 5,
		[i("Rangers' tunic")]: 1250 / 5,
		[i('Ring of nature')]: 28750 / 5,
		[i('Crystal key')]: 28750 / 5,
		[i('Gilded scimitar')]: 28750 / 5,
		[i('Gilded sq shield')]: 63250 / 5,
		[i('3rd age full helmet')]: 488750 / 5,
		[i('3rd age vambraces')]: 488750 / 5,
		[i('3rd age wand')]: 488750 / 5,
		[i('Ranging potion(4)')]: 28750 / 5 / 30
	};

	const number = 25_000_000;
	const loot = Clues.Elite.open(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Master Clues', async (test): Promise<void> => {
	const expectedRates: { [key: string]: number } = {
		[i('Occult ornament kit')]: 851 / 6,
		[i('Arceuus hood')]: 851 / 6,
		[i('Half moon spectacles')]: 851 / 6,
		[i('Armadyl godsword ornament kit')]: 3404 / 6,
		[i('Dragon platebody ornament kit')]: 12765 / 6,
		[i('Ankou socks')]: 12765 / 6,
		[i("Mummy's hands")]: 12765 / 6,
		[i('Dragon kiteshield ornament kit')]: 25530 / 6,
		[i('Bucket helm (g)')]: 13616 / 6,
		[i('Ring of coins')]: 13616 / 6,
		[i('Cabbage')]: 13616 / 6 / 3,
		[i('Anti-venom+(4)')]: 13616 / 6 / 15,
		[i('Torstol')]: 13616 / 6 / 50,
		[i("Gilded d'hide vambs")]: 13616 / 6,
		[i('Gilded spade')]: 13616 / 6,
		[i('Gilded full helm')]: 149776 / 6,
		[i('Gilded 2h sword')]: 149776 / 6,
		[i('3rd age full helmet')]: 313168 / 6,
		[i('3rd age druidic robe top')]: 313168 / 6,
		[i('3rd age axe')]: 313168 / 6,
		[i('Dragon scimitar')]: 30.3 / 6,
		[i('Grimy snapdragon')]: 30.3 / 6 / 7.5,
		[i('Bloodhound')]: 1000
	};

	const number = 25_000_000;
	const loot = Clues.Master.open(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Zulrah', async (test): Promise<void> => {
	const expectedRates: { [key: string]: number } = {
		[i('Pet snakeling')]: 4000,
		[i('Jar of swamp')]: 3000,
		[i('Tanzanite fang')]: 512,
		[i('Magic fang')]: 512,
		[i('Serpentine visage')]: 512,
		[i('Uncut onyx')]: 512,
		[i('Tanzanite mutagen')]: 6580,
		[i('Magma mutagen')]: 6580,
		[i('Snakeskin')]: 22.55 / 35 / 2,
		[i('Mahogany logs')]: 31 / 50 / 2,
		[i('Zul-andra teleport')]: 16.53 / 4 / 2,
		[i('Dragon bones')]: 31 / 12 / 2,
		[i('Battlestaff')]: 24.8 / 10 / 2,
		[i('Dragon halberd')]: 124 / 2,
		[i('Death rune')]: 20.67 / 300 / 2,
		[i("Zulrah's scales")]: 1 / (199 + 500 / (49.6 / 2))
	};

	const number = 10_000_000;
	const loot = Monsters.Zulrah.kill(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});
