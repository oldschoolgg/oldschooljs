import LootTable from '../LootTable';
import Clue from '../Clue';
import {} from './General';
import {EasyStandardTable, EasyRareTable} from './Easy';
import {MediumStandardTable, MediumRareTable} from './Medium';
import {HardStandardTable, HardRareTable} from './Hard';
import {EliteStandardTable, EliteRareTable} from './Elite';
import {MasterStandardTable, MasterRareTable} from './Master';

export const LuckyImplingTable = new LootTable()
	.add(EasyStandardTable, undefined, 11)
	.add(EasyRareTable, undefined, 1)
	.add(MediumStandardTable, undefined, 10)
	.add(MediumRareTable, undefined, 1)
	.add(HardStandardTable, undefined, 12)
	.add(HardRareTable, undefined, 1)
	.add(EliteStandardTable, undefined, 24)
	.add(EliteRareTable, undefined, 1)
	.add(MasterStandardTable, undefined, 22)
	.add(MasterRareTable, undefined, 1);

class LuckyImpling extends Clue {
	public openCasket() {
		const loot = [];
		loot.push(LuckyImplingTable.roll());
		return loot;
	}

	public open(quantity: number = 1) {
		const loot: any[] = [];
		for (let i = 0; i < quantity; i++) {
			loot.push(this.openCasket());
		}
		return loot;
	}
}

export default new LuckyImpling();