import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';

export const CallistoTable = new LootTable()

	.every('Big bones')
	.tertiary(400, 'Long bone')
	.tertiary(100, 'Clue scroll (elite)')
	.tertiary(2000, 'Callisto cub')
	.tertiary(5013, 'Curved bone')
	.oneIn(171, 'Dragon pickaxe')
	.oneIn(256, 'Dragon 2h sword')

	/* Pre-roll */
	.oneIn(512, 'Tyrannical ring')

	/* Weapons and armour */
	.addItem('Rune pickaxe', 1, 48)
	.addItem('Rune 2h sword', 1, 12)

	/* Runes and ammunition */
	.addItem('Blood rune', 200, 28)
	.addItem('Chaos rune', 400, 28)
	.addItem('Death rune', 300, 28)
	.addItem('Soul rune', 250, 20)
	.addItem('Cannonball', 250, 16)

	/* Materials */
	.addItem(
		[
			['Uncut ruby', 20],
			['Uncut diamond', 10]
		],
		1,
		28
	)
	.addItem('Mahogany logs', 400, 24)
	.addItem('Limpwurt root', 25, 20)
	.addItem('Magic logs', 100, 20)
	.addItem('Red dragonhide', 75, 12)
	.addItem('Coconut', 60, 8)
	.addItem('Uncut dragonstone', 1, 8)
	.addItem('Grimy toadflax', 100, 4)

	/* Seeds */
	.addItem('Ranarr seed', 5, 20)
	.addItem('Snapdragon seed', 3, 20)
	.addItem('Magic seed', 1, 4)
	.addItem('Palm tree seed', 1, 4)
	.addItem('Yew seed', 1, 4)

	/* Other */
	.addItem('Coins', [15000, 19999], 76)
	.addItem(
		[
			['Dark crab', 8],
			['Super restore(4)', 3]
		],
		1,
		40
	)
	.addItem('Supercompost', 100, 19)
	.addItem('Dragon bones', 30, 12)
	.addItem('Dark fishing bait', 375, 4);

export default new SimpleMonster({
	id: 6503,
	name: 'Callisto',
	table: CallistoTable,
	aliases: ['callisto', 'bear']
});
