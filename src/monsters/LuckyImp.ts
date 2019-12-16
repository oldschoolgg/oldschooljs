import LootTable from '../structures/LootTable';
import { EasyClueTable } from '../structures/clues/Easy';
import { MediumClueTable } from '../structures/clues/Medium';
import { HardClueTable } from '../structures/clues/Hard';
import { EliteClueTable } from '../structures/clues/Elite';
import { MasterClueTable } from '../structures/clues/Master';

const LuckyImplingTable = new LootTable()
	.add(EasyClueTable)
	.add(MediumClueTable)
	.add(HardClueTable)
	.add(EliteClueTable)
	.add(MasterClueTable);

export default LuckyImplingTable;
