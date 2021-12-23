import LootTable from '../../../../structures/LootTable'

const StandardTable = new LootTable()
	/* Armour and weaponry */
	.add('Rune full helm', [3, 5])
	.add('Rune chainbody', [2, 3])
	.add('Rune platebody', 2)
	.add('Rune platelegs', [2, 3])
	.add('Rune plateskirt', [2, 3])
	.add('Rune halberd', [2, 3])
	.add('Rune pickaxe', [2, 3])
	/* Ammunition and runes */
	.add('Cosmic rune', [175, 250])
	.add('Nature rune', [125, 150])
	.add('Law rune', [100, 150])
	.add('Chaos rune', [250, 350])
	.add('Death rune', [125, 175])
	.add('Blood rune', [100, 150])
	.add('Mithril arrow', [1000, 1500])
	.add('Adamant arrow', [500, 750])
	.add('Rune arrow', [250, 450])
	.add('Dragon arrow', [50, 100])
	/* Gems */
	.add('Uncut sapphire', [25, 65])
	.add('Uncut emerald', [15, 60])
	.add('Uncut ruby', [10, 40])
	.add('Uncut diamond', [5, 15])
	/* Other*/
	.add('Battlestaff', [8, 12]);


export const CorruptedGauntletTable = new LootTable()
	.every('Crystal shard', [5, 9])
	.every('Gauntlet cape')
	.add(StandardTable, 1, 3)
	.add('Dragon halberd', [1, 2], 1.5)
	.add('Coins', [75000, 150000])
	.tertiary(20, 'Clue scroll (elite)')
	.tertiary(50, 'Crystal weapon see')
	.tertiary(50, 'Crystal armour seed')
	.tertiary(400, 'Enhanced crystal weapon seed')
	.tertiary(800, 'Youngllef');
