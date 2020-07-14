import LootTable from '../../structures/LootTable';
import SimpleOpenable from '../../structures/SimpleOpenable';

const LowSeedPackTable = new LootTable()
	.add('Potato seed', [8, 12], 2)
	.add('Onion seed', [8, 12], 2)
	.add('Cabbage seed', [8, 12], 2)
	.add('Tomato seed', [8, 12], 2)
	.add('Sweetcorn seed', [8, 12], 2)
	.add('Strawberry seed', [8, 12], 2)
	.add('Barley seed', [8, 14], 2)
	.add('Hammerstone seed', [6, 8], 2)
	.add('Asgarnian seed', [6, 8], 2)
	.add('Jute seed', [8, 12], 2)
	.add('Yanillian seed', [6, 8], 2)
	.add('Krandorian seed', [6, 8], 2)
	.add('Acorn', [3, 5], 2)
	.add('Apple tree seed', [3, 5], 2)
	.add('Banana tree seed', [3, 5], 2)
	.add('Orange tree seed', [3, 5], 2)
	.add('Curry tree seed', [3, 5], 2)
	.add('Redberry seed', [6, 8], 2)
	.add('Cadavaberry seed', [6, 8], 2)
	.add('Dwellberry seed', [6, 8], 2)
	.add('Jangerberry seed', [6, 8], 2)
	.add('Marigold seed', [8, 12], 2)
	.add('Rosemary seed', [8, 12], 2)
	.add('Nasturtium seed', [8, 12], 2)
	.add('Woad seed', [8, 12], 2)
	.add('Guam seed', [3, 5], 2)
	.add('Marrentill seed', [3, 5], 2)
	.add('Tarromin seed', [3, 5], 2)
	.add('Harralander seed', [3, 5], 2)
	.add('Mushroom spore', [4, 6], 1)
	.add('Belladonna seed', [4, 6], 1);

export default new SimpleOpenable({
	id: 22993,
	name: 'Low Seed pack',
	aliases: ['low seed pack', 'seed pack low'],
	table: LowSeedPackTable
});
