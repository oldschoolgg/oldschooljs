import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { GemTable } from '../../subtables/RareDropTable';
import HerbDropTable from '../../subtables/HerbDropTable';
import RareSeedTable from '../../subtables/RareSeedTable';

const WyrmTable = new LootTable(76)
	.every('Wyrm bones')

	/* Pre-roll*/
	.oneIn(2000, 'Dragon sword')
	.oneIn(2000, 'Dragon harpoon')
	.oneIn(2000, 'Dragon knife', [75, 150])
	.oneIn(2000, 'Dragon thrownaxe', [75, 150])

	/* Weapons and armour */
	.addItem("Red d'hide chaps", 1, 3)
	.addItem('Adamant axe', 1, 2)
	.addItem('Adamant sq shield', 1, 2)
	.addItem('Adamant battleaxe', 1, 2)
	.addItem('Adamant 2h sword', 1, 2)
	.addItem('Rune med helm', 1, 2)
	.addItem('Earth battlestaff', 1, 1)
	.addItem('Rune battleaxe', 1, 1)
	.addItem('Dragon dagger', 1, 1)

	/* Runes */
	.addItem('Fire rune', 200, 10)
	.addItem('Earth rune', [75, 150], 10)
	.addItem('Soul rune', [15, 20], 5)
	.addItem('Blood rune', [25, 30], 5)

	/* Herbs */
	.add(HerbDropTable, 2, 4)

	/* Seeds */
	.add(RareSeedTable, 1, 3)

	/* Other */
	.addItem('Coins', [950, 1450], 8)
	.addItem('Bass', 1, 7)
	.addItem('Pure essence', [200, 300], 3)
	.addItem('Rune arrowtips', [8, 12], 2)
	.addItem('Adamant arrowtips', [8, 12], 2)

	/* Rdt */
	.add(GemTable, 1, 1)

	/* Tertiary */
	.tertiary(256, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 8610,
	name: 'Wyrm',
	table: WyrmTable,
	aliases: ['wyrm']
});
