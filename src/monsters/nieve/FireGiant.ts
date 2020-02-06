import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import HerbDropTable from '../subtables/HerbDropTable';
import RareDropTable, { GemTable } from '../subtables/RareDropTable';

export const FireGiantTable = new LootTable()
	.every('Big bones')

	/*Weapons and armour */
	.addItem('Steel axe', 1, 3)
	.addItem('Mithril sq shield', 1, 2)
	.addItem('Fire battlestaff', 1, 1)
	.addItem('Rune scimitar', 1, 1)

	/* Runes and ammunition */
	.addItem('Fire rune', 150, 10)
	.addItem('Chaos rune', 5, 7)
	.addItem('Rune arrow', 12, 5)
	.addItem('Blood rune', 5, 4)
	.addItem('Fire rune', 37, 1)
	.addItem('Law rune', 2, 1)

	/* Herbs */
	.add(HerbDropTable, undefined, 19)

	/* Coins */
	.addItem('Coins', 60, 40)
	.addItem('Coins', 15, 7)
	.addItem('Coins', 25, 6)
	.addItem('Coins', 300, 2)
	.addItem('Coins', 50, 1)

	/* Other */
	.addItem('Lobster', 1, 3)
	.addItem('Steel bar', 1, 2)
	.addItem('Strength potion(2)', 1, 1)

	/* Rdt */
	.add(RareDropTable, undefined, 1)
	.add(GemTable, undefined, 11)

	/* Tertiary */
	.tertiary(20, 'Ensouled giant head')
	.tertiary(400, 'Long bone')
	.tertiary(5000, 'Giant champion scroll')
	.tertiary(5013, 'Curved bone');

export default new SimpleMonster({
	id: 2075,
	name: 'Fire Giant',
	table: FireGiantTable,
	aliases: ['fire giant', 'fire g']
});
