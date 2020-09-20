import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import Elf from './Elf';

const PrifddinasElfTable = new LootTable()
	.add('Crystal shard', 1, 1 / 35)
	.add('Enhanced crystal teleport seed', 1, 1 / 1024)
	.add(Elf.table, 1);

export default new SimpleMonster({
	id: 9076,
	name: 'Prifddinas Elf',
	pickpocketTable: PrifddinasElfTable,
	aliases: ['prif elf', 'elf prif', 'prifddinas elf']
});
