import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import { GemTable } from '../subtables/RareDropTable';

export const CrawlingHandTable = new LootTable(128)
	.every('Bones')

	/* Gloves */
	.addItem('Leather gloves', 1, 20)
	.addItem('Purple gloves', 1, 2)
	.addItem('Yellow gloves', 1, 2)
	.addItem('Red gloves', 1, 2)
	.addItem('Teal gloves', 1, 2)

	/* Rings */
	.addItem('Gold ring', 1, 3)
	.addItem('Sapphire ring', 1, 2)
	.addItem('Emerald ring', 1, 2)

	/* Coins */
	.addItem('Coins', 5, 10)
	.addItem('Coins', 8, 8)
	.addItem('Coins', 10, 8)

	/* Subtables */

	.add(GemTable, 4)

	/* Tertiary */
	.tertiary(500, 'Crawling hand', 1);

export default new SimpleMonster({
	id: 448,
	name: 'Crawling Hand',
	table: CrawlingHandTable,
	aliases: ['crawling hand']
});
