import LootTable from '../../../../structures/LootTable';
import SimpleMonster from '../../../../structures/SimpleMonster';

const CallistoTable = new LootTable()
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
	.add('Rune pickaxe', 1, 48)
	.add('Rune 2h sword', 1, 12)

	/* Runes and ammunition */
	.add('Blood rune', 200, 28)
	.add('Chaos rune', 400, 28)
	.add('Death rune', 300, 28)
	.add('Soul rune', 250, 20)
	.add('Cannonball', 250, 16)

	/* Materials */
	.add(
		[
			['Uncut ruby', 20],
			['Uncut diamond', 10]
		],
		1,
		28
	)
	.add('Mahogany logs', 400, 24)
	.add('Limpwurt root', 25, 20)
	.add('Magic logs', 100, 20)
	.add('Red dragonhide', 75, 12)
	.add('Coconut', 60, 8)
	.add('Uncut dragonstone', 1, 8)
	.add('Grimy toadflax', 100, 4)

	/* Seeds */
	.add('Ranarr seed', 5, 20)
	.add('Snapdragon seed', 3, 20)
	.add('Magic seed', 1, 4)
	.add('Palm tree seed', 1, 4)
	.add('Yew seed', 1, 4)

	/* Other */
	.add('Coins', [15_000, 19_999], 76)
	.add(
		[
			['Dark crab', 8],
			['Super restore(4)', 3]
		],
		1,
		40
	)
	.add('Supercompost', 100, 19)
	.add('Dragon bones', 30, 12)
	.add('Dark fishing bait', 375, 4);

export default new SimpleMonster({
	id: 6503,
	name: 'Callisto',
	table: CallistoTable,
	aliases: ['callisto']
});
