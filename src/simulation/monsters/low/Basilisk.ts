import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import HerbDropTable from '../../subtables/HerbDropTable';
import { GemTable } from '../../subtables/RareDropTable';

const BasiliskTable = new LootTable()
	.every('Bones')

	/*Weapons and armour */
	.addItem('Mithril axe', 1, 3)
	.addItem('Steel battleaxe', 1, 3)
	.addItem('Mithril spear', 1, 2)
	.addItem('Adamant full helm', 1, 1)
	.addItem('Mithril kiteshield', 1, 1)
	.addItem('Rune dagger', 1, 1)
	.oneIn(512, 'Mystic hat (light)')

	/* Runes */
	.addItem('Water rune', 75, 8)
	.addItem('Nature rune', 15, 5)
	.addItem('Law rune', 3, 3)
	.addItem('Nature rune', 37, 1)

	/* Herbs */
	.add(HerbDropTable, 1, 35)

	/* Materials */
	.addItem('Adamantite ore', 1, 3)

	/* Coins */
	.add('Coins', 44, 29)
	.add('Coins', 200, 17)
	.add('Coins', 132, 5)
	.add('Coins', 11, 5)
	.add('Coins', 440, 1)

	/* Rdt */
	.add(GemTable, 1, 5)

	/* Tertiary */
	.tertiary(2000, 'Basilisk head');

export default new SimpleMonster({
	id: 122,
	name: 'Basilisk',
	table: BasiliskTable,
	aliases: ['basilisk', 'basi']
});
