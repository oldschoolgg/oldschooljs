import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import GemTable from '../subtables/GemTable';
import HerbDropTable from '../subtables/HerbDropTable';
import CommonSeedDropTable from '../subtables/CommonSeedDropTable';

export const MossGiantTable = new LootTable(128)
	.every('Big bones')
	.tertiary(24, 'Ensouled giant head')
	.tertiary(45, 'Clue scroll (beginner)')
	.tertiary(400, 'Long bone')
	.tertiary(5000, 'Giant champion scroll')
	.tertiary(5013, 'Curved bone')
	.tertiary(150, 'Mossy key')

	/* Weapons and armour */
	.addItem('Black sq shield', 1, 5)
	.addItem('Magic staff', 1, 2)
	.addItem('Steel med helm', 1, 2)
	.addItem('Mithril sword', 1, 2)
	.addItem('Mithril spear', 1, 2)
	.addItem('Steel kiteshield', 1, 1)

	/* Runes and ammunition */
	.addItem('Law rune', 3, 4)
	.addItem('Air rune', 18, 3)
	.addItem('Earth rune', 27, 3)
	.addItem('Chaos rune', 7, 3)
	.addItem('Nature rune', 6, 3)
	.addItem('Cosmic rune', 3, 2)
	.addItem('Iron arrow', 15, 2)
	.addItem('Steel arrow', 30, 1)
	.addItem('Death rune', 3, 1)
	.addItem('Blood rune', 1, 1)

	/* Coins */
	.addItem('Coins', 37, 19)
	.addItem('Coins', 2, 8)
	.addItem('Coins', 119, 10)
	.addItem('Coins', 300, 2)

	/* Other  */
	.addItem('Steel bar', 1, 6)
	.addItem('Coal', 1, 1)
	.addItem('Spinach roll', 1, 1)

	/*Special Tables */
	.add(GemTable, undefined, 4)
	.add(CommonSeedDropTable, undefined, 35)
	.add(HerbDropTable, undefined, 5);

export default new SimpleMonster({
	id: 2090,
	name: 'Moss Giant',
	table: MossGiantTable,
	aliases: ['moss']
});
