import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

const ScarabSwarmTable = new LootTable();

export default new SimpleMonster({
	id: 1782,
	name: 'Scarab swarm',
	table: ScarabSwarmTable,
	aliases: ['scarab swarm']
});
