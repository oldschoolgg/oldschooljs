import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

export const ScorpionTable = new LootTable()
	.oneIn(25, 'Ensouled scorpion head')
	.tertiary(100, 'Clue scroll (beginner)');

export default new SimpleMonster({
	id: 3024,
	name: 'Scorpion',
	table: ScorpionTable,
	aliases: ['scorpion']
});
