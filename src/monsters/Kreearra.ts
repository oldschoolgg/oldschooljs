import LootTable from '../structures/LootTable';
import GWRareDropTable, { GWGemTable, ShardTable } from './GWRareDropTable';
import SimpleMonster from '../structures/SimpleMonster';

const KreearraArmorTable = new LootTable()
	.add('Armadyl helmet')
	.add('Armadyl chestplate')
	.add('Armadyl chainskirt');

export const KreearraTable = new LootTable()
	.every('Big bones')
	.every('Feather', [1, 16])
	.add(KreearraArmorTable, undefined, 4)
	.tertiary(250, 'Clue scroll (elite)')
	.add(ShardTable, undefined, 2)
	.tertiary(400, 'Long bone')
	.addItem('Armadyl hilt', 1, 1)
	.tertiary(5000, `Pet kree'arra`)
	.tertiary(5013, 'Curved bone')

	/* Weapons and armour */
	.addItem(`Black d'hide body`, 1, 32)
	.addItem('Rune crossbow', 1, 32)

	/* Runes and ammunition */
	.addItem('Mind rune', [586, 601], 32)
	.addItem('Rune arrow', [100, 105], 32)
	.addItem('Runite bolts', [20, 25], 32)
	.addItem('Dragonstone bolts (e)', [5, 10], 32)


	/* Other */
	.addItem('Coins', [19500, 20000], 128)
	.addItem('Ranging potion(3)', 3, 32)
	.addItem('Super defence(3)', 3, 32)
	.addItem('Grimy dwarf weed', [8, 13], 32)
	.addItem('Dwarf weed seed', 3, 32)
	.addItem('Coins', [20500, 21000], 5)
	.addItem('Crystal key', 1, 4)
	.addItem('Yew seed', 1, 4)



	.add(GWRareDropTable, undefined, 32)
	.add(GWGemTable, undefined, 8);

export default new SimpleMonster({ id: 3162, name: `Kree'arra`, table: KreearraTable });
