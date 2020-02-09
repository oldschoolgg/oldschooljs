import { MinigameOptions } from '../meta/types';

export default abstract class Minigame {
	public name: string;
	public aliases: string[];

	constructor(options: MinigameOptions) {
		this.name = options.name;
		this.aliases = options.aliases ?? [];
	}
}
