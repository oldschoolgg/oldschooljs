import LootTable from '../structures/LootTable';
import SimpleMonster from '../structures/SimpleMonster';


export const VenenatisTable = new LootTable()
	.tertiary(100, 'Clue scroll (elite)')
	.tertiary(2000, 'Venenatis spiderling')
	.tertiary(400, 'Long bone')
    .tertiary(5000, 'Curved bone')
    .tertiary(515, 'Treasonous ring')

	/* Weapons and armour */
    .addItem('Rune pickaxe', 1, 48)
    .addItem('Rune knife', 60, 20)
    .addItem('Rune 2h sword', 1, 12)
    .addItem('Dragon pickaxe', 1, 3)
    .addItem('Dragon 2h sword', 1, 2)

    /* Runes and ammunition */

	.addItem('Chaos rune', 400, 28)
	.addItem('Death rune', 300, 28)
	.addItem('Blood rune', 200, 28)
    .addItem('Diamond bolts (e)', 100, 20)
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
    .addItem('Gold ore', 300, 24)
    .addItem('Onyx bolt tips', 60, 20)
    .addItem('Magic logs', 100, 20)
    .addItem('Limpwurt root', 25, 20)
    .addItem("Red spiders' eggs", 500, 12)
    .addItem("Unicorn horn", 100, 8)
    .addItem("Uncut dragonstone", 1, 8)
    .addItem("Grimy snapdragon", 100, 4)

    /* Other */
    .addItem('Coins', [15000,19999], 76)
    .addItem(
		[
			['Dark crab', 8],
			['Super restore(4)', 3]
		],
		1,
		40
	)
    .addItem('Supercompost', 100, 19)
    .addItem('Antidote++(4)', 10, 12)
    .addItem('Dark fishing bait', 375, 4)
    .addItem('Yew seed', 1, 4)
    .addItem('Magic seed', 1, 4)
    .addItem('Palm tree seed', 1, 4)

export default new SimpleMonster({ id: 6610, name: 'Venenatis', table: VenenatisTable });
