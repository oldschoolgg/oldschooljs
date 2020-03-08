import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

export const DogTable = new LootTable().every('Bat bones').tertiary(25, 'Ensouled dog head', 1);

export default new SimpleMonster({
	id: 114,
	name: 'Guard dog',
	table: DogTable,
	aliases: ['dog']
});
