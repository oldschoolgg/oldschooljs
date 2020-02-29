import Monster from './Monster';
import { MonsterOptions, ItemBank, MonsterKillOptions } from '../meta/types';
import LootTable from './LootTable';
import Loot from './Loot';
import { MonsterSlayerMaster } from '../meta/monsterData';
import { roll } from '../util/util';

interface SimpleMonsterOptions extends MonsterOptions {
	table: LootTable;
}

export default class SimpleMonster extends Monster {
	public table: LootTable;

	constructor(options: SimpleMonsterOptions) {
		super(options);
		this.table = options.table;
	}

	public kill(quantity = 1, options: MonsterKillOptions): ItemBank {
		const loot = new Loot();

		for (let i = 0; i < quantity; i++) {
			// If on-task, and slayer master is konar, roll a brimstone key.
			if (options.onSlayerTask && options.slayerMaster === MonsterSlayerMaster.Konar) {
				// https://twitter.com/JagexKieren/status/1083781544135847936
				// 0.2 * (CBLEVEL - 100)^2 + 100
				// this is WRONG - pls fix
				if (roll(0.2 * (this.data.combatLevel - 100) ** 2 + 100)) {
					loot.add('Brimstone key');
				}
			}

			loot.add(this.table.roll());
		}

		return loot.values();
	}
}
