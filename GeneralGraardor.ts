import LootTable from '../structures/LootTable';
import GWRareDropTable, { GWGemTable, ShardTable } from './GWRareDropTable';
import SimpleMonster from '../structures/SimpleMonster';

const GeneralGraardorArmorTable = new LootTable()
	.add('Bandos chestplate')
	.add('Bandos tassets')
	.add('Bandos boots');

export const GeneralGraardorTable = new LootTable()
	.every('Big bones')
	.add(GeneralGraardorArmorTable, undefined, 4)
	.tertiary(250, 'Clue scroll (elite)')
	.add(ShardTable, undefined, 2)
	.tertiary(400, 'Long bone')
	.addItem('Bandos hilt', 1, 1)
	.tertiary(5000, 'Pet general graardor')
	.tertiary(5013, 'Curved bone')

	/* Weapons and armour */
	.addItem('Rune longsword', 1, 32)
	.addItem('Rune 2h sword', 1, 32)
	.addItem('Rune platebody', 1, 32)
	.addItem('Rune pickaxe', 1, 24)


	/* Other */
	.addItem('Coins', [19500, 20000], 112)
	.addItem('Grimy snapdragon', 3, 32)
	.addItem('Snapdragon seed', 1, 32)
	.addItem('Super restore(4)', 3, 32)
	.addItem('Adamantite ore', [15, 20], 32)
	.addItem('Coal', [115, 120], 32)
	.addItem('Magic logs', [15, 20], 32)
	.addItem('Nature rune', [65, 70], 32)
	.addItem('Coins', [20100, 20600], 5)



	.add(GWRareDropTable, undefined, 32)
	.add(GWGemTable, undefined, 8);

export default new SimpleMonster({ id: 2215, name: 'General Graardor', table: GeneralGraardorTable });