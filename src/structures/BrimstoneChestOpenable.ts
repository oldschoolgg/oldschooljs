import { ItemBank, OpenableOptions } from '../meta/types';
import LootTable from './LootTable';
import Loot from './Loot';
import SimpleOpenable from '../structures/SimpleOpenable';

interface BrimstoneChestOptions extends OpenableOptions {
	table: LootTable;
}

export default class BrimstoneChestOpenable extends SimpleOpenable {
	public table: LootTable;

	constructor(options: BrimstoneChestOptions) {
		super(options);
		this.table = options.table;
	}

	public open(fishlvl: number = 1, quantity = 1): ItemBank {
		var tempTable = new LootTable();
		tempTable = this.table;
		const loot = new Loot();

		switch (true) {
			case fishlvl < 40: {
				tempTable.add('Raw tuna', [100, 350], 3);
				break;
			}
			case fishlvl < 50: {
				tempTable.add('Raw lobster', [100, 350], 3);
				break;
			}
			case fishlvl < 62: {
				tempTable.add('Raw swordfish', [100, 300], 3);
				break;
			}
			case fishlvl < 76: {
				tempTable.add('Raw monkfish', [100, 300], 3);
				break;
			}
			case fishlvl < 79: {
				tempTable.add('Raw shark', [100, 250], 3);
				break;
			}
			case fishlvl < 81: {
				tempTable.add('Raw sea turtle', [80, 200], 3);
				break;
			}
			case fishlvl >= 81: {
				tempTable.add('Raw manta ray', [80, 160], 3);
				break;
			}
		}

		for (let i = 0; i < quantity; i++) {
			loot.add(tempTable.roll());
		}
		tempTable = new LootTable();
		return loot.values();
	}
}
