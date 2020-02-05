import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import HerbDropTable from '../subtables/HerbDropTable';
import { GemTable } from '../subtables/RareDropTable';

export const BansheeTable = new LootTable(128)
	.tertiary(128, 'Clue scroll(easy)', 1)

	/* Weapons and armour */
	.addItem('Iron mace', 1, 2)
	.addItem('Iron dagger', 1, 2)
	.addItem('Iron kiteshield', 1, 1)
	.oneIn(512, 'Mystic gloves (dark)', 1)

	/* Runes and ammunition */
	.addItem('Air rune', 3, 3)
	.addItem('Cosmic rune', 2, 3)
	.addItem('Chaos rune', 3, 2)
	.addItem('Fire rune', 7, 1)
	.addItem('Chaos rune', 7, 1)

	/* Materials */
	.addItem('Pure essence', 13, 22)
	.addItem('Iron ore', 1, 1)

	/* Coins */
	.addItem('Coins', 13, 10)
	.addItem('Coins', 26, 8)
	.addItem('Coins', 35, 8)

	/* Other */
	.addItem('Fishing bait', 15, 22)
	.addItem('Fishing bait', 7, 5)
	.addItem('Eye of newt', 1, 1)

	/* Subtables */
	.add(HerbDropTable, 1, 34)
	.add(GemTable, 1, 2);

export default new SimpleMonster({
	id: 414,
	name: 'Banshee',
	table: BansheeTable,
	aliases: ['banshee']
});
