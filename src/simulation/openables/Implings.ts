import LootTable from '../../structures/LootTable';
import SimpleOpenable from '../../structures/SimpleOpenable';
import { EasyClueTable } from '../clues/Easy';
import { EliteClueTable } from '../clues/Elite';
import { HardClueTable } from '../clues/Hard';
import { MasterClueTable } from '../clues/Master';
import { MediumClueTable } from '../clues/Medium';

export const BabyImpling = new SimpleOpenable({
	id: 11238,
	name: 'Baby impling jar',
	aliases: ['baby impling', 'baby imp'],
	table: new LootTable()
		.add('Chisel', 1, 1)
		.add('Thread', 1, 1)
		.add('Needle', 1, 1)
		.add('Knife', 1, 1)
		.add('Cheese', 1, 1)
		.add('Hammer', 1, 1)
		.add('Ball of wool', 1, 1)
		.add('Anchovies', 1, 1)
		.oneIn(100, 'Spice')
		.oneIn(100, 'Flax')
		.oneIn(100, 'Mud pie')
		.oneIn(100, 'Seaweed')
		.oneIn(100, 'Air talisman')
		.oneIn(100, 'Silver bar')
		.oneIn(100, 'Sapphire')
		.oneIn(100, 'Hard leather')
		.oneIn(100, 'Lobster')
		.oneIn(100, 'Soft clay')
		.tertiary(50, 'Clue scroll (beginner)')
		.tertiary(100, 'Clue scroll (easy)')
});

export const YoungImpling = new SimpleOpenable({
	id: 11240,
	name: 'Young impling',
	aliases: ['young impling', 'young imp'],
	table: new LootTable()
		.add('Steel nails', 1, 1)
		.add('Lockpick', 1, 1)
		.add('Pure essence', 1, 1)
		.add('Tuna', 1, 1)
		.add('Chocolate slice', 1, 1)
		.add('Steel axe', 1, 1)
		.add('Meat pizza', 1, 1)
		.add('Bow string', 1, 1)
		.oneIn(100, 'Snape grass')
		.oneIn(100, 'Soft clay')
		.oneIn(100, 'Studded chaps')
		.oneIn(100, 'Steel full helm')
		.oneIn(100, 'Oak plank')
		.oneIn(100, 'Defence potion(3)')
		.oneIn(100, 'Mithril bar')
		.oneIn(100, 'Yew longbow')
		.oneIn(100, 'Garden pie')
		.oneIn(100, 'Jangerberries')
		.tertiary(25, 'Clue scroll (beginner)')
		.tertiary(50, 'Clue scroll (easy)')
});

export const GourmetImpling = new SimpleOpenable({
	id: 11242,
	name: 'Gourmet impling',
	aliases: ['gourmet impling', 'gourmet imp'],
	table: new LootTable()
		.add('Tuna', 1, 1)
		.add('Bass', 1, 1)
		.add('Curry', 1, 1)
		.add('Meat pie', 1, 1)
		.add('Chocolate cake', 1, 1)
		.add('Frog spawn', 1, 1)
		.add('Spice', 1, 1)
		.add('Curry leaf', 1, 1)
		.oneIn(1, 'Ugthanki kebab')
		.oneIn(1, 'Lobster', 4)
		.oneIn(1, 'Shark', 4)
		.oneIn(1, 'Fish pie')
		.oneIn(1, "Chef's delight")
		.oneIn(1, 'Rainbow fish', 5)
		.oneIn(1, 'Garden pie', 6)
		.oneIn(1, 'Swordfish', 3)
		.oneIn(1, 'Strawberries(5)')
		.oneIn(1, 'Cooked karambwan', 2)
		.tertiary(25, 'Clue scroll (easy)')
});

export const EarthImpling = new SimpleOpenable({
	id: 11244,
	name: 'Earth impling',
	aliases: ['earth impling', 'earth imp'],
	table: new LootTable()
		.add('Fire talisman')
		.add('Earth talisman')
		.add('Earth tiara')
		.add('Earth rune', 32)
		.add('Mithril ore')
		.add('Bucket of sand', 4)
		.add('Unicorn horn')
		.add('Compost', 6)
		.add('Gold ore')
		.oneIn(100, 'Steel bar')
		.oneIn(100, 'Mithril pickaxe')
		.oneIn(100, 'Wildblood seed', 2)
		.oneIn(100, 'Jangerberry seed', 2)
		.oneIn(100, 'Supercompost', 2)
		.oneIn(100, 'Mithril ore', 3)
		.oneIn(100, 'Harralander seed', 2)
		.oneIn(100, 'Coal', 6)
		.oneIn(100, 'Emerald', 2)
		.oneIn(100, 'Ruby')
		.tertiary(100, 'Clue scroll (medium)')
});

