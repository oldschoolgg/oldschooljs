import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { TwistedBansheePreTable } from '../turaelMonsters/TwistedBanshee';

const TotemPiece = new LootTable()
	.add('Dark totem base')
	.add('Dark totem middle')
	.add('Dark totem top');

const ScreamingTwistedBansheeTable = new LootTable()
	.every(TwistedBansheePreTable, 3)
	.tertiary(13, 'Clue scroll (hard)')

	/*Catacombs teriary */
	.every(TotemPiece)
	.tertiary(186, 'Ancient shard')

	/* Superior Slayer tertiary */
	.tertiary(367, 'Mist battlestaff')
	.tertiary(368, 'Dust battlestaff')
	.tertiary(1286, 'Eternal gem')
	.tertiary(1286, 'Imbued heart');

export default new SimpleMonster({
	id: 7391,
	name: 'Screaming twisted banshee',
	table: ScreamingTwistedBansheeTable,
	aliases: ['screaming twisted banshee']
});
