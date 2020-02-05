import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import { GemTable } from '../subtables/RareDropTable';

export const MinotaurTable = new LootTable(101)
	.every('Bones')
	.tertiary(50, 'Ensouled minotaur head', 1)
	.tertiary(60, 'Clue scroll (beginner)', 1)
	.tertiary(101, 'Clue scroll (easy)', 1)

	/* Weapons and armour */
	.addItem('Iron arrow', [5, 14], 10)
	.addItem('Bronze spear', 1, 11)
	.addItem('Bronze full helm', 1, 11)
	.addItem('Bronze arrow', [3, 6], 6)
	.addItem('Bronze dagger', 1, 7)

	/* Runes */
	.addItem('Mind rune', 1, 6)

	/* Other */
	.addItem('Coins', [2, 84], 16)
	.addItem('Tin ore', 1, 13)
	.addItem('Rune essence', 5, 6)
	.addItem('Cooked meat', 1, 7)
	.addItem('Copper ore', 1, 5)
	.addItem('Pure essence', 15, 6)
	.addItem('Pure essence', 20, 4)
	.addItem('Rune essence', 5, 6)

	/* Subtables */
	.add(GemTable, 1, 20);

export default new SimpleMonster({
	id: 2481,
	name: 'Minotaur',
	table: MinotaurTable,
	aliases: ['minotaur']
});
