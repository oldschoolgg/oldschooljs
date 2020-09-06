import LootTable from '../../../structures/LootTable';
import GWRareDropTable, { GWGemTable, ShardTable } from '../../subtables/GWRareDropTable';
import SimpleMonster from '../../../structures/SimpleMonster';

const MinionUniqueTable = new LootTable()
	.add('Coins', [1_300, 1_400], 1 / 130.1)
	.add('Zamorakian spear', 1, 1 / 5376);

const MinionShardTable = new LootTable()
	.add('Coins', [1_300, 1_400], 1 / 169.3)
	.add(ShardTable, 1, 1 / 508);

const MinionTable = new LootTable()
	.every('Ashes')
	.add(MinionUniqueTable, 1, 1 / 127)
	.add(MinionShardTable, 1, 1 / 127)
	.add('Steel dart', [95, 100], 1 / 15.88)
	.add('Death rune', [5, 10], 1 / 15.88)
	.add('Blood rune', [5, 10], 1 / 15.88)
	.add('Steel arrow', [95, 100], 1 / 15.88)
	.add('Coins', [1_300, 1_400], 1 / 1.924)
	.add('Shark', 3, 1 / 15.88)
	.add('Tuna potato', 2, 1 / 15.88)
	.add('Wine of zamorak', [5, 10], 1 / 15.88)
	.add('Super attack(3)', 1, 1 / 63.5)
	.add('Super strength(3)', 1, 1 / 63.5)
	.tertiary(128, 'Clue scroll (hard)');

const ZaklnGritchMinionTable = new LootTable()
	.every(MinionTable)
	.add('Lesser demon champion scroll', 1, 1 / 5000);

const UniqueTable = new LootTable()
	.add('Steam battlestaff', 1, 1 / 127)
	.add('Zamorakian spear', 1, 1 / 127)
	.add('Staff of the dead', 1, 1 / 508)
	.add('Zamorak hilt', 1, 1 / 508)
	.add(ShardTable, 1, 1 / 254);

const KrilTsutsarothTable = new LootTable()

	.every('Ashes')

	.every(MinionTable, 2)
	.every(ZaklnGritchMinionTable)

	.add(UniqueTable, 1, 3 / 127)

	/* Weapons and armour */
	.add('Adamant arrow(p++)', [295, 300], 8 / 127)
	.add('Rune scimitar', 1, 8 / 127)
	.add('Adamant platebody', 1, 8 / 127)
	.add('Rune platelegs', 1, 7 / 127)
	.add('Dragon dagger(p++)', 1, 2 / 127)

	/* Potions */
	.add(
		[
			['Super attack(3)', 3],
			['Super strength(3)', 3]
		],
		1,
		8 / 127
	)
	.add(
		[
			['Super restore(3)', 3],
			['Zamorak brew(3)', 3]
		],
		1,
		8 / 127
	)

	/* Other */
	.add('Coins', [19500, 20000], 33 / 127)
	.add('Grimy lantadyme', 10, 8 / 127)
	.add('Lantadyme seed', 3, 8 / 127)
	.add('Death rune', [120, 125], 8 / 127)
	.add('Blood rune', [80, 85], 8 / 127)

	.add(GWGemTable, 1, 2 / 127)
	.add(GWRareDropTable, 1, 8 / 127)

	.tertiary(250, 'Clue scroll (elite)')
	.tertiary(5000, `Pet k'ril tsutsaroth`);

export default new SimpleMonster({
	id: 3129,
	name: `K'ril Tsutsaroth`,
	table: KrilTsutsarothTable,
	aliases: ['kril', 'zammy', 'zamorak', "k'ril tsutsaroth"]
});
