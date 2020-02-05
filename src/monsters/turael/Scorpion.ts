import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';

export const ScorpionTable = new LootTable(25)
	.addItem('Ensouled scorpion head', 1, 1)
	.tertiary(100, 'Clue scroll (beginner)', 1);
export default new SimpleMonster({
	id: 2479,
	name: 'Scorpion',
	table: ScorpionTable,
	aliases: ['scorpion']
});
