import LootTable from '../structures/LootTable';
import SimpleMonster from '../structures/SimpleMonster';

export const BrineRatTable = new LootTable()
	.every('Bones')
	.every('Raw rat meat')

	/* Weapons */
	.oneIn(512, 'Brine sabre')

	/* Runes */
	.addItem('Death rune', [5, 14], 4)
	.addItem('Earth rune', 10, 10)
	.addItem('Earth rune', 11, 6)
	.addItem('Water rune', 2, 6)
	.addItem('Air rune', 5, 3)
	.addItem('Earth rune', 5, 3)
	.addItem('Water rune', 5, 3)
	.addItem('Blood rune', 5, 3)

	/* Materials */
	.addItem('Raw lobster', 15, 5)
	.addItem('Raw shark', 15, 5)
	.addItem('Raw rat meat', [3, 7], 2)
	.addItem('Raw pike', 15, 5)
	.addItem('Raw shark', 15, 5)
	.addItem('Raw swordfish', 15, 5)
	.addItem('Raw shark', 15, 5)

	/* Coins */
	.add('Coins', 8, 33)
	.add('Coins', 2, 10)
	.add('Coins', 10, 3)
	.add('Coins', 5, 1)

	/* Other */
	.add('Water talisman', 1, 2)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (medium)');

export default new SimpleMonster({ id: 4501, name: 'Brine Rat', table: BrineRatTable });
