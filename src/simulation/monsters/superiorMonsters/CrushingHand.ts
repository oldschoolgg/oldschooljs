import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { CrawlingHandPreTable } from '../turaelMonsters/CrawlingHand';

const CrushingHandTable = new LootTable()
	.every('Bones')
	.tertiary(500, 'Crawling hand', 1)
	.every(CrawlingHandPreTable, 3)

	/* Superior Slayer tertiary */
	.oneIn(391, 'Mist battlestaff')
	.oneIn(391, 'Dust battlestaff')
	.oneIn(1370, 'Eternal gem')
	.oneIn(1370, 'Imbued heart');

export default new SimpleMonster({
	id: 7388,
	name: 'Crushing hand',
	table: CrushingHandTable,
	aliases: ['crushing hand']
});
