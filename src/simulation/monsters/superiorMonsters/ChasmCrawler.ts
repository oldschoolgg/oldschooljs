import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { CaveCrawlerTable } from '../turaelMonsters/CaveCrawler';

const ChasmCrawlerTable = new LootTable()
	.every(CaveCrawlerTable, 3)

	/* Superior Slayer tertiary */
	.oneIn(380, 'Mist battlestaff')
	.oneIn(380, 'Dust battlestaff')
	.oneIn(1330, 'Eternal gem')
	.oneIn(1330, 'Imbued heart');

export default new SimpleMonster({
	id: 7389,
	name: 'Chasm Crawler',
	table: ChasmCrawlerTable,
	aliases: ['chasm crawler']
});
