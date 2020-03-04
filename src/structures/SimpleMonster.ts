import Monster from './Monster';
import { MonsterOptions, ItemBank, MonsterKillOptions } from '../meta/types';
import LootTable from './LootTable';
import Loot from './Loot';
import { MonsterSlayerMaster } from '../meta/monsterData';
import { roll, getBrimKeyChanceFromCBLevel } from '../util/util';

interface SimpleMonsterOptions extends MonsterOptions {
	table: LootTable;
}

export default class SimpleMonster extends Monster {
	public table: LootTable;

	constructor(options: SimpleMonsterOptions) {
		super(options);
		this.table = options.table;
	}

	public kill(quantity = 1, options?: MonsterKillOptions): ItemBank {
		const loot = new Loot();

		for (let i = 0; i < quantity; i++) {
			// If on-task, and slayer master is konar, roll a brimstone key.
			if (options.onSlayerTask && options.slayerMaster === MonsterSlayerMaster.Konar) {
				if (roll(getBrimKeyChanceFromCBLevel(this.data.combatLevel))) {
					loot.add('Brimstone key');
				}
			}

			loot.add(this.table.roll());
		}

		return loot.values();
	}
}
