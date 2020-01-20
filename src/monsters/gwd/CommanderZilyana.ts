import LootTable from '../../structures/LootTable';
import GWRareDropTable, { GWGemTable, ShardTable } from '../subtables/GWRareDropTable';
import SimpleMonster from '../../structures/SimpleMonster';

const MinionUniqueTable = new LootTable()
	.add('Coins', [1_400, 1_500], 124)
	.add('Saradomin sword', 1, 3);

const MinionShardTable = new LootTable().add('Coins', [1_300, 1_400], 9).add(ShardTable, 1, 3);

const MinionTable = new LootTable()
	.every('Bones')
	.add(MinionUniqueTable, 1, 1)
	.add(MinionShardTable, 1, 1)
	.addItem('Steel arrow', [95, 100], 8)
	.addItem('Steel dart', [95, 100], 8)
	.addItem('Law rune', [5, 10], 8)
	.addItem('Monkfish', 3, 8)
	.addItem('Summer pie', 1, 8)
	.addItem('Coins', [1_300, 1_400], 62)
	.addItem('Grimy ranarr weed', 1, 8)
	.addItem('Unicorn horn', 6, 8)
	.addItem('Snape grass', 5, 7)
	.tertiary(128, 'Clue scroll (hard)');

const UniqueTable = new LootTable()
	.addItem('Saradomin sword', 1, 4)
	.addItem("Saradomin's light", 1, 2)
	.addItem('Armadyl crossbow')
	.addItem('Saradomin hilt')
	.add(ShardTable, undefined, 2)
	.addItem('Coins', [19_500, 20_000], 2);

export const CommanderZilyanaTable = new LootTable()
	.every('Bones')
	.every(MinionTable)
	.every(MinionTable)
	.every(MinionTable)
	.add(UniqueTable, undefined, 3)
	.tertiary(250, 'Clue scroll (elite)')
	.tertiary(5000, 'Pet zilyana')

	/* Weapons and armour */
	.addItem('Adamant platebody', 1, 8)
	.addItem('Rune dart', [35, 40], 8)
	.addItem('Rune kiteshield', 1, 8)
	.addItem('Rune plateskirt', 1, 8)

	/* Potions */
	.addItem('Prayer potion(4)', 3, 8)
	.addItem(
		[
			['Super defence(3)', 3],
			['Magic potion(3)', 3]
		],
		1,
		8
	)
	.addItem(
		[
			['Saradomin brew(3)', 3],
			['Super restore(4)', 3]
		],
		1,
		6
	)

	/* Other */
	.addItem('Coins', [19500, 20000], 27)
	.addItem('Diamond', 6, 8)
	.addItem('Law rune', [95, 100], 8)
	.addItem('Grimy ranarr weed', 5, 8)
	.addItem('Ranarr seed', 2, 8)
	.addItem('Magic seed', 1, 1)

	.add(GWRareDropTable, undefined, 8)
	.add(GWGemTable, undefined, 2);

export default new SimpleMonster({
	id: 2205,
	name: 'Commander Zilyana',
	table: CommanderZilyanaTable
});
