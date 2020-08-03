import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

export const ShadeTable = new LootTable({ limit: 4 })
	/* Shade robes */
	.add('Shade robe top', 1, 1)
	.add('Shade robe', 1, 1)

	/* Catacombs tertiary */
	.tertiary(310, 'Ancient shard')
	.tertiary(465, 'Dark totem base')
	.tertiary(465, 'Dark totem middle')
	.tertiary(465, 'Dark totem top');

export default new SimpleMonster({
	id: 5633,
	name: 'Shade',
	table: ShadeTable,
	aliases: ['shade']
});
