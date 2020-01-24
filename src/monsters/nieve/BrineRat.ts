import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';

export const BrineRatTable = new LootTable()
	.every('Bones')
	.every('Raw rat meat')

	/* Weapons */
	.oneIn(512, 'Brine sabre')

	/* Runes */
	.addItem('Death rune', 7, 18)
	.addItem('Earth rune', 10, 6)
	.addItem('Earth rune', 36, 4)
	.addItem('Water rune', 10, 3)
	.addItem('Air rune', 18, 2)
	.addItem('Earth rune', 18, 2)
	.addItem('Water rune', 18, 2)
	.addItem('Blood rune', 4, 2)

	/* Materials */
	.addItem('Raw lobster', 10, 6)
	.addItem('Raw shark', 3, 6)
	.addItem('Raw rat meat', 18, 2)
	.addItem('Raw pike', 18, 2)
	.addItem('Raw shark', 8, 2)
	.addItem('Raw swordfish', 9, 2)
	.addItem('Raw shark', 1, 1)

	/* Coins */
	.add('Coins', 1, 21)
	.add('Coins', 2, 16)
	.add('Coins', 4, 9)
	.add('Coins', 29, 3)

	/* Other */
	.add('Water talisman', 1, 3)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (medium)');

export default new SimpleMonster({ id: 4501, name: 'Brine Rat', table: BrineRatTable });
