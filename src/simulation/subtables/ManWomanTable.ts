import LootTable from '../../structures/LootTable';
import HerbDropTable from './HerbDropTable';
// import HerbDropTable from './HerbDropTable';

export default new LootTable()
	.addNothing()
	.every('Bones')

	.add('Bronze med helm', 1, 1 / 64)
	.add('Iron dagger', 1, 1 / 128)

	.add('Bronze bolts', [2, 12], 1 / 5.818)
	.add('Bronze arrow', 7, 1 / 42.67)
	.add('Earth rune', 4, 1 / 64)
	.add('Fire rune', 6, 1 / 64)
	.add('Mind rune', 9, 1 / 64)
	.add('Chaos rune', 2, 1 / 128)

	.add(HerbDropTable, 1, 23 / 128)

	.add('Coins', 3, 1 / 3.368)
	.add('Coins', 5, 1 / 14.22)
	.add('Coins', 15, 1 / 32)
	.add('Coins', 25, 1 / 128)

	.add('Fishing bait', 1, 1 / 25.6)
	.add('Copper ore', 1, 1 / 64)
	.add('Earth talisman', 1, 1 / 64)
	.add('Cabbage', 1, 1 / 128)

	.tertiary(90, 'Clue scroll (beginner)', 1)
	.tertiary(128, 'Clue scroll (easy)', 1);
