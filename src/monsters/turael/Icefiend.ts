import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import { GemTable } from '../subtables/RareDropTable';

export const IcefiendTable = new LootTable(128)
	.tertiary(128, 'Clue scroll (easy)', 1)
	/* Weapons and Armour */
	.addItem('Iron platebody', 1, 1)
	/* Runes */

	.addItem('Air rune', [1, 5], 6)
	.addItem('Water rune', [1, 6], 6)

	/* Other */
	.addItem('Coins', [1, 30], 24)

	/* Subtable */
	.add(GemTable, 1, 1);

export default new SimpleMonster({
	id: 3140,
	name: 'Icefiend',
	table: IcefiendTable,
	aliases: ['icefiend']
});
