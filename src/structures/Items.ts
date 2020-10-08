import fetch from 'node-fetch';

import { OSRS_BOX_BASE_URL } from '../constants';
import _items from '../data/items/item_data.json';
import { Item, ItemID, PartialItem } from '../meta/types';
import { cleanString } from '../util/util';
import weirdItemFilter from '../util/weirdItemFilter';
import Collection from './Collection';
const items = _items as Record<string, string>;

export const itemNameMap: Map<string, number> = new Map();

type ItemResolvable = number | string;
export interface ItemCollection {
	[index: string]: Item;
}

const USELESS_ITEMS = [617, 8890, 6964, 2513, 19492, 11071, 11068, 21284];

class Items extends Collection<number, Item | PartialItem> {
	public async fetchAll(): Promise<void> {
		const allItems: ItemCollection = await fetch(
			`${OSRS_BOX_BASE_URL}/items-complete.json`
		).then((res): Promise<any> => res.json());

		for (const item of Object.values(allItems).filter(weirdItemFilter)) {
			this.set(item.id, item);
		}
	}

	public async fetch(input: ItemResolvable): Promise<Item> {
		const id = this.resolveID(input);

		const item: Item = await fetch(`${OSRS_BOX_BASE_URL}/items-json/${id}.json`).then(
			(res): Promise<any> => res.json()
		);

		this.set(item.id, item);
		return item;
	}

	public get(item: ItemResolvable): Item | PartialItem | undefined {
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

for (const [id, name] of Object.entries(items)) {
	const numID = parseInt(id);

	if (USELESS_ITEMS.includes(numID)) continue;
	itemsExport.set(numID, { name, id: numID });
	const cleanName = cleanString(name);
	if (!itemNameMap.has(cleanName)) itemNameMap.set(cleanName, numID);
}

export default itemsExport;
