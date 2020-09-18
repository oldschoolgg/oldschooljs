import { ItemBank, SkillOptions } from '../meta/types';
import { SkillsEnum } from '../constants';

export default abstract class Skill {
	public skill: SkillsEnum;
	public name: string;
	public aliases: string[];
	public allItems: number[];

	constructor(options: SkillOptions) {
		this.skill = options.skill;
		this.name = options.name;
		this.aliases = options.aliases ?? [];
		this.allItems = options.allItems;
	}

	public abstract generateLoot(quantity: number, options: SkillOptions): ItemBank;
}