export const EssenceImpling = new SimpleOpenable({
	id: 11246,
	name: 'Essence impling',
	aliases: ['essence impling', 'essence imp'],
	table: new LootTable()
		.add('Pure essence', 20)
		.add('Water rune', 30)
		.add('Air rune', 30)
		.add('Fire rune', 50)
		.add('Mind rune', 25)
		.add('Body rune', 28)
		.add('Chaos rune', 4)
		.add('Cosmic rune', 4)
		.add('Mind talisman')
		.oneIn(100, 'Pure essence', 35)
		.oneIn(100, 'Lava rune', 4)
		.oneIn(100, 'Mud rune', 4)
		.oneIn(100, 'Smoke rune', 4)
		.oneIn(100, 'Steam rune', 4)
		.oneIn(100, 'Death rune', 13)
		.oneIn(100, 'Law rune', 13)
		.oneIn(100, 'Blood rune', 7)
		.oneIn(100, 'Soul rune', 11)
		.oneIn(100, 'Nature rune', 13)
		.tertiary(50, 'Clue scroll (medium)')
});

export const EclecticImpling = new SimpleOpenable({
	id: 11248,
	name: 'Eclectic impling',
	aliases: ['eclectic impling', 'eclectic imp', 'ecl'],
	table: new LootTable()
		.add('Mithril pickaxe')
		.add('Curry leaf')
		.add('Snape grass')
		.add('Air rune', [30, 58])
		.add('Oak plank', 4)
		.add('Empty candle lantern')
		.add('Gold ore')
		.add('Gold bar', 5)
		.add('Unicorn horn')
		.oneIn(100, 'Adamant kiteshield')
		.oneIn(100, "Blue d'hide chaps")
		.oneIn(100, 'Red spiky vambraces')
		.oneIn(100, 'Rune dagger')
		.oneIn(100, 'Battlestaff')
		.oneIn(100, 'Adamantite ore', 10)
		.oneIn(100, "Slayer's respite", 2)
		.oneIn(100, 'Wild pie')
		.oneIn(100, 'Watermelon seed', 3)
		.oneIn(100, 'Diamond')
		.tertiary(25, 'Clue scroll (medium)')
});

export const NatureImpling = new SimpleOpenable({
	id: 11250,
	name: 'Nature impling',
	aliases: ['nature impling', 'nature imp'],
	table: new LootTable()
		.add('Limpwurt seed')
		.add('Jangerberry seed')
		.add('Belladonna seed')
		.add('Harralander seed')
		.add('Cactus spine')
		.add('Magic logs')
		.add('Tarromin', 4)
		.add('Coconut')
		.add('Irit seed')
		.oneIn(100, 'Curry tree seed')
		.oneIn(100, 'Orange tree seed')
		.oneIn(100, 'Snapdragon')
		.oneIn(100, 'Kwuarm seed')
		.oneIn(100, 'Avantoe seed', 5)
		.oneIn(100, 'Willow seed')
		.oneIn(100, 'Torstol seed')
		.oneIn(100, 'Ranarr seed')
		.oneIn(100, 'Torstol', 2)
		.oneIn(100, 'Dwarf weed seed')
		.tertiary(100, 'Clue scroll (hard)')
});

export const MagpieImpling = new SimpleOpenable({
	id: 11252,
	name: 'Magpie impling',
	aliases: ['magpie impling', 'magpie imp'],
	table: new LootTable()
		.add('Black dragonhide', 6, 2)
		.add('Diamond amulet', 3, 1)
		.add('Amulet of power', 3, 1)
		.add('Ring of forging', 3, 1)
		.add('Splitbark gauntlets')
		.add('Mystic boots')
		.add('Mystic gloves')
		.add('Rune warhammer')
		.add('Ring of life', 4)
		.add('Rune sq shield')
		.add('Dragon dagger')
		.add('Nature tiara')
		.add('Runite bar', 2)
		.add('Diamond', 4)
		.add('Pineapple seed')
		.add('Loop half of key')
		.add('Tooth half of key')
		.add('Snapdragon seed')
		.add('Sinister key')
		.tertiary(50, 'Clue scroll (hard)')
});

