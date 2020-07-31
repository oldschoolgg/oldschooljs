import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import HerbDropTable from '../../subtables/HerbDropTable';
import { GemTable } from '../../subtables/RareDropTable';

const DustDevilTable = new LootTable()
	.every('Bones')
	.oneIn(4000, 'Dust battlestaff')
	.oneIn(32768, 'Dragon chainbody')

	/*Weapons and armour */
	.add('Adamant axe', 1, 3)
	.add('Rune dagger', 1, 2)
	.add("Red d'hide vambraces", 1, 2)
	.add('Air battlestaff', 1, 2)
	.add('Earth battlestaff', 1, 2)
	.add("Black d'hide vambraces", 1, 1)
	.add('Mystic air staff', 1, 1)
	.add('Mystic earth staff', 1, 1)
	.add('Dragon dagger', 1, 1)

	/* Runes and ammunition */
	.add('Dust rune', 200, 10)
	.add('Earth rune', 300, 10)
	.add('Fire rune', 300, 10)
	.add('Chaos rune', 80, 7)
	.add('Rune arrow', 12, 5)
	.add('Soul rune', 20, 4)
	.add('Fire rune', 50, 1)
	.add('Soul rune', 50, 1)

	/* Herbs */
	.add(HerbDropTable, 1, 8)

	/* Other */
	.add('Coins', [2000, 4000], 32)
	.add('Mithril bar', 10, 3)
	.add('Ugthanki kebab', 4, 2)
	.add('Adamantite bar', 4, 1)

	/* Rdt */
	.add(GemTable, 1, 8);

export default new SimpleMonster({
	id: 423,
	name: 'Dust Devil',
	table: DustDevilTable,
	aliases: ['dust devil']
});
