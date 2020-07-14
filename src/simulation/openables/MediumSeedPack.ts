import LootTable from '../../structures/LootTable';
import SimpleOpenable from '../../structures/SimpleOpenable';

const MediumSeedPackTable = new LootTable()
	.add('Irit seed', [2, 6], 3)
	.add('Limpwurt seed', [4, 8], 3)
	.add('Watermelon seed', [8, 12], 2)
	.add('Snape grass seed', [6, 8], 2)
	.add('Wildblood seed', [8, 12], 2)
	.add('Whiteberry seed', [6, 8], 2)
	.add('Poison ivy seed', [6, 8], 2)
	.add('Cactus seed', [2, 6], 2)
	.add('Potato cactus seed', [2, 6], 2)
	.add('Willow seed', [2, 4], 1)
	.add('Pineapple seed', [3, 5], 1)
	.add('Toadflax seed', [1, 3], 1)
	.add('Avantoe seed', [1, 3], 1)
	.add('Kwuarm seed', [1, 3], 1)
	.add('Cadantine seed', [1, 3], 1)
	.add('Lantadyme seed', [1, 3], 1)
	.add('Dwarf weed seed', [1, 3], 1)
	.add('Calquat tree seed', [3, 6], 1)
	.add('Teak seed', [1, 3], 1);

export default new SimpleOpenable({
	id: 22993,
	name: 'Medium Seed pack',
	aliases: ['medium seed pack', 'seed pack medium'],
	table: MediumSeedPackTable
});
