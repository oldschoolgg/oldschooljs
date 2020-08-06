import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { BloodveldPreTable } from '../vannakaMonsters/Bloodveld';

const InsatiableBloodveldTable = new LootTable()
	.every('Bones')
	.every('Ensouled bloodveld head')
	.every(BloodveldPreTable, 3)
	.tertiary(26, 'Clue scroll (hard)')

	/* Superior Slayer tertiary */
	.oneIn(256, 'Mist battlestaff')
	.oneIn(255, 'Dust battlestaff')
	.oneIn(894, 'Eternal gem')
	.oneIn(895, 'Imbued heart');

export default new SimpleMonster({
	id: 7397,
	name: 'Insatiable Bloodveld',
	table: InsatiableBloodveldTable,
	aliases: ['insatiable bloodveld']
});
