import { writeFileSync } from 'fs';
import fetch from 'node-fetch';

import { Item } from '../dist/meta/types';
import Items, { ItemCollection, USELESS_ITEMS } from '../dist/structures/Items';
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

	const newItems = [];
	const majorPriceChanges = [];
	const ignoredPriceChanges = [];

	for (const item of Object.values(allItems).filter(weirdItemFilter)) {
		if (USELESS_ITEMS.includes(item.id)) continue;
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
		if (item.id === 995) {
			item.price = 1;
		}

		const previousItem = Items.get(item.id);
		if (!previousItem) {
			newItems.push(item);
		}

		if (
			previousItem &&
			item.tradeable &&
			(previousItem.price > item.price * 3 || previousItem.price < item.price / 3)
		) {
			majorPriceChanges.push([previousItem, item]);
		}
		//If difference is too big ignore the new price
		if (
			previousItem &&
			item.tradeable &&
			(item.price < previousItem.price / 20 || item.price > previousItem.price * 10)
		) {
			ignoredPriceChanges.push([previousItem, item]);
			item.price = previousItem.price;
		}
		itemNameMap[item.id] = item;
	}

	console.log(`New Items: ${newItems.map((i) => `${i.name}[${i.id}]`).join(', ')}.`);
	const t: Record<any, any> = {};
	for (const i of newItems) {
		t[i.id] = 1;
	}
	console.log(JSON.stringify(t));
	console.log(
		`Major price changes: ${majorPriceChanges
			.map((ent) => `${ent[0].name} (${ent[0].price} to ${ent[1].price})`)
			.join(', ')}.`
	);
	console.log(
		`Ignored price changes: ${ignoredPriceChanges
			.map((ent) => `${ent[0].name} (${ent[0].price} to ${ent[1].price})`)
			.join(', ')}.`
	);

	writeFileSync('./src/data/items/item_data.json', JSON.stringify(itemNameMap, null, 4));

	console.log('Prepared items.');
}
