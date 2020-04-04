import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

const SkeletonHellhoundTable = new LootTable()
	.every('Bones')
	.oneIn(5000, 'Skeleton champion scroll');

const VetionTable = new LootTable()
	.every('Big bones')
	.every(SkeletonHellhoundTable, 4)
	.oneIn(512, 'Ring of the gods')
	.tertiary(100, 'Clue scroll (elite)')
	.tertiary(2000, "Vet'ion jr.")
	.tertiary(400, 'Long bone')
	.tertiary(5000, 'Skeleton champion scroll')
	.tertiary(5000, 'Curved bone')

	/* Weapons and armour */
	.add('Rune pickaxe', 1, 48)
	.add('Rune 2h sword', 1, 12)
	.add('Ancient staff', 1, 12)
	.add('Dragon pickaxe', 1, 3)
	.add('Dragon 2h sword', 1, 2)

	/* Runes and ammunition */
	.add('Chaos rune', 400, 28)
	.add('Death rune', 300, 28)
	.add('Blood rune', 200, 28)
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
	.add('Gold ore', 300, 24)
	.add('Limpwurt root', 25, 20)
	.add('Magic logs', 100, 20)
	.add('Oak plank', 300, 20)
	.add('Dragon bones', 100, 12)
	.add('Uncut dragonstone', 1, 8)
	.add('Mort myre fungus', 200, 8)
	.add('Grimy ranarr weed', 100, 4)

	/* Other */
	.add('Coins', [15000, 19999], 76)
	.add(
		[
			['Dark crab', 8],
			['Super restore(4)', 3]
		],
		1,
		40
	)
	.add('Sanfew serum(4)', 10, 20)
	.add('Ogre coffin key', 10, 20)
	.add('Supercompost', 100, 19)
	.add('Dark fishing bait', 375, 4)
	.add('Palm tree seed', 1, 4)
	.add('Yew seed', 1, 4)
	.add('Magic seed', 1, 4);

export default new SimpleMonster({
	id: 6611,
	name: "Vet'ion",
	table: VetionTable,
	aliases: ['vetion', "vet'ion", 'vet']
});
