import test from 'tape';

import { Monsters } from '../dist';
import { checkThreshold } from './testUtil';

test('Barrows', async (test): Promise<void> => {
	const NUM_BROTHERS = 6;
	const NUM_BARR_ITEMS = NUM_BROTHERS * 4;

	const chanceOfSpecificBarrowsItem = (102 / (NUM_BROTHERS + 1)) * NUM_BARR_ITEMS;

	const expectedRates = {
		"Ahrim's hood": chanceOfSpecificBarrowsItem,
		"Ahrim's robetop": chanceOfSpecificBarrowsItem,
		"Ahrim's robeskirt": chanceOfSpecificBarrowsItem,
		"Ahrim's staff": chanceOfSpecificBarrowsItem,
		"Dharok's helm": chanceOfSpecificBarrowsItem,
		"Dharok's platebody": chanceOfSpecificBarrowsItem,
		"Dharok's platelegs": chanceOfSpecificBarrowsItem,
		"Dharok's greataxe": chanceOfSpecificBarrowsItem,
		"Guthan's helm": chanceOfSpecificBarrowsItem,
		"Guthan's platebody": chanceOfSpecificBarrowsItem,
		"Guthan's chainskirt": chanceOfSpecificBarrowsItem,
		"Guthan's warspear": chanceOfSpecificBarrowsItem,
		"Karil's coif": chanceOfSpecificBarrowsItem,
		"Karil's leathertop": chanceOfSpecificBarrowsItem,
		"Karil's leatherskirt": chanceOfSpecificBarrowsItem,
		"Karil's crossbow": chanceOfSpecificBarrowsItem,
		"Torag's helm": chanceOfSpecificBarrowsItem,
		"Torag's platebody": chanceOfSpecificBarrowsItem,
		"Torag's platelegs": chanceOfSpecificBarrowsItem,
		"Torag's hammers": chanceOfSpecificBarrowsItem,
		"Verac's helm": chanceOfSpecificBarrowsItem,
		"Verac's brassard": chanceOfSpecificBarrowsItem,
		"Verac's plateskirt": chanceOfSpecificBarrowsItem,
		"Verac's flail": chanceOfSpecificBarrowsItem
	};

	const Barrows = Monsters.Barrows;
	const number = 10_000_000;
	checkThreshold(test, expectedRates, Barrows.kill(number), number);
	test.end();
});

test('Giant Mole', async (test): Promise<void> => {
	const expectedRates = {
		'Big bones': 1,
		'Mole claw': 1,
		'Adamant longsword': 12.8,
		'Mithril platebody': 14.22,
		'Mithril bar': 42.67,
		'Oyster pearls': 128,
		'Baby mole': 3000,
		'Curved bone': 5000,
		'Clue scroll (elite)': 500,
		'Long bone': 400,
		'Rune med helm': 128,
		'Mithril battleaxe': 128
	};

	const Mole = Monsters.GiantMole;
	test.equals(Mole.table.totalWeight, 127, 'Mole table weight should be 127');

	const number = 10_000_000;
	checkThreshold(test, expectedRates, Mole.kill(number), number);
	test.end();
});

