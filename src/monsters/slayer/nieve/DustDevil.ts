import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import HerbDropTable from '../../subtables/HerbDropTable';
import { GemTable } from '../../subtables/RareDropTable';

export const DustDevilTable = new LootTable()
	.every('Bones')
	.oneIn(4000, 'Dust battlestaff')
	.oneIn(32768, 'Dragon chainbody')

	/*Weapons and armour */
	.addItem('Adamant axe', 1, 3)
	.addItem('Rune dagger', 1, 2)
	.addItem("Red d'hide vamb", 1, 2)
	.addItem('Air battlestaff', 1, 2)
	.addItem('Earth battlestaff', 1, 2)
	.addItem("Black d'hide vamb", 1, 1)
	.addItem('Mystic air staff', 1, 1)
	.addItem('Mystic earth staff', 1, 1)
	.addItem('Dragon dagger', 1, 1)

	/* Runes and ammunition */
	.addItem('Dust rune', 200, 10)
	.addItem('Earth rune', 300, 10)
	.addItem('Fire rune', 300, 10)
	.addItem('Chaos rune', 80, 7)
	.addItem('Rune arrow', 12, 5)
	.addItem('Soul rune', 20, 4)
	.addItem('Fire rune', 50, 1)
	.addItem('Soul rune', 50, 1)

	/* Herbs */
	.add(HerbDropTable, 1, 8)

	/* Other */
	.addItem('Coins', [2000, 4000], 32)
	.addItem('Mithril bar', 10, 3)
	.addItem('Ugthanki kebab', 4, 2)
	.addItem('Adamantite bar', 4, 1)

	/* Rdt */
	.add(GemTable, 1, 8);

export default new SimpleMonster({
	id: 423,
	name: 'Dust Devil',
	table: DustDevilTable,
	aliases: ['dust devil']
});
