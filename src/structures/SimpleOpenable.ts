import { OpenableOpenOptions, ItemBank, OpenableOptions } from '../meta/types';
import LootTable from './LootTable';
import Loot from './Loot';
import Openable from './Openable';

interface SimpleOpenableOptions extends OpenableOptions {
	table: LootTable;
}

export default class SimpleOpenable extends Openable {
	public table: LootTable;

	constructor(options: SimpleOpenableOptions) {
		super(options);
		this.table = options.table;
	}

	public open(quantity = 1, options: OpenableOpenOptions = {}): ItemBank {
		const loot = new Loot();
		options;

		for (let i = 0; i < quantity; i++) {
			loot.add(this.table.roll());
		}

		return loot.values();
	}
}
