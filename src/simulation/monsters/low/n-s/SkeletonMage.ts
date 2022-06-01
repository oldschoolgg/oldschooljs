import LootTable from '../../../../structures/LootTable';
import SimpleMonster from '../../../../structures/SimpleMonster';
import HerbDropTable from '../../../subtables/HerbDropTable';
import { GemTable } from '../../../subtables/RareDropTable';

export const SkeletonMageTable = new LootTable()
	.every('ashes')
	.tertiary(5000, 'Skeleton champion scroll')
	.tertiary(128, 'Clue scroll (medium)')
	// TODO: Check for updated drop rates in future.
	/* Weapons and armour */
	.add('Pink skirt', 1, 8)
	.add('Battlestaff', 1, 1)

	/* Runes */
	.add('Mind rune', [7, 9], 8)
	.add('Chaos rune', [2, 4], 6)
	.add('Law rune', [2, 3], 4)
	.add('Nature rune', [1, 3], 1)

	/* Herbs */
	.add(HerbDropTable, 1, 4)

	/* Materials */
	.add('Uncut opal', 1, 8)
	.add('Pot of flour', 1, 8)
	.add('Iron bar', [1, 2], 4)

	/* Other */
	.add('Coins', [26, 54], 22)
	.add('Big bones', [3, 4], 1)

	/* Gem drop table */
	.add(GemTable);

export default new SimpleMonster({
	id: 4319,
	name: 'Skeleton Mage',
	table: SkeletonMageTable,
	aliases: ['skeleton mage']
});
