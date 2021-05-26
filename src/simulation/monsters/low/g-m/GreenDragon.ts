import LootTable from '../../../../structures/LootTable';
import SimpleMonster from '../../../../structures/SimpleMonster';
import HerbDropTable from '../../../subtables/HerbDropTable';
import { GemTable } from '../../../subtables/RareDropTable';

const GreenDragonTable = new LootTable()
	.every('Dragon bones')
	.every('Green dragonhide')

	/* Weapons and armour */
	.add('Steel platelegs', 1, 4)
	.add('Steel battleaxe', 1, 3)
	.add('Mithril axe', 1, 3)
	.add('Mithril spear', 1, 2)
	.add('Mithril kiteshield', 1, 1)
	.add('Adamant full helm', 1, 1)
	.add('Rune dagger', 1, 1)

	/* Runes*/
	.add('Water rune', 75, 8)
	.add('Nature rune', 15, 5)
	.add('Law rune', 3, 3)
	.add('Fire rune', 37, 1)

	/* Herbs */
	.add(HerbDropTable, 1, 15)

	/* Coins */
	.add('Coins', 44, 29)
	.add('Coins', 132, 25)
	.add('Coins', 200, 10)
	.add('Coins', 11, 5)
	.add('Coins', 440, 1)

	/* Other */
	.add('Bass', 1, 3)
	.add('Adamantite ore', 1, 3)

	/* Gem drop table */
	.add(GemTable, 1, 5)

	/* Tertiary */
	.tertiary(35, 'Ensouled dragon head')
	.tertiary(128, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 260,
	name: 'Green dragon',
	table: GreenDragonTable,
	aliases: ['green dragon']
});
