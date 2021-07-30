import LootTable from '../../../../structures/LootTable';
import SimpleMonster from '../../../../structures/SimpleMonster';

const ReanimatedElfTable = new LootTable();

export default new SimpleMonster({
	id: 7029,
	name: 'Reanimated Elf',
	table: ReanimatedElfTable,
	aliases: ['reanimated elf']
});
