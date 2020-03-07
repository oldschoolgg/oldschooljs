import LootTable from '../../../structures/LootTable';
import GWRareDropTable, { GWGemTable, ShardTable } from '../../subtables/GWRareDropTable';
import SimpleMonster from '../../../structures/SimpleMonster';

const MinionUniqueTable = new LootTable()
	.add('Coins', [1_300, 1_400], 124)
	.add('Zamorakian spear', 1, 3);

const MinionShardTable = new LootTable().add('Coins', [1_300, 1_400], 9).add(ShardTable, 1, 3);

const MinionTable = new LootTable()
	.every('Ashes')
	.add(MinionUniqueTable, 1, 1)
	.add(MinionShardTable, 1, 1)
	.addItem('Steel dart', [95, 100], 8)
	.addItem('Death rune', [5, 10], 8)
	.addItem('Blood rune', [5, 10], 8)
	.addItem('Steel arrow', [95, 100], 7)
	.addItem('Coins', [1_300, 1_400], 66)
	.addItem('Shark', 3, 8)
	.addItem('Tuna potato', 2, 8)
	.addItem('Wine of zamorak', [5, 10], 8)
	.addItem('Super attack(3)', 1, 2)
	.addItem('Super strength(3)', 1, 2)
	.tertiary(128, 'Clue scroll (hard)');

const ZaklnGritchMinionTable = new LootTable(5000)
	.every(MinionTable)
	.addItem('Lesser demon champion scroll', 1, 1);

const UniqueTable = new LootTable()
	.addItem('Steam battlestaff', 1, 4)
	.addItem('Zamorakian spear', 1, 4)
	.addItem('Staff of the dead')
	.addItem('Zamorak hilt')
	.add(ShardTable, undefined, 2);

const KrilTsutsarothTable = new LootTable()
	.every('Ashes')
	.every(MinionTable)
	.every(MinionTable)
	.every(ZaklnGritchMinionTable)
	.add(UniqueTable, undefined, 3)
	.tertiary(250, 'Clue scroll (elite)')
	.tertiary(5000, `Pet k'ril tsutsaroth`)

	/* Weapons and armour */
	.addItem('Adamant arrow(p++)', [295, 300], 8)
	.addItem('Rune scimitar', 1, 8)
	.addItem('Adamant platebody', 1, 8)
	.addItem('Rune platelegs', 1, 7)
	.addItem('Dragon dagger(p++)', 1, 2)

	/* Potions */
	.addItem(
		[
			['Super attack(3)', 3],
			['Super strength(3)', 3]
		],
		1,
		8
	)
	.addItem(
		[
			['Super restore(3)', 3],
			['Zamorak brew(3)', 3]
		],
		1,
		8
	)

	/* Other */
	.addItem('Coins', [19500, 20000], 33)
	.addItem('Grimy lantadyme', 10, 8)
	.addItem('Lantadyme seed', 3, 8)
	.addItem('Death rune', [120, 125], 8)
	.addItem('Blood rune', [80, 85], 8)

	.add(GWRareDropTable, undefined, 8)
	.add(GWGemTable, undefined, 2);

export default new SimpleMonster({
	id: 3129,
	name: `K'ril Tsutsaroth`,
	table: KrilTsutsarothTable,
	aliases: ['kril', 'zammy', 'zamorak', "k'ril tsutsaroth"]
});
