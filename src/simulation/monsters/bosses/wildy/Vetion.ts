import LootTable from '../../../../structures/LootTable';
import SimpleMonster from '../../../../structures/SimpleMonster';

const SkeletonHellhoundTable = new LootTable().every('Bones').oneIn(5000, 'Skeleton champion scroll');

const VetionUniqueTable = new LootTable()
	.oneIn(196, "Skull of vet'ion")
	.oneIn(256, 'Dragon 2h sword')
	.oneIn(256, 'Dragon pickaxe')
	.oneIn(360, 'Voidwalker blade')
	.oneIn(512, 'Ring of the gods');

const VetionSecondarySupplyTable = new LootTable({ limit: 18 })
	.add('Blighted anglerfish', [5, 6], 1)
	.add('Blighted karambwan', [5, 6], 1)
	.add('Blighted super restore(3)', [3, 4], 1)
	.add('Blighted super restore(4)', [3, 4], 1)
	.add('Ranging potion(2)', [2, 3], 1)
	.add('Super combat potion(2)', [2, 3], 1);

const VetionTable = new LootTable()
	.every('Big bones')
	.every(SkeletonHellhoundTable, 4)

	/* Weapons and armour */
	.add('Rune pickaxe', [1, 3], 12)
	.add('Rune dart', [22, 150], 3)
	.add('Rune knife', [22, 150], 3)

	/* Runes and ammunition */
	.add('Chaos rune', [135, 900], 7)
	.add('Death rune', [105, 700], 7)
	.add('Blood rune', [75, 500], 7)
	.add('Cannonball', [82, 550], 4)

	/* Materials */
	.add('Gold ore', [101, 675], 6)
	.add('Limpwurt root', [9, 60], 5)
	.add('Wine of zamorak', [15, 100], 5)
	.add('Magic logs', [33, 225], 5)
	.add('Oak plank', [60, 400], 5)
	.add('Uncut ruby', [11, 75], 4)
	.add('Uncut diamond', [5, 35], 3)
	.add('Dragon bones', [22, 150], 3)
	.add('Uncut dragonstone', [1, 5], 2)
	.add('Mort myre fungus', [67, 450], 2)
	.add('Grimy ranarr weed', [15, 100], 1)
	.add('Grimy dwarf weed', [6, 45], 1)
	.add('Grimy snapdragon', [6, 45], 1)
	.add('Grimy toadflax', [6, 45], 1)

	/* Other */
	.add('Coins', [7500, 50_000], 21)
	.add('Super restore(4)', [1, 10], 5)
	.add('Sanfew serum(4)', [3, 20], 5)
	.add('Dark crab', [7, 50], 5)
	.add('Supercompost', [33, 225], 4)
	.add('Blighted anglerfish', [6, 45], 1)

	/* Tertiary */
	.tertiary(100, 'Clue scroll (elite)')
	.tertiary(400, 'Long bone')
	.tertiary(2000, "Vet'ion jr.")
	.tertiary(5000, 'Skeleton champion scroll')
	.tertiary(5013, 'Curved bone');

const VetionTotalTable = new LootTable().every(VetionSecondarySupplyTable).add(VetionUniqueTable).add(VetionTable);

export default new SimpleMonster({
	id: 6611,
	name: "Vet'ion",
	table: VetionTotalTable,
	aliases: ['vetion', "vet'ion", 'vet']
});
