import Monster from './Monster';
import { MonsterOptions, ItemBank } from '../meta/types';
import LootTable from './LootTable';
import Loot from './Loot';

interface SimpleMonsterOptions extends MonsterOptions {
	table: LootTable;
}

export default class SimpleMonster extends Monster {
	public table: LootTable;

	constructor(options: SimpleMonsterOptions) {
		super(options);
		this.table = options.table;
	}

	public kill(quantity = 1): ItemBank {
		const loot = new Loot();

		for (let i = 0; i < quantity; i++) {
			const result = this.table.roll();
			loot.add(result);
		}

		return loot.values();
	}
}
