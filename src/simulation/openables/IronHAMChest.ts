import LootTable from '../../structures/LootTable';
import SimpleOpenable from '../../structures/SimpleOpenable';

/* Gem loots */
// TODO: check back for wiki drop table update from another one in the repo
const GemTable = new LootTable({ limit: 100 })
	.add('Uncut sapphire', 1, 25)
	.add('Sapphire', 1, 25)
	.add('Uncut emerald', 1, 10)
	.add('Emerald', 1, 10)
	.add('Uncut ruby', 1, 10)
	.add('Ruby', 1, 10)
	.add('Uncut diamond', 1, 5)
	.add('Diamond', 1, 5);

const IronHAMChestTable = new LootTable()
	.every('Coins', [200, 600])
	.add(GemTable, 1, 1)
	.add(GemTable, 2, 1)
	.add(GemTable, 3, 1)
	.add(GemTable, 4, 1)
	.add(GemTable, 5, 1);

export default new SimpleOpenable({
	id: 8869,
	name: 'Iron HAM chest',
	aliases: ['iron', 'iron ham chest', 'iron chest'],
	table: IronHAMChestTable
});
