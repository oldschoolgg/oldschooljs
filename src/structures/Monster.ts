import { MonsterOptions } from '../meta/types';

export default abstract class Monster {
	public id: number;
	public name: string;
	public combatLevel?: number;
	public hitpoints?: number;

	constructor(options: MonsterOptions) {
		this.id = options.id;
		this.name = options.name;
		this.combatLevel = options.combatLevel;
		this.hitpoints = options.hitpoints;
	}
}
