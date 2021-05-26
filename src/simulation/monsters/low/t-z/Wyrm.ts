import LootTable from '../../../../structures/LootTable';
import SimpleMonster from '../../../../structures/SimpleMonster';
import HerbDropTable from '../../../subtables/HerbDropTable';
import { GemTable } from '../../../subtables/RareDropTable';
import RareSeedTable from '../../../subtables/RareSeedTable';

const WyrmTable = new LootTable({ limit: 76 })
	.every('Wyrm bones')

	/* Pre-roll*/
	// TODO: dynamic drop based on slayer task
	.oneIn(2000, 'Dragon sword')
	.oneIn(2000, 'Dragon harpoon')
	.oneIn(2000, 'Dragon knife', [75, 150])
	.oneIn(2000, 'Dragon thrownaxe', [75, 150])

	/* Weapons and armour */
	.add("Red d'hide chaps", 1, 3)
	.add('Adamant axe', 1, 2)
	.add('Adamant sq shield', 1, 2)
	.add('Adamant battleaxe', 1, 2)
	.add('Adamant 2h sword', 1, 2)
	.add('Rune med helm', 1, 2)
	.add('Earth battlestaff', 1, 1)
	.add('Rune battleaxe', 1, 1)
	.add('Dragon dagger', 1, 1)

	/* Runes */
	.add('Fire rune', 200, 10)
	.add('Earth rune', [75, 150], 10)
	.add('Soul rune', [15, 20], 5)
	.add('Blood rune', [25, 30], 5)

	/* Herbs */
	.add(HerbDropTable, 2, 4)

	/* Seeds */
	.add(RareSeedTable, 1, 3)

	/* Other */
	.add('Coins', [950, 1450], 8)
	.add('Bass', 1, 7)
	.add('Pure essence', [200, 300], 3)
	.add('Rune arrowtips', [8, 12], 2)
	.add('Adamant arrowtips', [8, 12], 2)

	/* RDT */
	.add(GemTable, 1, 1)

	/* Tertiary */
	.tertiary(256, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 8610,
	name: 'Wyrm',
	table: WyrmTable,
	aliases: ['wyrm']
});
