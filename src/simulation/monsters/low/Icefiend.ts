import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { GemTable } from '../../subtables/RareDropTable';

export const IcefiendTable = new LootTable()
	.tertiary(128, 'Clue scroll (easy)')

	/* Weapons and Armour */
	.add('Iron platebody')

	/* Runes */
	.add('Air rune', [1, 5], 6)
	.add('Water rune', [1, 6], 6)

	/* Other */
	.add('Coins', [1, 30], 24)

	/* Subtable */
	.add(GemTable);

export default new SimpleMonster({
	id: 3140,
	name: 'Icefiend',
	table: IcefiendTable,
	aliases: ['icefiend']
});
