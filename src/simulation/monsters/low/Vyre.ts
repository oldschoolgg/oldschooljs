import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

const VyreTable = new LootTable()
	.add('Coins', [250, 315], 1 / 1.211)
	.add('Death rune', 2, 1 / 16.5)
	.add('Blood pint', 1, 1 / 22)
	.add('Uncut ruby', 1, 1 / 26.4)
	.add('Blood rune', 4, 1 / 66)
	.add('Diamond', 1, 1 / 132)
	.add('Cooked mystery meat', 1 / 132)
	.add('Blood shard', 1, 1 / 6000);

export default new SimpleMonster({
	id: 9710,
	name: 'Vyre',
	pickpocketTable: VyreTable,
	aliases: ['vyre']
});
