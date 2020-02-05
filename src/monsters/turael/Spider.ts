import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';

export const SpiderTable = new LootTable().tertiary(128, 'Clue scroll beginner', 1);
export default new SimpleMonster({
	id: 2478,
	name: 'Spider',
	table: SpiderTable,
	aliases: ['spider']
});
