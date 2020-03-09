import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { GemTable } from '../../subtables/RareDropTable';

export const MinotaurTable = new LootTable({ limit: 101 })
	.every('Bones')

	.tertiary(50, 'Ensouled minotaur head')
	.tertiary(60, 'Clue scroll (beginner)')
	.tertiary(101, 'Clue scroll (easy)')

	/* Weapons and armour */
	.add('Iron arrow', [5, 14], 10)
	.add('Bronze spear', 1, 11)
	.add('Bronze full helm', 1, 11)
	.add('Bronze arrow', [3, 6], 6)
	.add('Bronze dagger', 1, 7)

	/* Runes */
	.add('Mind rune', 1, 6)

	/* Other */
	.add('Coins', [2, 84], 16)
	.add('Tin ore', 1, 13)
	.add('Cooked meat', 1, 7)
	.add('Copper ore', 1, 5)
	.add('Pure essence', 15, 6)
	.add('Pure essence', 20, 4)

	/* Subtables */
	.add(GemTable, 1, 2);

export default new SimpleMonster({
	id: 2481,
	name: 'Minotaur',
	table: MinotaurTable,
	aliases: ['minotaur']
});
