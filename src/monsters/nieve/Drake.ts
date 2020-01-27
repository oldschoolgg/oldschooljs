import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import HerbDropTable from '../subtables/HerbDropTable';
import RareSeedTable from '../subtables/RareSeedTable';
import { GemTable } from '../subtables/RareDropTable';

const DrakeHerbTable = new LootTable()
	.add(HerbDropTable, 1, 1)
	.add([[HerbDropTable], [HerbDropTable]], 1, 1)
	.add([[HerbDropTable], [HerbDropTable], [HerbDropTable]], 1, 1);

const NotedHerbTable = new LootTable()
	.add('Grimy avantoe', [1, 3], 10)
	.add('Grimy kwuarm', [1, 3], 10)
	.add('Grimy ranarr weed', [1, 3], 8)
	.add('Grimy snapdragon', [1, 3], 8)
	.add('Grimy cadantine', [1, 3], 8)
	.add('Grimy dwarf weed', [1, 3], 8)
	.add('Grimy lantadyme', [1, 3], 6)
	.add('Grimy torstol', [1, 3], 6);

export const DrakeTable = new LootTable()
	.every('Drake bones')

	/* Pre-roll */
	.oneIn(512, "Drake's tooth")
	.oneIn(512, "Drake's claw")
	.oneIn(2000, 'Dragon thrownaxe', [100, 200])
	.oneIn(2000, 'Dragon knife', [100, 200])

	/*Weapons and armour */
	.addItem('Rune full helm', 1, 3)
	.addItem("Red d'hide body", 1, 2)
	.addItem("Black d'hide vamb", 1, 1)
	.addItem('Mystic earth staff', 1, 1)
	.addItem('Dragon mace', 1, 1)

	/* Runes and ammunition */
	.addItem('Fire rune', [100, 200], 10)
	.addItem('Nature rune', [30, 60], 10)
	.addItem('Law rune', [25, 50], 10)
	.addItem('Death rune', [20, 40], 10)
	.addItem('Rune arrow', [35, 65], 10)

	/* Herbs */
	.add(DrakeHerbTable, undefined, 5)
	.add(NotedHerbTable, undefined, 6)

	/* Seeds */
	.add(RareSeedTable, undefined, 1)

	/* Other */
	.addItem('Coins', [1000, 2000], 4)
	.addItem('Coins', [5000, 7000], 1)
	.addItem('Diamond', [3, 6], 4)
	.addItem('Swordfish', [1, 2], 4)

	/* Rdt */
	.add(GemTable, undefined, 1)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 2004,
	name: 'Drake',
	table: DrakeTable,
	aliases: ['drake']
});
