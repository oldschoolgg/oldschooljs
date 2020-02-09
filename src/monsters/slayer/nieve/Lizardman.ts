import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import CommonSeedDropTable from '../../subtables/CommonSeedDropTable';

export const LizardmanTable = new LootTable(78)
	.every('Bones')

	/* Seeds */
	.add(CommonSeedDropTable, 1, 15)

	/* Other */
	.addItem('Lizardman fang', 1, 14)
	.addItem('Xerician fabric', 1, 8)
	.oneIn(125, "Xeric's talisman(inert)");

export default new SimpleMonster({
	id: 6914,
	name: 'Lizardman',
	table: LizardmanTable,
	aliases: ['lizardman']
});
