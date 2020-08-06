import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { DustDevilPreTable } from '../vannakaMonsters/DustDevil';

const TotemPieceTable = new LootTable()
	.add('Dark totem base')
	.add('Dark totem middle')
	.add('Dark totem top');

const ChokeDevilTable = new LootTable()
	.every('Bones')
	.every(DustDevilPreTable, 3)
	.every(TotemPieceTable)
	.tertiary(133, 'Ancient shard')

	/* Superior Slayer tertiary */
	.tertiary(194, 'Mist battlestaff')
	.tertiary(194, 'Dust battlestaff')
	.tertiary(678, 'Eternal gem')
	.tertiary(679, 'Imbued heart');

export default new SimpleMonster({
	id: 7404,
	name: 'Choke devil',
	table: ChokeDevilTable,
	aliases: ['choke devil']
});
