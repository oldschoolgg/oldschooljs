import { deepClone } from 'e';
import { writeFileSync } from 'fs';
import fetch from 'node-fetch';

import { Item } from '../dist/meta/types';
import Items, { USELESS_ITEMS } from '../dist/structures/Items';
import _allPrices from '../src/data/items/item_data.json';

const allPrices = _allPrices as any;
const itemNameMap: { [key: string]: Item } = {};

interface RawItemCollection {
	[index: string]: Item & {
		duplicate: boolean;
		noted: boolean;
		placeholder: boolean;
		linked_id_item: number | null;
	};
}

function itemShouldntBeAdded(item: any) {
	return (
		USELESS_ITEMS.includes(item.id) ||
		item.duplicate === true ||
		item.noted ||
		item.linked_id_item ||
		item.placeholder
	);
}

export function moidLink(items: any[]) {
	return `https://chisel.weirdgloop.org/moid/item_id.html#${items.map((i) => i.id).join(',')}`;
}

export default async function prepareItems(): Promise<void> {
	const allItemsRaw: RawItemCollection = await fetch(
		`https://raw.githubusercontent.com/Flipping-Utilities/osrsbox-db/master/docs/items-complete.json`
	).then((res): Promise<any> => res.json());
	const allItems = deepClone(allItemsRaw);

	const newItems = [];
	const majorPriceChanges = [];
	const deletedItems = Object.values(allPrices)
		.filter((i) => !itemShouldntBeAdded(i))
		.filter((i: any) => !(allItems as any)[i.id]);

	for (const item of Object.values(allItems)) {
		if (itemShouldntBeAdded(item)) continue;

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

		const price = (allPrices as any)[item.id]?.price;
		if (price) {
			item.price = price;
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
			(previousItem.price > item.price * 10 || previousItem.price < item.price / 10)
		) {
			majorPriceChanges.push([previousItem, item]);
		}

		itemNameMap[item.id] = item;
	}

	console.log(`New Items: ${moidLink(newItems)}.`);
	console.log(`Deleted Items: ${moidLink(deletedItems)}.`);

	console.log(
		`Major price changes: ${majorPriceChanges
			.map((ent) => `${ent[0].name} (${ent[0].price} to ${ent[1].price})`)
			.join(', ')}.`
	);

	writeFileSync('./src/data/items/item_data.json', JSON.stringify(itemNameMap, null, 4));

	console.log('Prepared items.');
}
