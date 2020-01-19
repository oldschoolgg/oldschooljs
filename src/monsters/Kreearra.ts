import LootTable from '../structures/LootTable';
import GWRareDropTable, { GWGemTable, ShardTable } from './GWRareDropTable';
import SimpleMonster from '../structures/SimpleMonster';

const KreearraArmorTable = new LootTable()
	.add('Armadyl helmet')
	.add('Armadyl chestplate')
	.add('Armadyl chainskirt');

const MinionUniqueTable = new LootTable()
	.add('Coins', [1_000, 1_100], 124)
	.add(KreearraArmorTable, 1, 3);

const MinionShardTable = new LootTable().add('Coins', [1_000, 1_100], 9).add(ShardTable, 1, 3);

const MinionTable = new LootTable()
	.every('Bones')
	.every('Feather', [1, 11])
	.add(MinionUniqueTable, 1, 1)
	.add(MinionShardTable, 1, 1)
	.addItem('Steel dart', [91, 101], 8)
	.addItem('Smoke rune', [10, 15], 8)
	.addItem('Manta ray', 2, 8)
	.addItem('Mushroom potato', 3, 8)
	.addItem('Steel arrow', [91, 101], 7)
	.addItem('Coins', [1_000, 1_100], 70)
	.addItem('Crushed nest', 2, 8)
	.addItem('Grimy kwuarm', 1, 8)
	.tertiary(128, 'Clue scroll (hard)');

const UniqueTable = new LootTable()
	.add(KreearraArmorTable, undefined, 4)
	.add(ShardTable, undefined, 2)
	.addItem('Armadyl hilt')
	.addItem('Coins', [20_500, 21_000], 5);

export const KreearraTable = new LootTable()
	.every('Big bones')
	.every(MinionTable)
	.every(MinionTable)
	.every(MinionTable)
	.every('Feather', [1, 16])
	.add(UniqueTable, undefined, 3)
	.tertiary(250, 'Clue scroll (elite)')
	.tertiary(400, 'Long bone')
	.tertiary(5000, `Pet kree'arra`)
	.tertiary(5013, 'Curved bone')

	/* Weapons and armour */
	.addItem(`Black d'hide body`, 1, 8)
	.addItem('Rune crossbow', 1, 8)

	/* Runes and ammunition */
	.addItem('Mind rune', [586, 601], 8)
	.addItem('Rune arrow', [100, 105], 8)
	.addItem('Runite bolts', [20, 25], 8)
	.addItem('Dragonstone bolts (e)', [5, 10], 8)

	/* Other */
	.addItem('Coins', [19500, 20000], 32)
	.addItem('Ranging potion(3)', 3, 8)
	.addItem('Super defence(3)', 3, 8)
	.addItem('Grimy dwarf weed', [8, 13], 8)
	.addItem('Dwarf weed seed', 3, 8)
	.addItem('Crystal key', 1, 1)
	.addItem('Yew seed', 1, 1)

	.add(GWRareDropTable, undefined, 8)
	.add(GWGemTable, undefined, 2);

export default new SimpleMonster({ id: 3162, name: `Kree'arra`, table: KreearraTable });
