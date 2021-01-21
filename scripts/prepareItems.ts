import { objectEntries } from 'e';
import { writeFileSync } from 'fs';
import fetch from 'node-fetch';

import { Item } from '../dist/meta/types';
import { ItemCollection } from '../dist/structures/Items';
import weirdItemFilter from '../dist/util/weirdItemFilter';

const itemNameMap: { [key: string]: Item } = {};

export default async function prepareItems(): Promise<void> {
	const allItems: ItemCollection = await fetch(
		`https://raw.githubusercontent.com/osrsbox/osrsbox-db/master/docs/items-complete.json`
	).then((res): Promise<any> => res.json());

	for (const item of Object.values(allItems).filter(weirdItemFilter)) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		delete item.icon;
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		delete item.wiki_exchange;

		itemNameMap[item.id] = item;
	}

	writeFileSync('./src/data/items/item_data.json', JSON.stringify(itemNameMap, null, 4));

	console.log('Prepared items.');
}
