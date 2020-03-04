import LootTable from '../../structures/LootTable';
import { EasyClueTable } from '../clues/Easy';
import { MediumClueTable } from '../clues/Medium';
import { HardClueTable } from '../clues/Hard';
import { EliteClueTable } from '../clues/Elite';
import { MasterClueTable } from '../clues/Master';
import SimpleOpenable from '../../structures/SimpleOpenable';

const LuckyImplingTable = new LootTable()
	.add(EasyClueTable)
	.add(MediumClueTable)
	.add(HardClueTable)
	.add(EliteClueTable)
	.add(MasterClueTable);

export default new SimpleOpenable({
	id: 19732,
	name: 'Lucky Impling',
	aliases: ['lucky imp', 'lucky impling'],
	table: LuckyImplingTable
});
