import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';

export const HellhoundTable = new LootTable()
	.every('Bones')

	/* Other */
	.oneIn(32768, 'Smouldering stone')

	/* Tertiary */
	.tertiary(64, 'Clue scroll (hard)')

	/* Catacombs tertiary */
	.tertiary(256, 'Ancient shard')
	.tertiary(370, 'Dark totem base')
	.tertiary(370, 'Dark totem middle')
	.tertiary(370, 'Dark totem top');

export default new SimpleMonster({
	id: 104,
	name: 'Hellhound',
	table: HellhoundTable,
	aliases: ['hellhound', 'hellh']
});
