import LootTable from '../../../../structures/LootTable';
import SimpleMonster from '../../../../structures/SimpleMonster';

export const ReanimatedScorpionTable = new LootTable();

export default new SimpleMonster({
	id: 7022,
	name: 'Reanimated Scorpion',
	table: ReanimatedScorpionTable,
	aliases: ['reanimated scorpion']
});
