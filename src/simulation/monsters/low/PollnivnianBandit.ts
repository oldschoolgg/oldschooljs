import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

export default new SimpleMonster({
	id: 736,
	name: 'Bandit',
	pickpocketTable: new LootTable().add('Coins', 50),
	aliases: ['pollnivnian bandit', 'bandit']
});
