import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';

export const RatTable = new LootTable().every('Bones');
export default new SimpleMonster({
	id: 1020,
	name: 'Rat',
	table: RatTable,
	aliases: ['rat']
});
