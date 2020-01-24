import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import HerbDropTable from '../subtables/HerbDropTable';
import CommonSeedDropTable from '../subtables/CommonSeedDropTable';
import { GemTable } from '../subtables/RareDropTable';

export const AnkouTable = new LootTable()
	.every('Bones')

	/*Weapons and armour */
	.addItem('Black knife', 1, 1)
	.addItem('Black robe', 1, 1)

	/* Runes and ammunition */
	.addItem('Adamant arrow', [5, 14], 4)
	.addItem('Death rune', 10, 10)
	.addItem('Blood rune', 11, 6)
	.addItem('Law rune', 2, 6)
	.addItem('Blood rune', 5, 3)

	/* Herbs */
	.add(HerbDropTable, undefined, 3)

	/* Seeds */
	.add(CommonSeedDropTable, undefined, 1)

	/* Materials */
	.addItem('Pure essence', 15, 5)
	.addItem('Rune essence', 15, 5)
	.addItem('Mithril ore', [3, 7], 2)

	/* Coins */
	.add('Coins', 8, 33)
	.add('Coins', [5, 204], 10)
	.add('Coins', 10, 3)
	.add('Coins', 5, 1)

	/* Other */
	.add('Dark fishing bait', 60, 33)
	.add('Fishing bait', 60, 33)
	.add('Bass', 1, 2)
	.add('Weapon poison', 1, 2)
	.add('Fried mushrooms', 1, 1)

	/* Rdt */
	.add(GemTable, undefined, 2)

	/* Tertiary */
	.tertiary(512, 'Clue scroll (hard)')

	/* Catacombs tertiary */
	.tertiary(293, 'Ancient shard')
	.tertiary(440, 'Dark totem base')
	.tertiary(440, 'Dark totem middle')
	.tertiary(440, 'Dark totem top');

export default new SimpleMonster({ id: 2514, name: 'Ankou', table: AnkouTable });
