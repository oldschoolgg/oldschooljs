import LootTable from './LootTable';
import { ClueOptions } from '../meta/types';

export default class Clue {
	public table: LootTable;
	public allItems: number[];

	constructor(options: ClueOptions) {
		this.table = options.table;
		this.allItems = options.table.allItems;
	}
}
