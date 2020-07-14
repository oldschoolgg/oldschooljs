import LootTable from '../../structures/LootTable';
import SimpleOpenable from '../../structures/SimpleOpenable';

const HighSeedPackTable = new LootTable()
	.add('Papaya tree seed', [1, 3], 5)
	.add('Palm tree seed', [1, 2], 5)
	.add('Hespori seed', 1, 5)
	.add('Ranarr seed', [1, 2], 4)
	.add('Snapdragon seed', 1, 4)
	.add('Maple seed', [1, 2], 4)
	.add('Mahogany seed', [1, 2], 4)
	.add('Yew seed', 1, 3)
	.add('Dragonfruit tree seed', 1, 3)
	.add('Celastrus seed', 1, 2)
	.add('Torstol seed', 1, 2)
	.add('Magic seed', 1, 1)
	.add('Spirit seed', 1, 1)
	.add('Redwood tree seed', 1, 1);

export default new SimpleOpenable({
	id: 22993,
	name: 'High Seed pack',
	aliases: ['high seed pack', 'seed pack high'],
	table: HighSeedPackTable
});
