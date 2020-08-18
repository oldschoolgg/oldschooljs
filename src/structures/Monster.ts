import { MonsterOptions, MonsterKillOptions, ItemBank } from '../meta/types';
import { MonsterData } from '../meta/monsterData';
import rawMonsterData from '../data/monsters_data.json';
const monsterData = rawMonsterData as { [key: string]: MonsterData };

export default abstract class Monster {
	public id: number;
	public name: string;
	public aliases: string[];
	public data: MonsterData;
	public abstract kill(quantity: number, options: MonsterKillOptions): ItemBank;
	public allItems: number[];

	constructor(options: MonsterOptions) {
		this.id = options.id;
		this.name = options.name;
		this.aliases = options.aliases ?? [];
		this.data = monsterData[this.id];
		this.allItems = options.allItems;
	}
}
