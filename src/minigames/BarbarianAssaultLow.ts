import LootTable from '../structures/LootTable';
import SimpleMinigame from '../structures/SimpleMinigame';

const BarbarianAssaultLowTable = new LootTable()
	.addItem('Harralander', [15, 25], 1)
	.addItem('Toadflax', [15, 25], 1)
	.addItem('Irit leaf', [15, 25], 1)
	.addItem('Harralander seed', [5, 7], 1)
	.addItem('Toadflax seed', [5, 7], 1)
	.addItem('Irit seed', [5, 7], 1)
	.addItem('Strawberry seed', 20, 1)
	.addItem('Pineapple seed', [1, 2], 1)
	.addItem('Maple seed', [1, 2], 1)
	.addItem('Rune axe', 1, 1)
	.addItem('Rune med helm', 1, 1)
	.addItem('Rune dagger(p++)', 1, 1)
	.addItem('Lava battlestaff', 1, 1)
	.addItem('Adamant sq shield', 1, 1)
	.addItem('Iron ore', 200, 1)
	.addItem('Feather', [500, 750], 1)
	.addItem('Coal', 150, 1)
	.addItem('Mithril ore', 20, 1)
	.addItem('Mithril bar', 15, 1)
	.addItem('Flax', [50, 75], 1)
	.addItem('Blue dragonhide', [10, 20], 1)
	.addItem('Uncut emerald', [25, 30], 1)
	.addItem('Maple logs', [150, 200], 1)
	.addItem('Oak plank', [60, 80], 1)
	.addItem('Mithril arrow', [300, 400], 1)
	.addItem('Raw lobster', [125, 150], 1)
	.addItem('Tuna', [90, 110], 1)
	.addItem('Cosmic rune', [150, 200], 1)
	.addItem('Chaos rune', [150, 200], 1)
	.addItem('Limpwurt root', [10, 15], 1)
	.addItem('Unicorn horn', [10, 15], 1)
	.addItem('Coins', [15000, 20000], 1);

export default new SimpleMinigame({
	name: 'Barbarian Assault Low Gamble',
	table: BarbarianAssaultLowTable,
	aliases: [
		'barb low gamble',
		'low gamble',
		'barb low',
		'barbarian assault low',
		'barbarian assault low gamble'
	]
});
