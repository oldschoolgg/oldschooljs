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
	const loot = Monsters.Goblin.kill(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('General Graardor', async (test): Promise<void> => {
	const expectedRates = {
		'Pet general graardor': 5000,
		'Curved bone': 5012.5,
		'Long bone': 400,
		'Clue scroll(elite)': 250,
		'Bandos chestplate': 1 / (1 / 381 + 3 / 16_129),
		'Bandos tassets': 1 / (1 / 381 + 3 / 16_129),
		'Bandos boots': 1 / (1 / 381 + 3 / 16_129),
		'Bandos hilt': 508,
		'Godsword shard 1': 1 / (1 / 762 + 3 / 1_524),
		'Godsword shard 2': 1 / (1 / 762 + 3 / 1_524),
		'Godsword shard 3': 1 / (1 / 762 + 3 / 1_524),
		'Rune longsword': 15.88,
		'Rune 2h sword': 15.88,
		'Rune platebody': 15.88,
		'Rune pickaxe': 21.17,
		'Grimy snapdragon': 15.88 / 3,
		'Snapdragon seed': 15.88,
		'Super restore(4)': 15.88 / 3
	};

	const GeneralGraardor = Monsters.GeneralGraardor;
	test.equals(
		GeneralGraardor.table.totalWeight,
		127,
		'General Graardor table weight should be 127'
	);

	const number = 10_000_000;
	const loot = Monsters.GeneralGraardor.kill(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Commander Zilyana', async (test): Promise<void> => {
	const expectedRates = {
		'Pet zilyana': 5000,
		'Clue scroll(elite)': 250,
		'Saradomin sword': 1 / (1 / 127 + 9 / 16_129),
		'Armadyl crossbow': 508,
		'Saradomin hilt': 508,
		'Godsword shard 1': 1 / (1 / 762 + 3 / 1_524),
		'Godsword shard 2': 1 / (1 / 762 + 3 / 1_524),
		'Godsword shard 3': 1 / (1 / 762 + 3 / 1_524),
		'Adamant platebody': 15.88,
		'Rune kiteshield': 15.88,
		'Rune plateskirt': 15.88,
		'Prayer potion(4)': 15.88 / 3,
		'Super defence(3)': 15.88 / 3,
		'Magic potion(3)': 15.88 / 3,
		'Saradomin brew(3)': 21.17 / 3,
		'Super restore(4)': 21.17 / 3,
		Diamond: 15.88 / 6,
		'Grimy ranarr weed': 1 / (1 / (15.88 / 5) + 3 / 15.88),
		'Ranarr seed': 15.88 / 2,
		'Magic seed': 127
	};

	const CommanderZilyana = Monsters.CommanderZilyana;
	test.equals(
		CommanderZilyana.table.totalWeight,
		127,
		'Commander Zilyana table weight should be 127'
	);

	const number = 10_000_000;
	const loot = Monsters.CommanderZilyana.kill(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test("Kree'arra", async (test): Promise<void> => {
	const expectedRates = {
		"Pet kree'arra": 5000,
		'Curved bone': 5013,
		'Long bone': 400,
		'Clue scroll(elite)': 250,
		'Armadyl helmet': 1 / (1 / 381 + 3 / 16_129),
		'Armadyl chestplate': 1 / (1 / 381 + 3 / 16_129),
		'Armadyl chainskirt': 1 / (1 / 381 + 3 / 16_129),
		'Godsword shard 1': 1 / (1 / 762 + 3 / 1_524),
		'Godsword shard 2': 1 / (1 / 762 + 3 / 1_524),
		'Godsword shard 3': 1 / (1 / 762 + 3 / 1_524),
		'Armadyl hilt': 508,
		"Black d'hide body": 15.88,
		'Rune crossbow': 15.88,
		'Ranging potion(3)': 15.88 / 3,
		'Super defence(3)': 15.88 / 3,
		'Dwarf weed seed': 15.88 / 3,
		'Crystal key': 127,
		'Yew seed': 127
	};

	const Kreearra = Monsters.Kreearra;
	test.equals(Kreearra.table.totalWeight, 127, "Kree'arra table weight should be 127");

	const number = 10_000_000;
	const loot = Monsters.Kreearra.kill(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test("K'ril Tsutsaroth", async (test): Promise<void> => {
	const expectedRates = {
		"Pet k'ril tsutsaroth": 5000,
		'Clue scroll(elite)': 250,
		'Steam battlestaff': 127,
		'Zamorakian spear': 1 / (1 / 127 + 9 / 16_129),
		'Staff of the dead': 508,
		'Godsword shard 1': 1 / (1 / 762 + 3 / 1_524),
		'Godsword shard 2': 1 / (1 / 762 + 3 / 1_524),
		'Godsword shard 3': 1 / (1 / 762 + 3 / 1_524),
		'Zamorak hilt': 508,
		'Rune scimitar': 15.88,
		'Adamant platebody': 15.88,
		'Rune platelegs': 18.14,
		'Dragon dagger(p++)': 63.5,
		'Super attack(3)': 1 / (1 / (15.88 / 3) + 3 / 63.5),
		'Super strength(3)': 1 / (1 / (15.88 / 3) + 3 / 63.5),
		'Super restore(3)': 15.88 / 3,
		'Zamorak brew(3)': 15.88 / 3,
		'Grimy lantadyme': 15.88 / 10,
		'Lantadyme seed': 15.88 / 3
	};

	const KrilTsutsaroth = Monsters.KrilTsutsaroth;
	test.equals(
		KrilTsutsaroth.table.totalWeight,
		127,
		"K'ril Tsutsaroth table weight should be 127"
	);

	const number = 10_000_000;
	const loot = Monsters.KrilTsutsaroth.kill(number);
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

test('Men', async (test): Promise<void> => {
	const expectedRates = {
		Bones: 1,
		'Clue scroll (beginner)': 90,
		'Clue scroll (easy)': 128,
		Cabbage: 128,
		'Iron dagger': 128
	};

	const number = 3_000_000;
	const loot = Monsters.Man.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Callisto', async (test): Promise<void> => {
	const expectedRates = {
		'Tyrannical ring': 512,
		'Rune pickaxe': 10.67,
		'Rune 2h sword': 42.67,
		'Blood rune': 18.28 / 200,
		'Chaos rune': 18.28 / 400,
		'Death rune': 18.28 / 300,
		'Soul rune': 25.6 / 250,
		Cannonball: 32 / 250,
		'Uncut ruby': 18.28 / 20,
		'Uncut diamond': 18.28 / 10,
		'Mahogany logs': 21.33 / 400,
		'Limpwurt root': 25.6 / 25,
		'Magic logs': 25.6 / 100,
		'Red dragonhide': 42.67 / 75,
		Coconut: 64 / 60,
		'Uncut dragonstone': 64,
		'Grimy toadflax': 128 / 100,
		'Dragon pickaxe': 170.67,
		'Dragon 2h sword': 256,
		'Clue scroll (elite)': 100,
		'Long bone': 400,
		'Callisto cub': 2000,
		'Curved bone': 5013
	};

	const number = 10_000_000;
	const loot = Monsters.Callisto.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Chaos Elemental', async (test): Promise<void> => {
	const expectedRates = {
		'Anchovy pizza': 10 / 3,
		'Babydragon bones': 10 / 2,
		'Bat bones': 10 / 5,
		'Big bones': 10 / 3,
		Bones: 10 / 4,
		'Dragon bones': 10,
		'Super attack(4)': 10,
		'Super defence(4)': 10,
		'Super strength(4)': 10,
		Tuna: 10 / 5,
		'Dragon pickaxe': 256,
		'Dragon dagger': 11.63,
		'Dragon 2h sword': 128,
		'Air rune': 12.8 / 500,
		'Blood rune': 12.8 / 75,
		'Chaos rune': 12.8 / 250,
		'Death rune': 12.8 / 125,
		'Mithril dart': 12.8 / 300,
		'Rune arrow': 12.8 / 150,
		'Clue scroll (elite)': 200,
		'Pet chaos elemental': 300
	};

	const number = 10_000_000;
	const loot = Monsters.ChaosElemental.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Chaos Fanatic', async (test): Promise<void> => {
	const expectedRates = {
		Bones: 1,
		'Odium shard 1': 256,
		'Malediction shard 1': 256,
		Battlestaff: 25.6 / 5,
		'Splitbark body': 25.6,
		'Splitbark legs': 25.6,
		'Zamorak monk top': 32,
		'Zamorak monk bottom': 32,
		'Ancient staff': 128,
		'Fire rune': 32 / 250,
		'Smoke rune': 32 / 30,
		'Chaos rune': 32 / 175,
		'Blood rune': 32 / 50,
		Monkfish: 16 / 3,
		Shark: 16,
		'Prayer potion(4)': 16,
		'Anchovy pizza': 32 / 8,
		'Grimy lantadyme': 16 / 4,
		'Ring of life': 18.29,
		'Chaos talisman': 21.33,
		'Wine of zamorak': 21.33 / 10,
		'Sinister key': 32,
		'Pure essence': 64 / 250,
		'Clue scroll (hard)': 128,
		'Pet chaos elemental': 1000
	};

	const number = 10_000_000;
	const loot = Monsters.ChaosFanatic.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Crazy Archaeologist ', async (test): Promise<void> => {
	const expectedRates = {
		Bones: 1,
		'Odium shard 2': 256,
		'Malediction shard 2': 256,
		'Amulet of power': 18.29,
		'Rune crossbow': 25.6 / 2,
		"Red d'hide body": 32,
		'Rune knife': 32 / 10,
		'Mud rune': 32 / 30,
		Cannonball: 32 / 150,
		'Dragon arrow': 128 / 75,
		Shark: 16,
		'Potato with cheese': 16 / 3,
		'Prayer potion(4)': 16,
		'Anchovy pizza': 32 / 8,
		'Grimy dwarf weed': 16 / 4,
		'White berries': 21.33 / 10,
		'Silver ore': 21.33 / 40,
		'Red dragonhide': 25.6 / 10,
		'Rusty sword': 32,
		'Muddy key': 32,
		'Onyx bolt tips': 32 / 12,
		'Long bone': 64,
		Fedora: 128
	};

	const number = 10_000_000;
	const loot = Monsters.CrazyArchaeologist.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('King Black Dragon', async (test): Promise<void> => {
	const expectedRates = {
		'Dragon bones': 1,
		'Dragon pickaxe': 1500,
		'Rune longsword': 12.8,
		'Adamant platebody': 14.22,
		'Adamant kiteshield': 42.67,
		'Dragon med helm': 128,
		'Air rune': 12.8 / 300,
		'Iron arrow': 12.8 / 690,
		'Fire rune': 25.6 / 300,
		'Law rune': 25.6 / 30,
		'Blood rune': 25.6 / 30,
		'Yew logs': 12.8 / 150,
		'Adamantite bar': 25.6 / 3,
		'Runite bar': 42.67,
		'Gold ore': 64 / 100,
		'Amulet of power': 18.29,
		'Dragon javelin heads': 25.6 / 15,
		'Runite limbs': 32,
		Shark: 32 / 4,
		'Kbd heads': 128,
		'Clue scroll (elite)': 450,
		'Prince black dragon': 3000,
		'Draconic visage': 5000
	};

	const number = 10_000_000;
	const loot = Monsters.KingBlackDragon.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Scorpia', async (test): Promise<void> => {
	const expectedRates = {
		'Odium shard 3': 256,
		'Malediction shard 3': 256,
		'Rune 2h sword': 25.6,
		'Rune pickaxe': 25.6,
		'Rune spear': 25.6,
		'Rune chainbody': 32,
		'Rune scimitar': 32,
		'Rune sword': 32,
		'Rune warhammer': 32,
		'Dragon scimitar': 128,
		'Grimy kwuarm': 16 / 4,
		'Bucket of sand': 21.33 / 25,
		'Cactus spine': 21.33 / 10,
		'Admiral pie': 16 / 3,
		'Prayer potion(4)': 16,
		Shark: 16,
		'Anchovy pizza': 32 / 8,
		'Superantipoison(4)': 64,
		'Phoenix necklace': 18.29,
		'Dust rune': 32 / 30,
		'Weapon poison(++)': 32,
		'Ensouled scorpion head': 18,
		'Clue scroll (hard)': 100,
		"Scorpia's offspring": 2016
	};

	const number = 10_000_000;
	const loot = Monsters.Scorpia.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Venenatis', async (test): Promise<void> => {
	const expectedRates = {
		'Treasonous ring': 512,
		'Rune pickaxe': 10.67,
		'Rune knife': 25.6 / 60,
		'Rune 2h sword': 42.67,
		'Dragon pickaxe': 170.7,
		'Dragon 2h sword': 256,
		'Chaos rune': 18.29 / 400,
		'Death rune': 18.29 / 300,
		'Blood rune': 18.29 / 200,
		'Diamond bolts (e)': 25.6 / 100,
		Cannonball: 32 / 250,
		'Gold ore': 21.33 / 300,
		'Onyx bolt tips': 25.6 / 60,
		'Magic logs': 25.6 / 100,
		'Limpwurt root': 25.6 / 25,
		"Red spiders' eggs": 42.67 / 500,
		'Unicorn horn': 64 / 100,
		'Uncut dragonstone': 64,
		'Grimy snapdragon': 128 / 100,
		'Dark crab': 12.8 / 8,
		'Super restore(4)': 12.8 / 3,
		Supercompost: 26.95 / 100,
		'Antidote++(4)': 42.67 / 10,
		'Dark fishing bait': 128 / 375,
		'Yew seed': 128,
		'Magic seed': 128,
		'Palm tree seed': 128,
		'Clue scroll (elite)': 100,
		'Long bone': 400,
		'Venenatis spiderling': 2000,
		'Curved bone': 5013
	};

	const number = 10_000_000;
	const loot = Monsters.Venenatis.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test("Vet'ion", async (test): Promise<void> => {
	const expectedRates = {
		'Big bones': 1,
		'Ring of the gods': 512,
		'Rune pickaxe': 10.67,
		'Rune 2h sword': 42.67,
		'Ancient staff': 42.67,
		'Dragon pickaxe': 170.7,
		'Dragon 2h sword': 256,
		'Chaos rune': 18.29 / 400,
		'Death rune': 18.29 / 300,
		'Blood rune': 18.29 / 200,
		Cannonball: 32 / 250,
		'Gold ore': 21.33 / 300,
		'Limpwurt root': 25.6 / 25,
		'Magic logs': 25.6 / 100,
		'Oak plank': 25.6 / 300,
		'Dragon bones': 42.67 / 100,
		'Uncut dragonstone': 64,
		'Mort myre fungus': 64 / 200,
		'Grimy ranarr weed': 128 / 100,
		'Sanfew serum(4)': 25.6 / 10,
		'Ogre coffin key': 25.6 / 10,
		Supercompost: 26.95 / 100,
		'Dark fishing bait': 128 / 375,
		'Palm tree seed': 128,
		'Yew seed': 128,
		'Magic seed': 128,
		'Clue scroll (elite)': 100,
		'Long bone': 400,
		"Vet'ion jr.": 2000,
		'Skeleton champion scroll': 5000,
		'Curved bone': 5013
	};

	const number = 10_000_000;
	const loot = Monsters.Vetion.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Aberrant Spectre', async (test): Promise<void> => {
	const expectedRates = {
		'Steel axe': 42.67,
		'Mithril kiteshield': 128,
		'Lava battlestaff': 128,
		'Adamant platelegs': 128,
		'Rune full helm': 128,
		'Mystic robe bottom (dark)': 512,
		Coins: 128 / 460,
		'Clue scroll (hard)': 128
	};

	const number = 10_000_000;
	const loot = Monsters.AberrantSpectre.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Abyssal Demon', async (test): Promise<void> => {
	const expectedRates = {
		Ashes: 1,
		'Black sword': 32,
		'Steel battleaxe': 42.67,
		'Black axe': 64,
		'Mithril kiteshield': 128,
		'Rune chainbody': 128,
		'Rune med helm': 128,
		'Abyssal whip': 512,
		'Abyssal dagger': 32768,
		'Air rune': 16 / 50,
		'Chaos rune': 21.33 / 10,
		'Blood rune': 32 / 7,
		'Pure essence': 25.6 / 60,
		'Adamantite bar': 64,
		Lobster: 64,
		'Cosmic talisman': 128,
		'Defence potion(3)': 128,
		'Ensouled abyssal head': 25,
		'Clue scroll (hard)': 128,
		'Clue scroll (elite)': 1200,
		'Abyssal head': 6000
	};

	const number = 20_000_000;
	const loot = Monsters.AbyssalDemon.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Adamant Dragon', async (test): Promise<void> => {
	const expectedRates = {
		'Dragon bones': 1,
		'Adamant platebody': 12.22,
		'Rune mace': 15.71,
		'Rune scimitar': 15.71,
		'Dragon med helm': 110,
		'Dragon platelegs': 110,
		'Dragon plateskirt': 110,
		'Wrath talisman': 110,
		'Clue scroll (elite)': 320,
		'Dragon limbs': 1000,
		'Dragon metal slice': 5000,
		'Draconic visage': 9000
	};

	const number = 10_000_000;
	const loot = Monsters.AdamantDragon.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Ankou', async (test): Promise<void> => {
	const expectedRates = {
		Bones: 1,
		'Black knife': 100,
		'Black robe': 100,
		'Death rune': 10 / 10,
		'Law rune': 16.67 / 2,
		'Pure essence': 20 / 15,
		Bass: 50,
		'Weapon poison': 50,
		'Fried mushrooms': 100,
		'Clue scroll (hard)': 512
	};

	const number = 10_000_000;
	const loot = Monsters.Ankou.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Aviansie', async (test): Promise<void> => {
	const expectedRates = {
		Bones: 1,
		'Air rune': 7.111 / 15,
		'Water rune': 9.846 / 30,
		'Law rune': 32 / 2,
		'Nature rune': 32 / 9,
		'Body rune': 64 / 12,
		'Blood rune': 64 / 11,
		'Mind rune': 128 / 5,
		'Adamantite bar': 4.267 / 4,
		'Silver ore': 12.8,
		'Runite limbs': 128,
		'Rune dagger(p+)': 11.64,
		'Antipoison(3)': 25.6 / 5,
		Swordfish: 64 / 5,
		'Ensouled aviansie head': 35,
		'Clue scroll (hard)': 128
	};

	const number = 10_000_000;
	const loot = Monsters.Aviansie.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Basilisk', async (test): Promise<void> => {
	const expectedRates = {
		Bones: 1,
		'Mithril axe': 42.67,
		'Steel battleaxe': 42.67,
		'Mithril spear': 64,
		'Adamant full helm': 128,
		'Mithril kiteshield': 128,
		'Rune dagger': 128,
		'Mystic hat (light)': 512,
		'Water rune': 16 / 75,
		'Law rune': 42.67 / 3,
		'Adamantite ore': 42.67,
		'Basilisk head': 2000
	};

	const number = 10_000_000;
	const loot = Monsters.Basilisk.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Black Demon', async (test): Promise<void> => {
	const expectedRates = {
		Ashes: 1,
		'Black sword': 32,
		'Steel battleaxe': 42.67,
		'Black axe': 64,
		'Mithril kiteshield': 128,
		'Rune med helm': 128,
		'Rune chainbody': 128,
		'Air rune': 16 / 50,
		'Chaos rune': 18.29 / 10,
		'Blood rune': 32 / 7,
		'Fire rune': 128 / 37,
		Lobster: 42.67,
		'Adamantite bar': 64,
		'Defence potion(3)': 128,
		'Ensouled demon head': 35,
		'Clue scroll (hard)': 128
	};

	const number = 10_000_000;
	const loot = Monsters.BlackDemon.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Black Dragon', async (test): Promise<void> => {
	const expectedRates = {
		'Dragon bones': 1,
		'Black dragonhide': 1,
		'Mithril 2h sword': 32,
		'Mithril axe': 42.67,
		'Mithril battleaxe': 42.67,
		'Rune knife': 42.67 / 2,
		'Mithril kiteshield': 128,
		'Adamant platebody': 128,
		'Rune longsword': 128,
		'Adamant javelin': 6.4 / 30,
		'Fire rune': 16 / 50,
		'Blood rune': 42.67 / 15,
		'Air rune': 128 / 75,
		'Dragon javelin heads': 21.33 / 10,
		'Adamantite bar': 42.67,
		'Chocolate cake': 42.67,
		'Ensouled dragon head': 35,
		'Clue scroll (hard)': 128,
		'Clue scroll (elite)': 500,
		'Draconic visage': 10000
	};

	const number = 10_000_000;
	const loot = Monsters.BlackDragon.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Bloodveld', async (test): Promise<void> => {
	const expectedRates = {
		'Steel axe': 32,
		'Steel full helm': 32,
		'Steel scimitar': 64,
		'Black boots': 128,
		'Mithril sq shield': 128,
		'Mithril chainbody': 128,
		'Rune med helm': 128,
		'Meat pizza': 42.67,
		'Gold ore': 64,
		'Ensouled bloodveld head': 35,
		'Clue scroll (hard)': 256
	};

	const number = 10_000_000;
	const loot = Monsters.Bloodveld.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Blue Dragon', async (test): Promise<void> => {
	const expectedRates = {
		'Blue dragonhide': 1,
		'Dragon bones': 1,
		'Steel platelegs': 32,
		'Mithril axe': 42.67,
		'Steel battleaxe': 42.67,
		'Mithril spear': 64,
		'Adamant full helm': 128,
		'Mithril kiteshield': 128,
		'Rune dagger': 128,
		'Adamantite ore': 42.67,
		Bass: 42.67,
		'Ensouled dragon head': 50,
		'Clue scroll (hard)': 128
	};

	const number = 10_000_000;
	const loot = Monsters.BlueDragon.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Brine Rat', async (test): Promise<void> => {
	const expectedRates = {
		Bones: 1,
		'Brine sabre': 512,
		'Clue scroll (medium)': 128
	};

	const number = 10_000_000;
	const loot = Monsters.BrineRat.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Cave Horror', async (test): Promise<void> => {
	const expectedRates = {
		'Big bones': 1,
		'Mithril axe': 42.67,
		'Rune dagger': 128,
		'Adamant full helm': 128,
		'Mithril kiteshield': 128,
		'Black mask (10)': 512,
		'Limpwurt root': 18.29,
		'Teak logs': 18.29 / 4,
		'Mahogany logs': 42.67 / 2,
		'Ensouled horror head': 30,
		'Clue scroll (hard)': 128,
		'Long bone': 400,
		'Curved bone': 5013
	};

	const number = 10_000_000;
	const loot = Monsters.CaveHorror.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Cave Kraken', async (test): Promise<void> => {
	const expectedRates = {
		'Staff of water': 16,
		'Rune med helm': 16,
		'Adamant spear': 32,
		'Rune warhammer': 32,
		Battlestaff: 32,
		'Water battlestaff': 32,
		'Mystic water staff': 32,
		'Uncharged trident': 200,
		'Kraken tentacle': 1200,
		'Clue scroll (hard)': 100,
		'Clue scroll (elite)': 1200
	};

	const number = 10_000_000;
	const loot = Monsters.CaveKraken.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});
test('Kraken', async (test): Promise<void> => {
	const expectedRates = {
		'Mystic water staff': 42.67,
		'Rune warhammer': 64,
		'Rune longsword': 64,
		'Mystic robe top': 128,
		'Mystic robe bottom': 128,
		'Trident of the seas (full)': 512,
		'Water rune': 12.8 / 400,
		'Chaos rune': 12.8 / 250,
		'Death rune': 12.8 / 150,
		'Blood rune': 12.8 / 60,
		'Soul rune': 18.29 / 50,
		'Mist rune': 32 / 100,
		'Watermelon seed': 42.67 / 24,
		'Torstol seed': 128 / 2,
		'Magic seed': 128,
		Battlestaff: 32 / 10,
		'Grimy snapdragon': 64 / 6,
		'Runite bar': 128 / 2,
		'Kraken tentacle': 400,
		'Clue scroll (elite)': 500,
		'Jar of dirt': 1000,
		'Pet kraken': 3000
	};

	const number = 10_000_000;
	const loot = Monsters.Kraken.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Dagannoth', async (test): Promise<void> => {
	const expectedRates = {
		Bones: 1,
		'Iron spear': 21.33,
		'Bronze spear': 25.6,
		'Mithril spear': 128,
		'Water rune': 32 / 15,
		'Steel arrow': 64 / 15,
		'Mithril javelin': 128 / 3,
		'Opal bolt tips': 64 / 12,
		Casket: 128,
		'Ensouled dagannoth head': 40,
		'Clue scroll (medium)': 128
	};

	const number = 10_000_000;
	const loot = Monsters.Dagannoth.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Dark Beast', async (test): Promise<void> => {
	const expectedRates = {
		'Big bones': 1,
		'Black battleaxe': 42.67,
		'Adamant sq shield': 128,
		'Rune chainbody': 128,
		'Rune med helm': 128,
		'Rune full helm': 128,
		'Rune 2h sword': 128,
		'Rune battleaxe': 128,
		'Dark bow': 512,
		'Death rune': 16 / 20,
		'Chaos rune': 18.29 / 30,
		'Blood rune': 32 / 15,
		'Adamantite bar': 64 / 3,
		'Adamantite ore': 128 / 5,
		'Death talisman': 128,
		'Runite ore': 128,
		'Clue scroll (hard)': 128,
		'Long bone': 400,
		'Clue scroll (elite)': 1200,
		'Curved bone': 5013
	};

	const number = 10_000_000;
	const loot = Monsters.DarkBeast.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Drake', async (test): Promise<void> => {
	const expectedRates = {
		'Drake bones': 1,
		"Drake's tooth": 512,
		"Drake's claw": 512,
		'Dragon thrownaxe': 2000 / 150,
		'Dragon knife': 2000 / 150,
		'Rune full helm': 28.33,
		"Red d'hide body": 42.5,
		"Black d'hide vamb": 85,
		'Mystic earth staff': 85,
		'Dragon mace': 85,
		'Clue scroll (hard)': 128
	};

	const number = 10_000_000;
	const loot = Monsters.Drake.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Dust Devil', async (test): Promise<void> => {
	const expectedRates = {
		Bones: 1,
		'Adamant axe': 42.67,
		'Rune dagger': 64,
		"Red d'hide vamb": 64,
		'Air battlestaff': 64,
		'Earth battlestaff': 64,
		"Black d'hide vamb": 128,
		'Mystic air staff': 128,
		'Mystic earth staff': 128,
		'Dragon dagger': 128,
		'Dust battlestaff': 4000,
		'Dragon chainbody': 32768,
		'Mithril bar': 42.67 / 10,
		'Ugthanki kebab': 64 / 4,
		'Adamantite bar': 128 / 4
	};

	const number = 10_000_000;
	const loot = Monsters.DustDevil.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Elf Warrior', async (test): Promise<void> => {
	const expectedRates = {
		Bones: 1,
		"Green d'hide body": 32,
		"Green d'hide chaps": 42.67,
		'Mithril spear': 64,
		'Mithril kiteshield': 128,
		'Adamant full helm': 128,
		'Rune dagger': 128,
		'Water rune': 16 / 70,
		'Nature rune': 25.6 / 12,
		'Law rune': 42.67 / 2,
		'Fire rune': 64 / 37,
		'Crystal teleport seed': 5.12,
		Bass: 42.67,
		Shark: 42.67,
		'Adamantite ore': 64,
		'Ensouled elf head': 40,
		'Clue scroll (hard)': 128
	};

	const number = 10_000_000;
	const loot = Monsters.ElfWarrior.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Fire Giant', async (test): Promise<void> => {
	const expectedRates = {
		'Big bones': 1,
		'Steel axe': 42.67,
		'Mithril sq shield': 64,
		'Fire battlestaff': 128,
		'Rune scimitar': 128,
		'Chaos rune': 18.29 / 5,
		'Rune arrow': 25.6 / 12,
		'Blood rune': 32 / 5,
		Lobster: 42.67,
		'Steel bar': 64,
		'Strength potion(2)': 128,
		'Ensouled giant head': 20,
		'Long bone': 400,
		'Giant champion scroll': 5000,
		'Curved bone': 5013
	};

	const number = 10_000_000;
	const loot = Monsters.FireGiant.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Ancient Wyvern', async (test): Promise<void> => {
	const expectedRates = {
		'Granite longsword': 600,
		'Granite boots': 600,
		'Unidentified small fossil': 29,
		'Unidentified medium fossil': 58,
		'Unidentified large fossil': 73,
		'Unidentified rare fossil': 292,
		'Clue scroll (elite)': 350,
		'Wyvern visage': 10000
	};

	const number = 10_000_000;
	const loot = Monsters.FossilIslandWyvernAncient.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Long-Tailed Wyvern', async (test): Promise<void> => {
	const expectedRates = {
		'Air battlestaff': 30.75,
		'Adamant battleaxe': 61.5,
		'Adamant full helm': 61.5,
		'Rune pickaxe': 61.5,
		'Adamant platebody': 61.5,
		'Granite longsword': 512,
		'Granite boots': 2560,
		'Pure essence': 15.37 / 150,
		'Teak logs': 20.5 / 35,
		Lobster: 15.37 / 2,
		'Prayer potion(4)': 17.57,
		'Adamant crossbow (u)': 61.5,
		Calcite: 61.5 / 2,
		Pyrophosphite: 61.5 / 2,
		'Unidentified small fossil': 35,
		'Unidentified medium fossil': 70,
		'Unidentified large fossil': 87.5,
		'Unidentified rare fossil': 350,
		'Clue scroll (hard)': 118,
		'Wyvern visage': 12000
	};

	const number = 10_000_000;
	const loot = Monsters.FossilIslandWyvernLongTailed.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Spitting Wyvern', async (test): Promise<void> => {
	const expectedRates = {
		'Air battlestaff': 30.75,
		'Adamant battleaxe': 61.5,
		'Adamant full helm': 61.5,
		'Rune pickaxe': 61.5,
		'Adamant platebody': 61.5,
		'Granite longsword': 512,
		'Granite boots': 2560,
		'Pure essence': 15.37 / 150,
		'Teak logs': 20.5 / 35,
		Lobster: 15.37 / 2,
		'Prayer potion(4)': 17.57,
		'Adamant crossbow (u)': 61.5,
		Calcite: 61.5 / 2,
		Pyrophosphite: 61.5 / 2,
		'Unidentified small fossil': 35,
		'Unidentified medium fossil': 70,
		'Unidentified large fossil': 87.5,
		'Unidentified rare fossil': 350,
		'Clue scroll (hard)': 118,
		'Wyvern visage': 12000
	};

	const number = 10_000_000;
	const loot = Monsters.FossilIslandWyvernSpitting.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Taloned Wyvern', async (test): Promise<void> => {
	const expectedRates = {
		'Air battlestaff': 30.75,
		'Adamant battleaxe': 61.5,
		'Adamant full helm': 61.5,
		'Rune pickaxe': 61.5,
		'Adamant platebody': 61.5,
		'Granite longsword': 512,
		'Granite boots': 2560,
		'Pure essence': 15.37 / 150,
		'Teak logs': 20.5 / 35,
		Lobster: 15.37 / 2,
		'Prayer potion(4)': 17.57,
		'Adamant crossbow (u)': 61.5,
		Calcite: 61.5 / 2,
		Pyrophosphite: 61.5 / 2,
		'Unidentified small fossil': 35,
		'Unidentified medium fossil': 70,
		'Unidentified large fossil': 87.5,
		'Unidentified rare fossil': 350,
		'Clue scroll (hard)': 118,
		'Wyvern visage': 12000
	};

	const number = 10_000_000;
	const loot = Monsters.FossilIslandWyvernTaloned.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Gargoyle', async (test): Promise<void> => {
	const expectedRates = {
		'Granite maul': 256,
		'Mystic robe top (dark)': 512,
		'Adamant platelegs': 32,
		'Rune full helm': 42.67,
		'Rune 2h sword': 64,
		'Adamant boots': 128,
		'Rune battleaxe': 128,
		'Rune platelegs': 128,
		'Chaos rune': 16 / 30,
		'Death rune': 25.6 / 15,
		'Pure essence': 21.33 / 150,
		'Steel bar': 21.33 / 15,
		'Mithril bar': 64 / 15,
		'Runite ore': 64,
		'Clue scroll (hard)': 128
	};

	const number = 10_000_000;
	const loot = Monsters.Gargoyle.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Greater Demon', async (test): Promise<void> => {
	const expectedRates = {
		Ashes: 1,
		'Steel 2h sword': 32,
		'Steel axe': 42.67,
		'Steel battleaxe': 42.67,
		'Mithril kiteshield': 128,
		'Adamant platelegs': 128,
		'Rune full helm': 128,
		Tuna: 42.67,
		'Gold bar': 64,
		Thread: 128 / 10,
		'Ensouled demon head': 40,
		'Clue scroll (hard)': 128
	};

	const number = 10_000_000;
	const loot = Monsters.GreaterDemon.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Hellhound', async (test): Promise<void> => {
	const expectedRates = {
		Bones: 1,
		'Smouldering stone': 32768,
		'Clue scroll (hard)': 64
	};

	const number = 20_000_000;
	const loot = Monsters.Hellhound.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Iron Dragon', async (test): Promise<void> => {
	const expectedRates = {
		'Dragon bones': 1,
		'Iron bar': 1 / 5,
		'Dragon plateskirt': 1024,
		'Dragon platelegs': 1024,
		'Rune dart(p)': 18.29 / 9,
		'Adamant 2h sword': 32,
		'Adamant axe': 42.67,
		'Adamant battleaxe': 42.67,
		'Rune knife': 42.67 / 5,
		'Adamant sq shield': 128,
		'Rune med helm': 128,
		'Rune battleaxe': 128,
		'Rune javelin': 6.4 / 4,
		'Blood rune': 6.737 / 15,
		'Soul rune': 25.6 / 3,
		'Super strength(1)': 16,
		'Runite limbs': 25.6,
		'Adamantite bar': 42.67 / 2,
		Curry: 42.67,
		'Clue scroll (hard)': 128,
		'Draconic visage': 10000
	};

	const number = 10_000_000;
	const loot = Monsters.IronDragon.kill(number);

	checkThreshold(test, expectedRates, loot, number);
	test.end();
});
