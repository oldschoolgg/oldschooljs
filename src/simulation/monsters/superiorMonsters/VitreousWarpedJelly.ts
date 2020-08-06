import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { WarpedJellyPreTable } from '../vannakaMonsters/WarpedJelly';

const TotemPieceTable = new LootTable()
	.add('Dark totem base')
	.add('Dark totem middle')
	.add('Dark totem top');

const VitreousWarpedJellyTable = new LootTable()
	.every(WarpedJellyPreTable, 3)
	.tertiary(7, 'Clue scroll (hard)')
	.every(TotemPieceTable)
	.tertiary(186, 'Ancient shard')

	/* Superior Slayer tertiary */
	.tertiary(248, 'Mist battlestaff')
	.tertiary(248, 'Dust battlestaff')
	.tertiary(867, 'Eternal gem')
	.tertiary(867, 'Imbued heart');

export default new SimpleMonster({
	id: 7400,
	name: 'Vitreous warped Jelly',
	table: VitreousWarpedJellyTable,
	aliases: ['vitreous warped jelly']
});
