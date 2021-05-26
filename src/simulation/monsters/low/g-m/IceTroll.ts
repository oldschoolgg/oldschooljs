import LootTable from '../../../../structures/LootTable';
import SimpleMonster from '../../../../structures/SimpleMonster';
import HerbDropTable from '../../../subtables/HerbDropTable';
import { GemTable } from '../../../subtables/RareDropTable';

const IceTrollTable = new LootTable()
	.every('Big bones')

	/* Weapons and armour */
	.add('Adamant kiteshield', 1, 8)
	.add('Black platebody', 1, 4)
	.add('Adamant axe', 1, 2)
	.add('Black warhammer', 1, 1)
	.add('Mithril platebody', 1, 1)
	.add('Rune battleaxe', 1, 1)

	/* Runes */
	.add('Blood rune', 2, 8)
	.add('Blood rune', 5, 5)
	.add('Law rune', 4, 3)
	.add('Death rune', 15, 1)
	.add('Water rune', 65, 1)

	/* Herbs */
	.add(HerbDropTable, 1, 18)

	/* Coins */
	.add('Coins', 30, 29)
	.add('Coins', 136, 25)
	.add('Coins', 200, 10)
	.add('Coins', 20, 4)

	/* Other */
	.add('Lobster', 6, 3)
	.add('Raw tuna', 4, 2)

	/* Gem drop table */
	.add(GemTable, 1, 8)

	/* Tertiary */
	.tertiary(20, 'Ensouled troll head')
	.tertiary(400, 'Long bone')
	.tertiary(5013, 'Curved bone');

export default new SimpleMonster({
	id: 648,
	name: 'Ice Troll',
	table: IceTrollTable,
	aliases: ['ice troll']
});
