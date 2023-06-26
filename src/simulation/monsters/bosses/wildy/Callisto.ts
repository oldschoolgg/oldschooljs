import LootTable from '../../../../structures/LootTable';
import SimpleMonster from '../../../../structures/SimpleMonster';

const CallistoUniqueTable = new LootTable()
	.oneIn(196, 'Claws of callisto')
	.oneIn(256, 'Dragon 2h sword')
	.oneIn(256, 'Dragon pickaxe')
	.oneIn(360, 'Voidwaker hilt')
	.oneIn(512, 'Tyrannical ring');

const CallistoSecondarySupplyTable = new LootTable({ limit: 18 })
	.add('Blighted anglerfish', [5, 6], 1)
	.add('Blighted karambwan', [5, 6], 1)
	.add('Blighted super restore(3)', [3, 4], 1)
	.add('Blighted super restore(4)', [3, 4], 1)
	.add('Ranging potion(2)', [2, 3], 1)
	.add('Super combat potion(2)', [2, 3], 1);

const CallistoTable = new LootTable()
	.every('Big bones')

	/* Weapons and armour */
	.add('Rune pickaxe', [1, 3], 12)
	.add('Rune 2h sword', 1, 3)

	/* Runes and ammunition */
	.add('Blood rune', [75, 500], 7)
	.add('Death rune', [105, 700], 7)
	.add('Chaos rune', [135, 900], 7)
	.add('Soul rune', [90, 600], 5)
	.add('Cannonball', [90, 600], 4)

	/* Materials */
	.add('Mahogany logs', [90, 600], 6)
	.add('Limpwurt root', [15, 100], 5)
	.add('Magic logs', [33, 225], 5)
	.add('Uncut ruby', [11, 75], 4)
	.add('Uncut diamond', [5, 35], 3)
	.add('Red dragonhide', [25, 170], 3)
	.add('Uncut dragonstone', [1, 5], 2)
	.add('Coconut', [20, 135], 2)
	.add('Grimy toadflax', [22, 150], 1)
	.add('Grimy dwarf weed', [6, 45], 1)
	.add('Grimy ranarr weed', [6, 45], 1)
	.add('Grimy snapdragon', [6, 45], 1)

	/* Seeds */
	.add('Ranarr seed', [1, 11], 5)
	.add('Snapdragon seed', [1, 8], 5)

	/* Other */
	.add('Coins', [7500, 50_000], 21)
	.add('Dark crab', [7, 50], 5)
	.add('Super restore(4)', [1, 10], 5)
	.add('Supercompost', [33, 225], 4)
	.add('Dragon bones', [11, 75], 3)
	.add('Blighted anglerfish', [6, 45], 1)

	/* Tertiary */
	.tertiary(100, 'Clue scroll (elite)')
	.tertiary(400, 'Long bone')
	.tertiary(2000, 'Callisto cub')
	.tertiary(5013, 'Curved bone');

const CallistoTotalTable = new LootTable()
	.every(CallistoSecondarySupplyTable)
	.add(CallistoUniqueTable)
	.add(CallistoTable);

export default new SimpleMonster({
	id: 6503,
	name: 'Callisto',
	table: CallistoTotalTable,
	aliases: ['callisto']
});
