import LootTable from '../../structures/LootTable';
import SimpleOpenable from '../../structures/SimpleOpenable';

// itemID 5075 = Bird nest empty
const NestBoxEmptyTable = new LootTable().every(5075);

export default new SimpleOpenable({
	id: 12792,
	name: 'Nest box (empty)',
	aliases: ['nest box (empty)', 'empty nest box', 'nest box empty'],
	table: NestBoxEmptyTable
});
