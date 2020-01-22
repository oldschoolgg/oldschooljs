import LootTable from '../structures/LootTable';
import SimpleMonster from '../structures/SimpleMonster';
import RareDropTable, { GemTable } from './RareDropTable';
import HerbDropTable from './HerbDropTable';

export const BlueDragonTable = new LootTable()
	.every('Dragon bones')
	.every('Blue dragonhide')

	/*Weapons and armour */
	.addItem('Steel platelegs', 1, 4)
	.addItem('Mithril axe', 1, 3)
	.addItem('Steel battleaxe', 1, 3)
	.addItem('Mithril spear', 2, 3)
	.addItem('Adamant full helm', 1, 1)
	.addItem('Mithril kiteshield', 1, 1)
	.addItem('Rune dagger', 1, 1)

	/* Runes*/
	.addItem('Water rune', 30, 20)
	.addItem('Nature rune', 50, 8)
	.addItem('Law rune', 15, 3)
	.addItem('Fire rune', 75, 1)

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
	.add(RareDropTable, undefined, 2)
	.add(GemTable, undefined, 3)

	/* Tertiary */
	.tertiary(50, 'Ensouled dragon head')
	.tertiary(128, 'Clue scroll (hard)');

export default new SimpleMonster({ id: 265, name: 'Blue Dragon', table: BlueDragonTable });
