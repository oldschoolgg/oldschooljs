import LootTable from '../../../../structures/LootTable';
import SimpleMonster from '../../../../structures/SimpleMonster';

export const ReanimatedDogTable = new LootTable();

export default new SimpleMonster({
	id: 7025,
	name: 'Reanimated dog',
	table: ReanimatedDogTable,
	aliases: ['reanimated dog']
});
