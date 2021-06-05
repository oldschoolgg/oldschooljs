import { roll } from 'e';

import { MonsterSlayerMaster, SlayerDropsOverride } from '../meta/monsterData';
import {ItemBank, MonsterKillOptions, MonsterOptions, OnTaskKillOverride} from '../meta/types';
import {getAncientShardChanceFromHP, getBrimKeyChanceFromCBLevel, getTotalChanceFromHP} from '../util/util';
import Bank from './Bank';
import LootTable from './LootTable';
import Monster from './Monster';

interface SimpleMonsterOptions extends MonsterOptions {
	table?: LootTable;
	onTaskTable?: LootTable;
	pickpocketTable?: LootTable;
}

export default class SimpleMonster extends Monster {
	public table?: LootTable;
	public onTaskTable?: LootTable;
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
		this.onTaskTable = options.onTaskTable;
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
			if (options.onSlayerTask && this.name.toLowerCase() === 'gargoyle' && roll(150)) {
				loot.add('Brittle key');
			}
			if (options.inCatacombs) {
				if (roll(getAncientShardChanceFromHP(this.data.hitpoints))) {
					loot.add('Ancient shard');
				}
				if (roll(getTotalChanceFromHP(this.data.hitpoints))) {
					// Always drop Dark totem base and bot will transmog accordingly.
					loot.add('Dark totem base');
				}
			}
			if (options.onSlayerTask && this.onTaskTable) {
				loot.add(this.onTaskTable.roll());
			} else {
				loot.add(this.table.roll());
			}
		}



		return loot.values();
	}
}
