import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import HerbDropTable from '../subtables/HerbDropTable';

export const ZombieTable = new LootTable(128)
	.every('Bones')
	.tertiary(5000, 'Zombie champion scroll', 1)
	/* Weapons and armour */
	.addItem('Bronze med helm', 1, 4)
	.addItem('Bronze longsword', 1, 1)
	.addItem('Iron axe', 1, 1)
	/*Runes and ammunition*/
	.addItem('Iron arrow', 5, 7)
	.addItem('Body rune', 6, 5)
	.addItem('Mind rune', 5, 5)
	.addItem('Air rune', 13, 4)
	.addItem('Iron arrow', 8, 4)
	.addItem('Steel arrow', 5, 2)
	.addItem('Nature rune', 6, 1)

	/*Coins*/

	.addItem('Coins', 10, 2)
	.addItem('Coins', 4, 4)
	.addItem('Coins', 18, 3)
	.addItem('Coins', 13, 2)
	.addItem('Coins', 28, 2)

	/*Other*/
	.addItem('Fishing bait', 5, 37)
	.addItem('Copper ore', 1, 2)

	/* Subtables */
	.add(HerbDropTable, 1, 25);

export default new SimpleMonster({
	id: 26,
	name: 'Zombie',
	table: ZombieTable,
	aliases: ['zombie']
});
