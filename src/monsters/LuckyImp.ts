import LootTable from '../structures/LootTable';
import { EasyClueTable } from '../structures/clues/Easy';
import { MediumClueTable } from '../structures/clues/Medium';
import { HardClueTable } from '../structures/clues/Hard';
import { EliteClueTable } from '../structures/clues/Elite';
import { MasterClueTable } from '../structures/clues/Master';

// TODO
// this can only return 1 item, but with super sets it should be able to return multiple.
// super sets also have to be coded

const LuckyImplingTable = new LootTable()
	.add(EasyClueTable)
	.add(MediumClueTable)
	.add(HardClueTable)
	.add(EliteClueTable)
	.add(MasterClueTable);

export default LuckyImplingTable;
