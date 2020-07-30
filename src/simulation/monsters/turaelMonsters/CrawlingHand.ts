import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { GemTable } from '../../subtables/RareDropTable';

export const CrawlingHandTable = new LootTable({ limit: 128 })
	.every('Bones')
	.tertiary(500, 'Crawling hand', 1)

	/* Gloves */
	.add('Leather gloves', 1, 20)
	.add('Purple gloves', 1, 2)
	.add('Yellow gloves', 1, 2)
	.add('Red gloves', 1, 2)
	.add('Teal gloves', 1, 2)

	/* Rings */
	.add('Gold ring', 1, 3)
	.add('Sapphire ring', 1, 2)
	.add('Emerald ring', 1, 2)

	/* Coins */
	.add('Coins', 5, 30)
	.add('Coins', 8, 18)
	.add('Coins', 10, 4)

	/* Subtables */
	.add(GemTable, 4);

export default new SimpleMonster({
	id: 448,
	name: 'Crawling Hand',
	table: CrawlingHandTable,
	aliases: ['crawling hand']
});
