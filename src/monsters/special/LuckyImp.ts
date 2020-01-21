import LootTable from '../../structures/LootTable';
import Loot from '../../structures/Loot';
import { EasyClueTable } from '../../clues/Easy';
import { MediumClueTable } from '../../clues/Medium';
import { HardClueTable } from '../../clues/Hard';
import { EliteClueTable } from '../../clues/Elite';
import { MasterClueTable } from '../../clues/Master';
import { ItemBank } from '../../meta/types';
import Monster from '../../structures/Monster';

const LuckyImplingTable = new LootTable()
	.add(EasyClueTable)
	.add(MediumClueTable)
	.add(HardClueTable)
	.add(EliteClueTable)
	.add(MasterClueTable);

export class LuckyImpling extends Monster {
	public kill(quantity = 1): ItemBank {
		const loot = new Loot();

		for (let i = 0; i < quantity; i++) {
			loot.add(LuckyImplingTable.roll());
		}

		return loot.values();
	}
}

export default new LuckyImpling({ id: 7233, name: 'Lucky Impling' });
