import { roll } from 'e';

import { MonsterSlayerMaster } from '../meta/monsterData';
import { MonsterKillOptions, MonsterOptions } from '../meta/types';
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

	public kill(quantity = 1, options: MonsterKillOptions = {}): Bank {
		const loot = this.table.roll(quantity);

		const canGetKey =
			options.onSlayerTask && options.slayerMaster === MonsterSlayerMaster.Konar;

		if (canGetKey) {
			for (let i = 0; i < quantity; i++) {
				if (canGetKey && roll(getBrimKeyChanceFromCBLevel(this.data.combatLevel))) {
					loot.add('Brimstone key');
				}
			}
		}

		return loot;
	}
}
