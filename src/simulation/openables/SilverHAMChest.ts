import LootTable from '../../structures/LootTable';
import SimpleOpenable from '../../structures/SimpleOpenable';
import { rand } from '../../util';

const rolls = rand(1, 5);

/* Gem loots */
//TODO
const GemTable = new LootTable({ limit: 100 })
	.add('Uncut sapphire', 1, 15)
	.add('Sapphire', 1, 15)
	.add('Uncut emerald', 1, 15)
	.add('Emerald', 1, 15)
	.add('Uncut ruby', 1, 10)
	.add('Ruby', 1, 10)
	.add('Uncut diamond', 1, 10)
	.add('Diamond', 1, 10);

const SilverHAMChestTable = new LootTable().every('Coins', [500, 1000]).every(GemTable, rolls);

export default new SimpleOpenable({
	id: 8868,
	name: 'Silver HAM chest',
	aliases: ['silver', 'silver ham chest', 'silver chest'],
	table: SilverHAMChestTable
});
