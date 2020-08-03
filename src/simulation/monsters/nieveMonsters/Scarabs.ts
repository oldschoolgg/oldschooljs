import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

const ScarabsTable = new LootTable();

export default new SimpleMonster({
	id: 729,
	name: 'Scarabs',
	table: ScarabsTable,
	aliases: ['scarabs']
});
