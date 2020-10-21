import { Clues } from '../dist';
import { checkThreshold } from './testUtil';

test('Beginner Clues', async () => {
	const expectedRates = {
		'Mole slippers': 180,
		'Shoulder parrot': 180,
		'Sandwich lady hat': 180,
		'Rune scimitar ornament kit (guthix)': 180,
		"Monk's robe (t)": 180,
		'Black 2h sword': 402.55,
		'Black full helm': 402.55,
		'Black sq shield': 402.55,
		'Staff of water': 22.36,
		'Steel platebody': 22.36,
		'Wizard hat': 22.36
	};

	const number = 500_000;
	const loot = Clues.Beginner.open(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Easy Clues', async () => {
	const expectedRates = {
		'Amulet of magic (t)': 360 / 3,
		'Wooden shield (g)': 1404 / 3,
		'Black platelegs (t)': 1404 / 3,
		'Black full helm (g)': 1404 / 3,
		'Black helm (h1)': 1404 / 3,
		'Steel plateskirt (g)': 1404 / 3,
		'Bronze platebody (t)': 1404 / 3,
		'Blue skirt (t)': 1404 / 3,
		'Saradomin robe legs': 1404 / 3,
		'Ancient robe legs': 1404 / 3,
		"Bob's purple shirt": 1404 / 3,
		'White beret': 1404 / 3,
		Beanie: 1404 / 3,
		'Staff of bob the cat': 1404 / 3,
		'Green elegant legs': 2808 / 3,
		'Golden apron': 2808 / 3,
		"Golden chef's hat": 2808 / 3,
		'Amulet of magic': 40 / 3,
		'Saradomin page 4': 864 / 3,
		'Guthix page 3': 864 / 3,
		'Ancient page 4': 864 / 3,
		'Ancient blessing': 2160 / 3,
		'Iorwerth camp teleport': 452.6 / 3 / 10,
		'Law rune': 36 / 3 / 7.5,
		'Clue scroll (master)': 50
	};

	const number = 1_000_000;
	const loot = Clues.Easy.open(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Medium Clues', async () => {
	const expectedRates = {
		'Clue scroll (master)': 30,
		'Ranger boots': 1133 / 4,
		'Wizard boots': 1133 / 4,
		'Holy sandals': 1133 / 4,
		'Spiked manacles': 1133 / 4,
		'Adamant helm (h3)': 1133 / 4,
		'Ancient mitre': 1133 / 4,
		'Orange boater': 1133 / 4,
		'Cat mask': 1133 / 4,
		'Crier coat': 1133 / 4,
		'Wolf cloak': 1133 / 4,
		'Earth rune': 34.1 / 4 / 75,
		'Ancient page 2': 818.4 / 4,
		'Holy blessing': 682 / 4
	};

	const number = 1_000_000;
	const loot = Clues.Medium.open(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Hard Clues', async () => {
	const expectedRates = {
		'Clue scroll (master)': 15,
		'Ancient page 2': 650 / 5,
		Lobster: 27.1 / 5 / 13.5,
		'Holy blessing': 541.7 / 5,
		'Magic shortbow': 27.1 / 5,
		'Magic comp bow': 270.8 / 5,
		"Armadyl d'hide shield": 9750 / 5,
		'Rune platebody (h1)': 8125 / 5,
		'Dual sai': 1625 / 5,
		'Master scroll book (empty)': 595.8 / 5,
		'Cyclops head': 1625 / 5,
		'Ancient coif': 1625 / 5,
		'Robin hood hat': 1625 / 5,
		'Dragon boots ornament kit': 1625 / 5,
		'Super energy(4)': 16250 / 5 / 15,
		'Super restore(4)': 16250 / 5 / 15,
		'Super attack(4)': 16250 / 5 / 5,
		'Super defence(4)': 16250 / 5 / 5,
		'Super strength(4)': 16250 / 5 / 5,
		'Gilded full helm': 35750 / 5,
		'Gilded chainbody': 35750 / 5,
		'3rd age platelegs': 211250 / 5,
		'3rd age range coif': 211250 / 5,
		'3rd age robe': 211250 / 5
	};

	const number = 20_000_000;
	const loot = Clues.Hard.open(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Elite Clues', async () => {
	const expectedRates = {
		'Clue scroll (master)': 5,
		'Dragon full helm ornament kit': 1250 / 5,
		'Royal crown': 1250 / 5,
		'Top hat': 1250 / 5,
		'Fremennik kilt': 1250 / 5,
		Afro: 1250 / 5,
		"Rangers' tunic": 1250 / 5,
		'Ring of nature': 28750 / 5,
		'Crystal key': 28750 / 5,
		'Gilded scimitar': 28750 / 5,
		'Gilded sq shield': 63250 / 5,
		'3rd age full helmet': 488750 / 5,
		'3rd age vambraces': 488750 / 5,
		'3rd age wand': 488750 / 5,
		'Ranging potion(4)': 28750 / 5 / 30,
		'Master scroll book (empty)': 355.2 / 5
	};

	const number = 25_000_000;
	const loot = Clues.Elite.open(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Master Clues', async () => {
	const expectedRates = {
		'Occult ornament kit': 851 / 6,
		'Arceuus hood': 851 / 6,
		'Half moon spectacles': 851 / 6,
		'Armadyl godsword ornament kit': 3404 / 6,
		'Dragon platebody ornament kit': 12765 / 6,
		'Ankou socks': 12765 / 6,
		"Mummy's hands": 12765 / 6,
		'Dragon kiteshield ornament kit': 25530 / 6,
		'Bucket helm (g)': 13616 / 6,
		'Ring of coins': 13616 / 6,
		Cabbage: 13616 / 6 / 3,
		'Anti-venom+(4)': 13616 / 6 / 15,
		Torstol: 13616 / 6 / 50,
		"Gilded d'hide vambraces": 13616 / 6,
		'Gilded spade': 13616 / 6,
		'Gilded full helm': 149776 / 6,
		'Gilded 2h sword': 149776 / 6,
		'3rd age full helmet': 313168 / 6,
		'3rd age druidic robe top': 313168 / 6,
		'3rd age axe': 313168 / 6,
		'Dragon scimitar': 30.3 / 6,
		'Grimy snapdragon': 30.3 / 6 / 7.5,
		Bloodhound: 1000,
		'Master scroll book (empty)': 333.5 / 6
	};

	const number = 25_000_000;
	const loot = Clues.Master.open(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});
