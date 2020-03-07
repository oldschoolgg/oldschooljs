import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { GemTable } from '../../subtables/RareDropTable';
import HerbDropTable from '../../subtables/HerbDropTable';

const RedDragonTable = new LootTable()
	.every('Dragon bones')
	.every('Red dragonhide')

	/*Weapons and armour */
	.addItem('Mithril 2h sword', 1, 4)
	.addItem('Mithril axe', 1, 3)
	.addItem('Mithril battleaxe', 1, 3)
	.addItem('Rune dart', 8, 3)
	.addItem('Mithril javelin', 20, 1)
	.addItem('Mithril kiteshield', 1, 1)
	.addItem('Adamant platebody', 1, 1)
	.addItem('Rune longsword', 1, 1)

	/* Runes and ammunition */
	.addItem('Rune arrow', 4, 8)
	.addItem('Law rune', 4, 5)
	.addItem('Blood rune', 2, 4)
	.addItem('Death rune', 5, 3)

	/* Herbs */
	.add(HerbDropTable, 1, 2)

	/* Coins */
	.addItem('Coins', 196, 40)
	.addItem('Coins', 66, 29)
	.addItem('Coins', 330, 10)
	.addItem('Coins', 690, 1)

	/* Other */
	.addItem('Dragon javelin heads', 10, 10)
	.addItem('Chocolate cake', 3, 3)
	.addItem('Adamantite bar', 1, 1)

	/* Rdt */
	.add(GemTable, 1, 5)

	/* Tertiary */
	.tertiary(40, 'Ensouled dragon head')
	.tertiary(128, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 247,
	name: 'Red Dragon',
	table: RedDragonTable,
	aliases: ['red dragon']
});
