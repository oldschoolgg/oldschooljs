import { roll } from 'e';

import { MonsterSlayerMaster } from '../meta/monsterData';
import { ItemBank, MonsterKillOptions, MonsterOptions } from '../meta/types';
import { getBrimKeyChanceFromCBLevel } from '../util/util';
import Bank from './Bank';
import LootTable from './LootTable';
import Monster from './Monster';

interface SimpleMonsterOptions extends MonsterOptions {
	table?: LootTable;
	pickpocketTable?: LootTable;
}

export default class SimpleMonster extends Monster {
	public table?: LootTable;
	public pickpocketTable?: LootTable;

	constructor(options: SimpleMonsterOptions) {
		let allItems: number[] = [];
		if (options.table) {
			allItems = allItems.concat(options.table.allItems);
		}
		if (options.pickpocketTable) {
			allItems = allItems.concat(options.pickpocketTable.allItems);
		}
		super({ ...options, allItems: allItems });
		this.table = options.table;
		this.pickpocketTable = options.pickpocketTable;
	}

	public kill(quantity = 1, options: MonsterKillOptions = {}): ItemBank {
		const loot = new Bank();

		// TODO: For monsters with different drop rates on/off task
		// Just nuke any uniques they got at the rare rate, and roll the better rate.

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