export const NinjaImpling = new SimpleOpenable({
	id: 11254,
	name: 'Ninja impling',
	aliases: ['ninja impling', 'ninja imp'],
	table: new LootTable()
		.add('Snakeskin boots')
		.add('Splitbark helm')
		.add('Mystic boots')
		.add('Rune chainbody')
		.add('Mystic gloves')
		.add('Opal machete')
		.add('Rune claws')
		.add('Rune scimitar')
		.add('Dragon dagger(p+)')
		.add('Rune arrow', 70)
		.add('Rune dart', 70)
		.add('Rune knife', 40)
		.add('Rune thrownaxe', 50)
		.add('Onyx bolts', 2)
		.add('Onyx bolt tips', 4)
		.add('Black dragonhide', 10)
		.add('Prayer potion(3)', 4)
		.add('Weapon poison(+)', 4)
		.add('Dagannoth hide', 3)
		.tertiary(25, 'Clue scroll (hard)')
});

export const CrystalImpling = new SimpleOpenable({
	id: 23768,
	name: 'Crystal impling',
	aliases: ['crystal impling', 'crystal imp'],
	table: new LootTable()
		.add('Amulet of power', [5, 7])
		.add('Crystal acorn')
		.add('Crystal shard', [5, 10])
		.add('Dragonstone amulet')
		.add('Dragonstone', 2)
		.add('Ruby bolt tips', [50, 125])
		.add('Onyx bolt tips', [6, 10])
		.add('Rune arrowtips', [150, 250])
		.add('Rune arrow', [400, 750])
		.add('Rune javelin heads', [20, 60])
		.add('Rune dart tip', [25, 75])
		.add('Rune dart', [50, 100])
		.add('Dragon dart tip', [10, 15])
		.add('Dragon dagger', 2)
		.add('Rune scimitar', [3, 6])
		.add('Babydragon bones', [75, 125])
		.add('Ranarr seed', [3, 8])
		.add('Yew seed')
		.tertiary(50, 'Clue scroll (elite)')
		.tertiary(128, 'Elven signet')
});

export const DragonImpling = new SimpleOpenable({
	id: 11256,
	name: 'Dragon impling',
	aliases: ['dragon impling', 'dragon imp', 'dimp'],
	table: new LootTable()
		.add('Dragonstone bolt tips', [10, 30])
		.add('Dragonstone bolt tips', 36)
		.add('Mystic robe bottom', 1)
		.add('Amulet of glory', 3)
		.add('Dragonstone amulet', 2)
		.add('Dragon arrow', [100, 250])
		.add('Dragonstone bolts', [10, 40])
		.add('Dragon longsword', 1)
		.add('Dragon dagger(p++)', 3)
		.add('Dragon dart', [100, 250])
		.add('Dragonstone', 3)
		.add('Dragon dart tip', [100, 350])
		.add('Dragon arrowtips', [100, 350])
		.add('Dragon javelin heads', [25, 35])
		.add('Babydragon bones', [100, 300])
		.add('Dragon bones', [50, 100])
		.add('Magic seed', 1)
		.add('Snapdragon seed', 6)
		.add('Summer pie', 15)
		.tertiary(50, 'Clue scroll (elite)')
});

export const LuckyImpling = new SimpleOpenable({
	id: 19732,
	name: 'Lucky impling',
	aliases: ['lucky impling', 'lucky imp', 'lucky', 'luckys'],
	table: new LootTable()
		.add(EasyClueTable)
		.add(MediumClueTable)
		.add(HardClueTable)
		.add(EliteClueTable)
		.add(MasterClueTable)
});

export const Implings = [
	BabyImpling,
	YoungImpling,
	GourmetImpling,
	EarthImpling,
	EssenceImpling,
	EclecticImpling,
	NatureImpling,
	MagpieImpling,
	NinjaImpling,
	CrystalImpling,
	DragonImpling,
	LuckyImpling
];
