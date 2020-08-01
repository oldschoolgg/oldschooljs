import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

const GiantScarabTable = new LootTable().every('Keris');

export default new SimpleMonster({
	id: 797,
	name: 'Giant scarab',
	table: GiantScarabTable,
	aliases: ['giant scarab']
});
