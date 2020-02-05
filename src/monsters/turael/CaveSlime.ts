import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import { GemTable } from '../subtables/RareDropTable';

export const CaveSlimeTable = new LootTable()
	.every('Swamp tar', [1, 6])
	.tertiary(128, 'Clue scroll (easy)', 1)

	/* Weapons and Armour */

	.addItem('Bronze axe', 1, 16)
	.addItem('Iron sword', 1, 12)
	.addItem('Bronze full helm', 1, 14)
	.addItem('Iron kiteshield', 1, 10)
	.addItem('Iron boots', 1, 1)
	/*Runes */
	.addItem('Water rune', 15, 20)
	.addItem('Earth rune', 5, 7)
	/*Other */
	.addItem('Coins', 1, 30)
	.addItem('Coins', 4, 27)
	.addItem('Coins', 10, 25)
	.addItem('Coins', 22, 20)
	.addItem('Coins', 46, 13)
	.addItem('Oil lantern frame', 1, 5)
	.addItem('Unlit torch', 1, 21)
	.addItem('Gold bar', 1, 2)

	/* Subtables */
	.add(GemTable);

export default new SimpleMonster({
	id: 480,
	name: 'Cave Slime',
	table: CaveSlimeTable,
	aliases: ['cave slime']
});
