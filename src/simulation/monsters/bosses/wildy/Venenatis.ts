import LootTable from '../../../../structures/LootTable';
import SimpleMonster from '../../../../structures/SimpleMonster';

const VenenatisTable = new LootTable()
	.tertiary(100, 'Clue scroll (elite)')
	.tertiary(2000, 'Venenatis spiderling')
	.tertiary(400, 'Long bone')
	.tertiary(5013, 'Curved bone')
	.oneIn(512, 'Treasonous ring')

	/* Weapons and armour */
	.add('Rune pickaxe', 1, 48)
	.add('Rune knife', 60, 20)
	.add('Rune 2h sword', 1, 12)
	.add('Dragon pickaxe', 1, 3)
	.add('Dragon 2h sword', 1, 2)

	/* Runes and ammunition */

	.add('Chaos rune', 400, 28)
	.add('Death rune', 300, 28)
	.add('Blood rune', 200, 28)
	.add('Diamond bolts (e)', 100, 20)
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
	.add('Onyx bolt tips', 60, 20)
	.add('Magic logs', 100, 20)
	.add('Limpwurt root', 25, 20)
	.add("Red spiders' eggs", 500, 12)
	.add('Unicorn horn', 100, 8)
	.add('Uncut dragonstone', 1, 8)
	.add('Grimy snapdragon', 100, 4)

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
	.add('Supercompost', 100, 19)
	.add('Antidote++(4)', 10, 12)
	.add('Dark fishing bait', 375, 4)
	.add('Yew seed', 1, 4)
	.add('Magic seed', 1, 4)
	.add('Palm tree seed', 1, 4);

export default new SimpleMonster({
	id: 6610,
	name: 'Venenatis',
	table: VenenatisTable,
	aliases: ['ven', 'venny', 'venenatis', 'vene']
});
