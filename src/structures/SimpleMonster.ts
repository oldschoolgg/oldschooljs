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
	rockyChance?: number;
}

export default class SimpleMonster extends Monster {
	public table?: LootTable;
	public pickpocketTable?: LootTable;
	public rockyChance?: number;

	constructor(options: SimpleMonsterOptions) {
		super({ ...options, allItems: options.table.allItems });
		this.table = options.table;
		this.pickpocketTable = options.pickpocketTable;
		this.rockyChance = options.rockyChance;
	}

	public kill(quantity = 1, options: MonsterKillOptions = {}): ItemBank {
		const loot = new Bank();

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
