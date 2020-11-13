import LootTable from '../../structures/LootTable';
import SimpleOpenable from '../../structures/SimpleOpenable';
import { EasyClueTable } from '../clues/Easy';
import { EliteClueTable } from '../clues/Elite';
import { HardClueTable } from '../clues/Hard';
import { MasterClueTable } from '../clues/Master';
import { MediumClueTable } from '../clues/Medium';

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
