import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import HerbDropTable from '../subtables/HerbDropTable';
import { GemTable } from '../subtables/RareDropTable';

export const KalphiteWorkerTable = new LootTable()

	/* Weapons and armor */
	.addItem('Iron sword', 1, 3)
	.addItem('Steel dagger', 1, 3)
	.addItem('Hardleather body', 1, 2)
	.addItem('Iron javelin', 5, 1)
	.addItem('Steel longsword', 1, 1)

	/* Runes */
	.addItem('Law rune', 2, 3)
	.addItem('Body rune', 6, 2)
	.addItem('Chaos rune', 3, 2)
	.addItem('Fire rune', 7, 2)
	.addItem('Water rune', 2, 2)
	.addItem('Nature rune', 4, 2)
	.addItem('Cosmic rune', 2, 1)

	/* Herbs */
	.add(HerbDropTable, 7)

	/* Coins */
	.addItem('Coins', 15, 34)
	.addItem('Coins', 5, 12)
	.addItem('Coins', 28, 12)
	.addItem('Coins', 1, 8)
	.addItem('Coins', 62, 4)
	.addItem('Coins', 42, 3)

	/* Other */
	.addItem('Waterskin(4)', 1, 21)

	/* Rdt */
	.add(GemTable, 2)

	/* Tertiary */
	.tertiary(250, 'Ensouled kalphite head');

export default new SimpleMonster({
	id: 955,
	name: 'Kalphite Worker',
	table: KalphiteWorkerTable,
	aliases: ['kalphite worker', 'kalphite']
});
