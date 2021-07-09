import _items from '../data/items/item_data.json';
import { Item, ItemID } from '../meta/types';
import { cleanString } from '../util/cleanString';
import Collection from './Collection';
const items = _items as Record<string, Item>;

export const itemNameMap: Map<string, number> = new Map();

type ItemResolvable = number | string;
export interface ItemCollection {
	[index: string]: Item;
}

const USELESS_ITEMS = [
	617,
	8890,
	6964,
	2513,
	19492,
	11071,
	11068,
	21284,
	24735,
	21913,
	4703,
	4561,
	2425
];

class Items extends Collection<number, Item> {
	public get(item: ItemResolvable): Item | undefined {
		const id = this.resolveID(item);
		if (typeof id === 'undefined') return undefined;
		return super.get(id);
	}

	private resolveID(input: ItemResolvable): ItemID | undefined {
		if (typeof input === 'number') {
			return input;
		}

		if (typeof input === 'string') {
			const cleanName = cleanString(input);
			return itemNameMap.get(cleanName);
		}

		return undefined;
	}
}

const itemsExport = new Items();

for (const [id, item] of Object.entries(items)) {
	const numID = parseInt(id);

	if (USELESS_ITEMS.includes(numID)) continue;
	itemsExport.set(numID, item);
	const cleanName = cleanString(item.name);
	if (!itemNameMap.has(cleanName)) itemNameMap.set(cleanName, numID);
}

export default itemsExport;
