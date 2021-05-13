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

	const allPrices = await fetch(`https://prices.runescape.wiki/api/v1/osrs/latest`, {
		headers: {
			'User-Agent': 'oldschooljs - @Magnaboy#7556'
		}
	})
		.then((res): Promise<any> => res.json())
		.then((res) => res.data);

	if (!allPrices[20997]) {
		throw new Error(`Failed to fetch prices`);
	}

	for (const item of Object.values(allItems).filter(weirdItemFilter)) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		delete item.icon;
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		delete item.wiki_exchange;

		const price = allPrices[item.id];
		if (price) {
			item.price = Math.max(0, (price.high + price.low) / 2);
		} else {
			item.price = 0;
		}
		itemNameMap[item.id] = item;
	}

	itemNameMap[995].price = 1;

	writeFileSync('./src/data/items/item_data.json', JSON.stringify(itemNameMap, null, 4));

	console.log('Prepared items.');
}
