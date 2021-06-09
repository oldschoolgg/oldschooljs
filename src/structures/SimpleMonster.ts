import { roll } from 'e';

import { MonsterSlayerMaster } from '../meta/monsterData';
import { MonsterKillOptions, MonsterOptions } from '../meta/types';
import {
	getAncientShardChanceFromHP,
	getBrimKeyChanceFromCBLevel,
	getTotemChanceFromHP
} from '../util/util';
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

	public kill(quantity = 1, options: MonsterKillOptions = {}): Bank {
		const loot = new Bank();
		const canGetKey =
			options.onSlayerTask && options.slayerMaster === MonsterSlayerMaster.Konar;


		for (let i = 0; i < quantity; i++) {
			if (canGetKey) {
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
				if (roll(getTotemChanceFromHP(this.data.hitpoints))) {
					// Always drop Dark totem base and bot will transmog accordingly.
					loot.add('Dark totem base');
				}
			}
			if (options.onSlayerTask) {
				if (options.hasSuperiors && roll(200)) {
					// track number of superiors with this item.
					if (options.inCatacombs) loot.add('Dark totem base');
					loot.add({ [420] : 1 });
					loot.add(options.hasSuperiors.table.roll());
				} else if (this.onTaskTable) {
					loot.add(this.onTaskTable.roll());
				} else {
					loot.add(this.table.roll());
				}
			} else {
				loot.add(this.table.roll());
			}
		}

		return loot;
	}
}
