import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { MutatedBloodveldPreTable } from '../vannakaMonsters/MutatedBloodveld';

const TotemPiece = new LootTable()
	.add('Dark totem base')
	.add('Dark totem middle')
	.add('Dark totem top');

const InsatiableMutatedBloodveldTable = new LootTable()
	.every('Bones')
	.every('Ensouled bloodveld head')
	.every(MutatedBloodveldPreTable, 3)
	.tertiary(13, 'Clue scroll (hard)')
	.every(TotemPiece)
	.oneIn(66, 'Ancient shard')

	/* Superior Slayer tertiary */
	.oneIn(255, 'Mist battlestaff')
	.oneIn(256, 'Dust battlestaff')
	.oneIn(895, 'Eternal gem')
	.oneIn(894, 'Imbued heart');

export default new SimpleMonster({
	id: 7398,
	name: 'Insatiable mutated Bloodveld',
	table: InsatiableMutatedBloodveldTable,
	aliases: ['insatiable mutated bloodveld']
});
