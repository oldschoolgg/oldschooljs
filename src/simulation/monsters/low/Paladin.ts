import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

const PaladinTable = new LootTable().add([
	['Coins', 80],
	['Chaos rune', 2]
]);

export default new SimpleMonster({
	id: 1144,
	name: 'Paladin',
	pickpocketTable: PaladinTable,
	aliases: ['paladin']
});
