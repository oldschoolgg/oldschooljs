import LootTable from '../structures/LootTable';
import HerbDropTable from './HerbDropTable';

export default new LootTable(128)
	.every('Bones')

	.addItem('Bronze med helm', 1, 2)
	.addItem('Iron dagger', 1)

	.addItem('Bronze bolts', [2, 12], 22)
	.addItem('Bronze arrow', 7, 3)
	.addItem('Earth rune', 4, 2)
	.addItem('Fire rune', 6, 2)
	.addItem('Mind rune', 9, 2)
	.addItem('Chaos rune', 2, 1)

	.add(HerbDropTable, 1, 23)

	.add('Coins', 3, 38)
	.add('Coins', 5, 9)
	.add('Coins', 15, 4)
	.add('Coins', 25, 1)

	.addItem('Fishing bait', 1, 5)
	.addItem('Copper ore', 1, 2)
	.addItem('Earth talisman', 1, 2)
	.addItem('Cabbage', 1, 1)

	.tertiary(90, 'Clue scroll (beginner)', 1)
	.tertiary(128, 'Clue scroll (easy)', 1);