test('Zulrah', async (test): Promise<void> => {
	const expectedRates = {
		'Pet snakeling': 4000,
		'Jar of swamp': 3000,
		'Tanzanite fang': 512,
		'Magic fang': 512,
		'Serpentine visage': 512,
		'Uncut onyx': 512,
		'Tanzanite mutagen': 6580,
		'Magma mutagen': 6580,
		Snakeskin: 22.55 / 35 / 2,
		'Mahogany logs': 31 / 50 / 2,
		'Zul-andra teleport': 16.53 / 4 / 2,
		'Dragon bones': 31 / 12 / 2,
		Battlestaff: 24.8 / 10 / 2,
		'Dragon halberd': 124 / 2,
		'Death rune': 20.67 / 300 / 2,
		"Zulrah's scales": 1 / (199 + 500 / (49.6 / 2))
	};

	const Zulrah = Monsters.Zulrah;
	test.equals(Zulrah.table.totalWeight, 247, 'Zulrah table weight should be 247');

	const number = 10_000_000;
	const loot = Monsters.Zulrah.kill(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Cerberus', async (test): Promise<void> => {
	const expectedRates = {
		Hellpuppy: 3000,
		'Jar of souls': 2000,
		'Primordial crystal': 512,
		'Pegasian crystal': 512,
		'Eternal crystal': 512,
		'Smouldering stone': 512,
		'Rune platebody': 25.6,
		'Rune chainbody': 32,
		'Rune axe': 42.67,
		'Rune halberd': 64,
		'Fire rune': 21.33 / 300,
		'Pure essence': 25.6 / 300,
		'Blood rune': 32 / 60,
		Coal: 21.33 / 120,
		'Dragon bones': 25.6 / 20,
		'Fire orb': 32 / 20,
		'Runite ore': 42.67 / 5,
		'Key master teleport': 64 / 3
	};

	const Cerberus = Monsters.Cerberus;
	test.equals(Cerberus.table.totalWeight, 128, 'Cerberus table weight should be 128');

	const number = 10_000_000;
	const loot = Monsters.Cerberus.kill(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Dagannoth Prime', async (test): Promise<void> => {
	const expectedRates = {
		'Pet dagannoth prime': 5000,
		'Dragon axe': 128,
		'Seers ring': 128,
		'Earth battlestaff': 12.8,
		'Water battlestaff': 25.6,
		'Air battlestaff': 32,
		'Air rune': 21.33 / 150,
		'Earth rune': 25.6 / 75,
		'Death rune': 64 / 55,
		Shark: 12.8 / 5,
		'Oyster pearls': 25.6,
		'Pure essence': 25.6 / 150,
		'Grimy ranarr weed': 25.6
	};

	const DagannothPrime = Monsters.DagannothPrime;
	test.equals(
		DagannothPrime.table.totalWeight,
		128,
		'Dagannoth Prime table weight should be 128'
	);

	const number = 10_000_000;
	const loot = Monsters.DagannothPrime.kill(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Dagannoth Rex', async (test): Promise<void> => {
	const expectedRates = {
		'Pet dagannoth rex': 5000,
		'Dragon axe': 128,
		'Berserker ring': 128,
		'Warrior ring': 128,
		'Steel kiteshield': 7.529,
		'Mithril warhammer': 11.64,
		'Adamant axe': 18.29,
		'Steel platebody': 32,
		'Mithril pickaxe': 42.67,
		'Fremennik blade': 64,
		'Super attack(2)': 128,
		'Mithril ore': 12.8 / 25,
		'Adamantite bar': 42.67,
		Coal: 64 / 100,
		'Iron ore': 128 / 150,
		Shark: 128 / 5,
		Swordfish: 32 / 5,
		Bass: 18.29 / 5,
		'Grimy ranarr weed': 18.29
	};

	const DagannothRex = Monsters.DagannothRex;
	test.equals(DagannothRex.table.totalWeight, 128, 'Dagannoth Rex table weight should be 128');

	const number = 10_000_000;
	const loot = Monsters.DagannothRex.kill(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Dagannoth Supreme', async (test): Promise<void> => {
	const expectedRates = {
		'Pet dagannoth supreme': 5000,
		'Dragon axe': 128,
		'Archers ring': 128,
		'Mithril knife': 12.8 / (75 / 2),
		"Red d'hide vamb": 18.29,
		'Iron knife': 25.6 / 350,
		'Steel knife': 25.6 / 100,
		Seercull: 128,
		'Steel arrow': 25.6 / 150,
		'Iron arrow': 32 / 450,
		'Oyster pearls': 21.33,
		'Opal bolt tips': 25.6 / 20,
		Shark: 25.6 / 5,
		Feather: 128 / 375
	};

	const DagannothSupreme = Monsters.DagannothSupreme;
	test.equals(
		DagannothSupreme.table.totalWeight,
		128,
		'Dagannoth Supreme table weight should be 128'
	);

	const number = 10_000_000;
	const loot = Monsters.DagannothSupreme.kill(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Vorkath', async (test): Promise<void> => {
	const expectedRates = {
		Vorki: 3000,
		'Jar of decay': 3000,
		'Draconic visage': 5000,
		'Skeletal visage': 5000,
		"Vorkath's head": 50,
		'Clue scroll (elite)': 65,
		Battlestaff: 37.5 / 10 / 2,
		'Dragon battleaxe': 75 / 2,
		'Dragon platelegs': 75 / 2,
		'Death rune': 25 / 400 / 2,
		'Green dragonhide': 21.43 / ((25 + 30) / 2) / 2,
		'Black dragonhide': 21.43 / 20 / 2,
		'Dragon bolts (unf)': 18.75 / 75 / 2,
		'Dragon dart tip': 25 / 30 / 2,
		'Dragon arrowtips': 50 / ((25 + 50) / 2) / 2,
		'Diamond bolt tips': 111 / ((25 + 30) / 2) / 2,
		'Ruby bolt tips': 138.8 / ((25 + 30) / 2) / 2,
		'Sapphire bolt tips': 555 / ((25 + 30) / 2) / 2,
		'Adamantite ore': 21.73 / 20 / 2,
		'Magic logs': 30 / 50 / 2,
		Diamond: 37.5 / 15 / 2,
		'Wrath talisman': 50 / 2
	};

	const Vorkath = Monsters.Vorkath;
	test.equals(Vorkath.table.totalWeight, 148, 'Vorkath table weight should be 148');

	const number = 10_000_000;
	const loot = Monsters.Vorkath.kill(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Goblins', async (test): Promise<void> => {
	const expectedRates = {
		'Ensouled goblin head': 35,
		'Clue scroll (beginner)': 60,
		'Clue scroll (easy)': 128,
		'Goblin champion scroll': 5000,
		'Bronze spear': 32,
		'Bronze sq shield': 42.67,
		'Water rune': 21.33 / 6,
		'Body rune': 25.6 / 7,
		'Earth rune': 42.67 / 4,
		'Bronze bolts': 42.67 / 8,
		Hammer: 8.533,
		'Goblin mail': 25.6,
		Beer: 64,
		'Air talisman': 128
	};

	const number = 10_000_000;
	const loot = Monsters.Goblins.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Guard', async (test): Promise<void> => {
	const expectedRates = {
		'Clue scroll (medium)': 106,
		'Iron bolts': 12.8 / 7,
		'Bronze arrow': 42.67,
		'Air rune': 64 / 6,
		'Earth rune': 64 / 3,
		'Fire rune': 64 / 2,
		'Blood rune': 128,
		'Iron dagger': 21.33,
		'Body talisman': 32,
		Grain: 128,
		'Iron ore': 128
	};

	const number = 5_000_000;
	const loot = Monsters.Guard.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});
