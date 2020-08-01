import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import HerbDropTable from '../../subtables/HerbDropTable';
import { GemTable } from '../../subtables/RareDropTable';

export const BanditTable = new LootTable({ limit: 128 })
	.every('Bones')

	/* Weapons and armour */
	.add('Iron scimitar', 1, 4)
	.add('Steel sq shield', 1, 2)
	.add('Steel axe', 1, 1)

	/* Runes */
	.add('Chaos rune', 6, 3)
	.add('Water rune', 9, 3)
	.add('Air rune', 10, 2)
	.add('Death rune', 2, 2)
	.add('Law rune', 3, 2)
	.add('Blood rune', 2, 1)
	.add('Mind rune', 2, 1)
	.add('Nature rune', 2, 1)

	/* Herbs */
	.add(HerbDropTable, 1, 37)

	/* Coins */
	.add('Coins', 35, 26)
	.add('Coins', 12, 13)
	.add('Coins', 53, 10)
	.add('Coins', 1, 7)
	.add('Coins', 80, 2)

	/* Other */
	.add('Coal', 1, 6)

	/* Gem drop table */
	.add(GemTable, 1, 3);

export default new SimpleMonster({
	id: 1026,
	name: 'Bandit',
	table: BanditTable,
	aliases: ['bandit']
});
