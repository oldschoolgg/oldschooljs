import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

const YanilleWatchmanTable = new LootTable().add([
	['Bread', 1],
	['Coins', 60]
]);

export default new SimpleMonster({
	id: 5420,
	name: 'Yanille Watchman',
	pickpocketTable: YanilleWatchmanTable,
	aliases: ['yanille', 'watchman', 'yanille watchman']
});
