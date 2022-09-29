import _items from '../data/items/item_data.json';
import { Item, ItemID } from '../meta/types';
import { cleanString } from '../util/cleanString';
import Collection from './Collection';

// @ts-ignore asdf
const items = _items as Record<string, Item>;

export const itemNameMap: Map<string, number> = new Map();

type ItemResolvable = number | string;
export interface ItemCollection {
	[index: string]: Item;
}

export const USELESS_ITEMS = [
	617,
	8890,
	6964,
	2513,
	19_492,
	11_071,
	11_068,
	21_284,
	24_735,
	21_913,
	4703,
	4561,
	2425,
	4692,
	3741,

	// Pharaoh's sceptres
	9045,
	9046,
	9047,
	9048,
	9049,
	9050,
	9051,
	13_074,
	13_075,
	13_076,
	13_077,
	13_078,
	16_176,
	21_445,
	21_446,
	26_948,
	26_950,
	26_945
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
