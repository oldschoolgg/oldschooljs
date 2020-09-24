import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import CommonSeedDropTable from '../../subtables/CommonSeedDropTable';
import HerbDropTable from '../../subtables/HerbDropTable';
import { GemTable } from '../../subtables/RareDropTable';

const AnkouTable = new LootTable({ limit: 100 })
	.every('Bones')

	/* Weapons and armor */
	.add('Black knife', 1, 1)
	.add('Black robe', 1, 1)

	/* Runes and ammunition */
	.add('Death rune', 10, 10)
	.add('Blood rune', 11, 6)
	.add('Law rune', 2, 6)
	.add('Adamant arrow', [5, 14], 4)
	.add('Blood rune', 5, 3)

	/* Herbs */
	.add(HerbDropTable, 1, 3)

	/* Seeds */
	.add(CommonSeedDropTable, 1, 1)

	/* Materials */
	.add('Pure essence', 15, 5)
	.add('Mithril ore', [3, 7], 2)

	/* Coins */
	.add('Coins', 8, 33)
	.add('Coins', [5, 204], 10)

	/* Other */
	.add('Bass', 1, 2)
	.add('Weapon poison', 1, 2)
	.add('Fried mushrooms', 1, 1)

	/* Rdt */
	.add(GemTable, 1, 2)

	/* Tertiary */
	.tertiary(512, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 2514,
	name: 'Ankou',
	table: AnkouTable,
	aliases: ['ankou', 'ank']
});
