import LootTable from '../structures/LootTable';
import SimpleMonster from '../structures/SimpleMonster';

export const CallistoTable = new LootTable()
	.every('Big bones')
	.tertiary(400, 'Long bone')
	.tertiary(100, 'Clue scroll (elite)')
	.tertiary(2000, 'Callisto cub')
	.tertiary(5013, 'Curved bone')
	.tertiary(171, 'Dragon pickaxe')
	.tertiary(256, 'Dragon 2h sword')

    /* Pre-roll */
    .tertiary(512, 'Tyrannical ring')

	/* Weapons and armour */
	.addItem('Rune pickaxe', 1, 12)
	.addItem('Rune 2h sword', 1, 3)
	
	/* This didn't seem to work
	.addItem('Dragon pickaxe', 1, .75)
	.addItem('Dragon 2h sword', 1, .5)
	*/

	/* Runes and ammunition */
	.addItem('Blood rune', 200, 7)
	.addItem('Chaos rune', 400, 7)
	.addItem('Death rune', 300, 7)
	.addItem('Soul rune', 250, 5)
	.addItem('Cannonball', 250, 4)

    /* Materials */
    .addItem(
		[
			['Uncut ruby', 20],
			['Uncut diamond', 10]
		],
		1,
		7
	)
	.addItem('Mahogany logs', 400, 6)
	.addItem('Limpwurt root', 25, 5)
	.addItem('Magic logs', 100, 5)
    .addItem('Red dragonhide', 75, 3)
    .addItem('Coconut', 60, 2)
    .addItem('Uncut dragonstone', 1, 2)
    .addItem('Grimy toadflax', 100, 1)


    /* Seeds */
    .addItem('Ranarr seed', 5, 5)
    .addItem('Snapdragon seed', 3, 5)
    .addItem('Magic seed', 1, 1)
    .addItem('Palm tree seed', 1, 1)
    .addItem('Yew seed', 1, 1)

    /* Other */
    .addItem('Coins', [15000, 19999], 19)
    .addItem(
		[
			['Dark crab', 8],
			['Super restore(4)', 3]
		],
		1,
		10
	)
    .addItem('Supercompost', 100, 4.75)
    .addItem('Dragon bones', 30, 3)
    .addItem('Dark fishing bait', 375, 1)

export default new SimpleMonster({ id: 6503, name: 'Callisto', table: CallistoTable });
