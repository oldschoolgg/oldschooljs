import LootTable from '../../structures/LootTable';
import SimpleOpenable from '../../structures/SimpleOpenable';

const OreTable = new LootTable()
	.add('Coal', 1, 181)
	.add('Iron ore', 1, 25)
	.add('Mithril ore', 1, 17)
	.add('Adamantite ore', 1, 3)
	.add('Runite ore', 1, 1);

const OrePackTable = new LootTable()
	.every(OreTable, 30);

export default new SimpleOpenable({
	id: 27019,
	name: 'Ore pack',
	aliases: ['ore pack'],
	table: OrePackTable
});
