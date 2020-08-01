import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

export const RogueTable = new LootTable().every('Bones');

export default new SimpleMonster({
	id: 6603,
	name: 'Rogue',
	table: RogueTable,
	aliases: ['rogue']
});
