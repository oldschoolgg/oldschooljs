import { deepClone } from 'e';
import { writeFileSync } from 'fs';
import fetch from 'node-fetch';

import { Item } from '../dist/meta/types';
import Items, { USELESS_ITEMS } from '../dist/structures/Items';

const itemNameMap: { [key: string]: Item } = {};

interface RawItemCollection {
	[index: string]: Item & {
		duplicate: boolean;
		noted: boolean;
		placeholder: boolean;
		linked_id_item: number | null;
	};
}

export default async function prepareItems(): Promise<void> {
	const allItemsRaw: RawItemCollection = await fetch(
		`https://raw.githubusercontent.com/osrsbox/osrsbox-db/master/docs/items-complete.json`
	).then((res): Promise<any> => res.json());
	const allItems = deepClone(allItemsRaw);

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

	for (const item of Object.values(allItems)) {
		if (
			USELESS_ITEMS.includes(item.id) ||
			item.duplicate === true ||
			item.noted ||
			item.linked_id_item ||
			item.placeholder
		) {
			continue;
		}

		for (const delKey of [
			'quest_item',
			'placeholder',
			'duplicate',
			'last_updated',
			'icon',
			'noted',
			'linked_id_item',
			'linked_id_noted',
			'linked_id_placeholder',
			'stacked',
			'quest_item'
		]) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			delete item[delKey];
		}

		for (const boolKey of [
			'incomplete',
			'members',
			'tradeable',
			'tradeable_on_ge',
			'stackable',
			'noteable',
			'equipable',
			'equipable_by_player',
			'equipable_weapon',
			'weight',
			'buy_limit',
			'release_date',
			'examine',
			'wiki_name',
			'wiki_url',
			'equipment',
			'weapon'
		] as const) {
			if (!item[boolKey]) {
				delete item[boolKey];
			}
		}

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

		itemNameMap[item.id] = item;
	}

	console.log(`New Items: ${newItems.map((i) => `${i.name}[${i.id}]`).join(', ')}.`);

	console.log(
		`Major price changes: ${majorPriceChanges
			.map((ent) => `${ent[0].name} (${ent[0].price} to ${ent[1].price})`)
			.join(', ')}.`
	);

	writeFileSync('./src/data/items/item_data.json', JSON.stringify(itemNameMap, null, 4));

	console.log('Prepared items.');
}
