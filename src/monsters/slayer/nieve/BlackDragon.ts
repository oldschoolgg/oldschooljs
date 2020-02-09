import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import RareDropTable, { GemTable } from '../../subtables/RareDropTable';

export const BlackDragonTable = new LootTable()
	.every('Dragon bones')
	.every('Black dragonhide')

	/*Weapons and armour */
	.addItem('Mithril 2h sword', 1, 4)
	.addItem('Mithril axe', 1, 3)
	.addItem('Mithril battleaxe', 1, 3)
	.addItem('Rune knife', 2, 3)
	.addItem('Mithril kiteshield', 1, 1)
	.addItem('Adamant platebody', 1, 1)
	.addItem('Rune longsword', 1, 1)

	/* Runes and ammunition */
	.addItem('Adamant javelin', 30, 20)
	.addItem('Fire rune', 50, 8)
	.addItem('Blood rune', 15, 3)
	.addItem('Air rune', 75, 1)

	/* Coins */
	.add('Coins', 196, 40)
	.add('Coins', 330, 10)
	.add('Coins', 690, 1)

	/* Other */
	.add('Dragon javelin heads', 10, 6)
	.add('Adamantite bar', 1, 3)
	.add('Chocolate cake', 1, 3)

	/* Rdt */
	.add(RareDropTable, 1, 2)
	.add(GemTable, 1, 3)

	/* Tertiary */
	.tertiary(35, 'Ensouled dragon head')
	.tertiary(128, 'Clue scroll (hard)')
	.tertiary(500, 'Clue scroll (elite)')
	.tertiary(10000, 'Draconic visage');

export default new SimpleMonster({
	id: 252,
	name: 'Black Dragon',
	table: BlackDragonTable,
	aliases: ['black dragon']
});
