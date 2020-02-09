import Minigame from './Minigame';
import { MinigameOptions, ItemBank } from '../meta/types';
import LootTable from './LootTable';
import Loot from './Loot';

interface SimpleMinigameOptions extends MinigameOptions {
	table: LootTable;
}

export default class SimpleMinigame extends Minigame {
	public table: LootTable;

	constructor(options: SimpleMinigameOptions) {
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
