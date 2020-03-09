import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import HerbDropTable from '../../subtables/HerbDropTable';

export const SkeletonTable = new LootTable({ limit: 128 })
	.every('Bones')
	.tertiary(5000, 'Skeleton champion scroll')

	.add(HerbDropTable, 1, 20)

	/* Runes/Ammunition */
	.add('Bronze arrow', 2, 20)
	.add('Bronze arrow', 5, 17)
	.add('Earth rune', 3, 8)
	.add('Air rune', 12, 9)
	.add('Fire rune', 2, 4)
	.add('Nature rune', 3, 4)
	.add('Iron arrow', 1, 4)
	.add('Steel arrow', 1, 3)

	/* Weapons */
	.add('Iron dagger', 1, 8)

	/* Other */
	.add('Coins', 2, 24)
	.add('Coins', 4, 24)
	.add('Coins', 12, 24)
	.add('Coins', 16, 24)
	.add('Coins', 25, 20)
	.add('Coins', 33, 20)
	.add('Fire talisman', 1, 10)
	.tertiary(100, 'Clue scroll (beginner)', 1)
	.tertiary(128, 'Clue scroll (easy)', 1)
	.add('Grain', 1, 3)
	.add('Iron ore', 1, 3);

export default new SimpleMonster({
	id: 70,
	name: 'Skeleton',
	table: SkeletonTable,
	aliases: ['skeleton']
});
