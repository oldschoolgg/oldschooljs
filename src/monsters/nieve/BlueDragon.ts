import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import HerbDropTable from '../subtables/HerbDropTable';
import { GemTable } from '../subtables/RareDropTable';

export const BlueDragonTable = new LootTable()
	.every('Dragon bones')
	.every('Blue dragonhide')

	/*Weapons and armour */
	.addItem('Steel platelegs', 1, 4)
	.addItem('Mithril axe', 1, 3)
	.addItem('Steel battleaxe', 1, 3)
	.addItem('Mithril spear', 1, 2)
	.addItem('Adamant full helm', 1, 1)
	.addItem('Mithril kiteshield', 1, 1)
	.addItem('Rune dagger', 1, 1)

	/* Runes*/
	.addItem('Water rune', 75, 8)
	.addItem('Nature rune', 15, 5)
	.addItem('Law rune', 3, 3)
	.addItem('Fire rune', 37, 1)

	/* Herbs */
	.add(HerbDropTable, undefined, 15)

	/* Coins */
	.add('Coins', 44, 29)
	.add('Coins', 132, 25)
	.add('Coins', 200, 10)
	.add('Coins', 11, 5)
	.add('Coins', 440, 1)

	/* Other */
	.add('Adamantite ore', 1, 3)
	.add('Bass', 1, 3)

	/* Rdt */
	.add(GemTable, undefined, 5)

	/* Tertiary */
	.tertiary(50, 'Ensouled dragon head')
	.tertiary(128, 'Clue scroll (hard)');

export default new SimpleMonster({ id: 265, name: 'Blue Dragon', table: BlueDragonTable });
