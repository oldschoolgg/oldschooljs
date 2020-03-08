import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

export const SkeletonTable = new LootTable({ limit: 128 })
	.every('Bones')
	.tertiary(5000, 'Skeleton champion scroll', 1)

	/* Herbs */

	.add('Grimy guam leaf', 1, 6)
	.add('Grimy marrentill', 1, 6)
	.add('Grimy tarromin', 1, 6)
	.add('Grimy harralander', 1, 6)
	.add('Grimy ranarr weed', 1, 5)
	.add('Grimy irit leaf', 1, 5)
	.add('Grimy avantoe', 1, 3)
	.add('Grimy kwuarm', 1, 3)
	.add('Grimy cadantine', 1, 3)
	.add('Grimy lantadyme', 1, 3)
	.add('Grimy dwarf weed', 1, 3)

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
