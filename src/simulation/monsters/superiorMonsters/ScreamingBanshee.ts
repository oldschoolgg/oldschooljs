import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { BansheePreTable } from '../turaelMonsters/Banshee';

const ScreamingBansheeTable = new LootTable()
	.every(BansheePreTable, 3)
	.tertiary(13, 'Clue scroll (easy)')

	/* Superior Slayer tertiary */
	.oneIn(368, 'Mist battlestaff')
	.oneIn(367, 'Dust battlestaff')
	.oneIn(1286, 'Eternal gem')
	.oneIn(1286, 'Imbued heart');

export default new SimpleMonster({
	id: 7390,
	name: 'Screaming banshee',
	table: ScreamingBansheeTable,
	aliases: ['screaming banshee']
});
