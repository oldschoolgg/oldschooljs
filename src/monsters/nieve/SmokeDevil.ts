import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import RareDropTable, { GemTable } from '../subtables/RareDropTable';
import HerbDropTable from '../subtables/HerbDropTable';

const SmokeDevilHerbTable = new LootTable()
	.add(HerbDropTable, 1, 2)
	.add([[HerbDropTable], [HerbDropTable]], 1, 1);

export const SmokeDevilTable = new LootTable(128)
	.every('Ashes')

	/* Weapons and armor */
	.addItem('Adamant battleaxe', 1, 3)
	.addItem('Rune dagger', 1, 3)
	.addItem('Air battlestaff', 1, 3)
	.addItem("Black d'hide vamb", 1, 3)
	.addItem('Fire battlestaff', 1, 3)
	.addItem('Mithril plateskirt', 1, 2)
	.addItem('Rune full helm', 1, 2)
	.addItem('Rune chainbody', 1, 2)
	.addItem("Red d'hide body", 1, 1)
	.oneIn(512, 'Occult necklace')
	.oneIn(32_768, 'Dragon chainbody')

	/* Runes and ammunition */
	.addItem('Smoke rune', 15, 11)
	.addItem('Smoke rune', 40, 5)
	.addItem('Runite bolts', 15, 5)
	.addItem('Fire rune', 37, 4)
	.addItem('Air rune', 37, 4)
	.addItem('Soul rune', 10, 4)
	.addItem('Fire rune', 150, 2)
	.addItem('Rune arrow', 24, 2)

	/* Herbs */
	.add(SmokeDevilHerbTable, undefined, 18)

	/* Coins */
	.addItem('Coins', 750, 12)
	.addItem('Coins', 80, 7)
	.addItem('Coins', 300, 3)

	/* Other */
	.addItem('Shark', 1, 6)
	.addItem('Steel bar', 2, 3)
	.addItem('Magic logs', 5, 3)
	.addItem('Coal', 15, 3)
	.addItem('Adamantite bar', 1, 2)
	.addItem('Crossbow string', 1, 2)
	.addItem('Ugthanki kebab', 3, 2)

	/* Rdt */
	.add(RareDropTable, 4)
	.add(GemTable, 4)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (hard)')
	.tertiary(750, 'Clue scroll (elite)');

export default new SimpleMonster({
	id: 498,
	name: 'Smoke Devil',
	table: SmokeDevilTable,
	aliases: ['smoke devil']
});
