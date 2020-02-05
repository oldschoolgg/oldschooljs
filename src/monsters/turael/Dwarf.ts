import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import { GemTable } from '../subtables/RareDropTable';

export const DwarfTable = new LootTable(128)
	.every('Bones')
	.tertiary(100, 'Clue scroll (beginner)', 1)
	/* Weapons and Armour*/
	.addItem('Bronze pickaxe', 1, 13)
	.addItem('Bronze med helm', 1, 4)
	.addItem('Bronze battleaxe', 1, 2)
	.addItem('Iron pickaxe', 1, 1)

	/* Runes and ammunition */
	.addItem('Bronze bolts', [2, 12], 7)
	.addItem('Chaos rune', 2, 4)
	.addItem('Nature rune', 2, 4)

	/* Coins */
	.addItem('Coins', 4, 20)
	.addItem('Coins', 10, 15)
	.addItem('Coins', 30, 2)

	/* Other */
	.addItem('Hammer', 1, 10)
	.addItem('Bronze bar', 1, 7)
	.addItem('Iron ore', 1, 4)
	.addItem('Tin ore', 1, 3)
	.addItem('Copper ore', 1, 3)
	.addItem('Iron bar', 1, 3)
	.addItem('Coal', 1, 3)

	.add(GemTable, 1, 1);

export default new SimpleMonster({
	id: 290,
	name: 'Dwarf',
	table: DwarfTable,
	aliases: ['dwarf']
});
