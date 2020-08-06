import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { DeviantSpectrePreTable } from '../vannakaMonsters/DeviantSpectre';

const TotemPieceTable = new LootTable()
	.add('Dark totem base')
	.add('Dark totem middle')
	.add('Dark totem top');

const RepugnantSpectreTable = new LootTable()
	.every(DeviantSpectrePreTable, 3)
	.tertiary(13, 'Clue scroll (hard)')
	.tertiary(512, 'Mystic robe bottom (dark)')
	.every(TotemPieceTable)
	.tertiary(73, 'Ancient shard')

	/* Superior Slayer tertiary */
	.tertiary(215, 'Mist battlestaff')
	.tertiary(215, 'Dust battlestaff')
	.tertiary(754, 'Eternal gem')
	.tertiary(754, 'Imbued heart');

export default new SimpleMonster({
	id: 7403,
	name: 'Repugnant spectre',
	table: RepugnantSpectreTable,
	aliases: ['repugnant spectre']
});
