import LootTable from '../../../../structures/LootTable';
import SimpleMonster from '../../../../structures/SimpleMonster';

const ReanimatedTrollTable = new LootTable();

export default new SimpleMonster({
	id: 7030,
	name: 'Reanimated Troll',
	table: ReanimatedTrollTable,
	aliases: ['reanimated troll']
});
