import LootTable from '../structures/LootTable';
import GWRareDropTable, { GWGemTable, ShardTable } from './GWRareDropTable';
import SimpleMonster from '../structures/SimpleMonster';

const GeneralGraardorArmorTable = new LootTable()
	.add('Bandos chestplate')
	.add('Bandos tassets')
	.add('Bandos boots');

const UniqueTable = new LootTable()
	.add(GeneralGraardorArmorTable, undefined, 4)
	.add(ShardTable, undefined, 2)
	.addItem('Bandos hilt')
	.addItem('Coins', [20_100, 20_600], 5);

export const GeneralGraardorTable = new LootTable()
	.every('Big bones')
	.add(UniqueTable, undefined, 3)
	.tertiary(250, 'Clue scroll (elite)')
	.tertiary(400, 'Long bone')
	.tertiary(5000, 'Pet general graardor')
	.tertiary(5013, 'Curved bone')

	/* Weapons and armour */
	.addItem('Rune longsword', 1, 8)
	.addItem('Rune 2h sword', 1, 8)
	.addItem('Rune platebody', 1, 8)
	.addItem('Rune pickaxe', 1, 6)

	/* Other */
	.addItem('Coins', [19500, 20000], 28)
	.addItem('Grimy snapdragon', 3, 8)
	.addItem('Snapdragon seed', 1, 8)
	.addItem('Super restore(4)', 3, 8)
	.addItem('Adamantite ore', [15, 20], 8)
	.addItem('Coal', [115, 120], 8)
	.addItem('Magic logs', [15, 20], 8)
	.addItem('Nature rune', [65, 70], 8)

	.add(GWRareDropTable, undefined, 8)
	.add(GWGemTable, undefined, 2);

export default new SimpleMonster({
	id: 2215,
	name: 'General Graardor',
	table: GeneralGraardorTable
});
