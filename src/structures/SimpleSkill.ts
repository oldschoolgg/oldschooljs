import { ItemBank, SkillOptions } from '../meta/types';
import LootTable from './LootTable';
import Loot from './Loot';
import Skill from './Skill';

interface SimpleSkillOptions extends SkillOptions {
	table: LootTable;
}

export default class SimpleSkill extends Skill {
	public table: LootTable;

	constructor(options: SimpleSkillOptions) {
		super({ ...options, allItems: options.table.allItems });
		this.table = options.table;
	}

	public generateLoot(quantity = 1): ItemBank {
		const loot = new Loot();
		for (let i = 0; i < quantity; i++) {
			loot.add(this.table.roll());
		}
		return loot.values();
	}
}
