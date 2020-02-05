import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';

export const SkeletonTable = new LootTable(128)
	.every('Bones')
	.tertiary(5000, 'Skeleton champion scroll', 1)

	/* Herbs */

	.addItem('Grimy guam leaf', 1, 6)
	.addItem('Grimy marrentill', 1, 6)
	.addItem('Grimy tarromin', 1, 6)
	.addItem('Grimy harralander', 1, 6)
	.addItem('Grimy ranarr weed', 1, 5)
	.addItem('Grimy irit leaf', 1, 5)
	.addItem('Grimy avantoe', 1, 3)
	.addItem('Grimy kwuarm', 1, 3)
	.addItem('Grimy cadantine', 1, 3)
	.addItem('Grimy lantadyme', 1, 3)
	.addItem('Grimy dwarf weed', 1, 3)

	/* Runes/Ammunition */

	.addItem('Bronze arrow', 2, 20)
	.addItem('Bronze arrow', 5, 17)
	.addItem('Earth rune', 3, 8)
	.addItem('Air rune', 12, 9)
	.addItem('Fire rune', 2, 4)
	.addItem('Nature rune', 3, 4)
	.addItem('Iron arrow', 1, 4)
	.addItem('Steel arrow', 1, 3)

	/* Weapons */
	.addItem('Iron dagger', 1, 8)

	/* Other */
	.addItem('Coins', 2, 24)
	.addItem('Coins', 4, 24)
	.addItem('Coins', 12, 24)
	.addItem('Coins', 16, 24)
	.addItem('Coins', 25, 20)
	.addItem('Coins', 33, 20)
	.addItem('Fire talisman', 1, 10)
	.tertiary(100, 'Clue scroll (beginner)', 1)
	.tertiary(128, 'Clue scroll (easy)', 1)
	.addItem('Grain', 1, 3)
	.addItem('Iron ore', 1, 3);

export default new SimpleMonster({
	id: 70,
	name: 'Skeleton',
	table: SkeletonTable,
	aliases: ['skeleton']
});
