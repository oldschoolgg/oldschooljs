import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import RareDropTable, { GemTable } from '../subtables/RareDropTable';

export const KingBlackDragonTable = new LootTable()
	.every('Dragon bones')
	.every('Black dragonhide', 2)
	.tertiary(450, 'Clue scroll (elite)')
	.tertiary(129, 'Kbd heads')
	.tertiary(3000, 'Prince black dragon')
	.tertiary(5000, 'Draconic visage')
	.oneIn(1500, 'Dragon pickaxe')

	/* Weapons and armour */
	.addItem('Rune longsword', 1, 10)
	.addItem('Adamant platebody', 1, 9)
	.addItem('Adamant kiteshield', 1, 3)
	.addItem('Dragon med helm', 1, 1)

	/* Runes and ammunition */

	.addItem('Air rune', 300, 10)
	.addItem('Iron arrow', 690, 10)
	.addItem('Runite bolts', [10, 20], 10)
	.addItem('Fire rune', 300, 5)
	.addItem('Law rune', 30, 5)
	.addItem('Blood rune', 30, 5)

	/* Resources */
	.addItem('Yew logs', 150, 10)
	.addItem('Adamantite bar', 3, 5)
	.addItem('Runite bar', 1, 3)
	.addItem('Gold ore', 100, 2)

	/* Other */
	.addItem('Amulet of power', 1, 7)
	.addItem('Dragon arrowtips', [5, 14], 5)
	.addItem('Dragon dart tip', [5, 14], 5)
	.addItem('Dragon javelin heads', 15, 5)
	.addItem('Runite limbs', 1, 4)
	.addItem('Shark', 4, 4)

	.add(RareDropTable, 1, 8)
	.add(GemTable, 1, 2);

export default new SimpleMonster({
	id: 6502,
	name: 'King Black Dragon',
	table: KingBlackDragonTable
});
