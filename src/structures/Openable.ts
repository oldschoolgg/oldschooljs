import { ItemBank, OpenableOpenOptions, OpenableOptions } from '../meta/types';

/**
 * An entity from OSRS which can be opened (e.g. implings)
 */
export default abstract class Openable {
	/**
	 *  The item ID of the item which is opened.
	 */
	public id: number;
	public name: string;
	public aliases: string[];
	public abstract open(quantity: number, options: OpenableOpenOptions): ItemBank;
	public allItems: number[];

	constructor(options: OpenableOptions) {
		this.id = options.id;
		this.name = options.name;
		this.aliases = options.aliases ?? [];
		this.allItems = options.allItems ?? [];
	}
}
