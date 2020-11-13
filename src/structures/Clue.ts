import { ClueOptions } from '../meta/types';
import LootTable from './LootTable';

export default class Clue {
	public table: LootTable;
	public allItems: number[];

	constructor(options: ClueOptions) {
		this.table = options.table;
		this.allItems = options.table.allItems;
	}
}
