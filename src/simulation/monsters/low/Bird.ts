import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

const BirdTable = new LootTable().every('Bones');

export default new SimpleMonster({
	id: 5240,
	name: 'Bird',
	table: BirdTable,
	aliases: ['bird', 'birb']
});
