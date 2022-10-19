import { deepClone, increaseNumByPercent, notEmpty, reduceNumByPercent } from 'e';
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
	return `https://chisel.weirdgloop.org/moid/item_id.html#${items.map(i => i.id).join(',')}`;
}

function getItem(name: string) {
	const item = Items.get(name);
	if (!item) throw new Error(`${name} doesnt exist`);
	return item;
}

// Make these all worth 0gp. They're manipulated and fluctuate hugely constantly.
const itemsToIgnorePrices = [
	'Raw bird meat',
	'Red feather',
	'Yellow feather',
	'Orange feather',
	'Blue feather',
	'Stripy feather',
	'Ferret',
	'Ruby harvest',
	'Sapphire glacialis',
	'Snowy knight',
	'Black warlock',
	'Kebbit claws',
	'Barb-tail harpoon',
	'Kebbit spike',
	'Kebbit teeth',
	'Damaged monkey tail',
	'Monkey tail',
	'Spotted kebbit fur',
	'Dark kebbit fur',
	'Dashing kebbit fur',
	'Imp-in-a-box(2)',
	'Swamp lizard',
	'Orange salamander',
	'Red salamander',
	'Black salamander',
	'Larupia fur',
	'Tatty larupia fur',
	'Graahk fur',
	'Tatty graahk fur',
	'Kyatt fur',
	'Tatty kyatt fur',
	'Raw rabbit',
	'Rabbit foot',
	'Polar kebbit fur',
	'Raw beast meat',
	'Common kebbit fur',
	'Feldip weasel fur',
	'Desert devil fur',
	'Long kebbit spike',
	'Fish food',
	'Iron bolts (p+)',
	'Cream boots',
	'Brandy',
	'Premade sgg',
	'Spicy crunchies',
	'Premade veg batta',
	'Assorted flowers',
	'Purple hat',
	"Blood'n'tar snelm",
	"Blood'n'tar snelm",
	'Fremennik brown cloak',
	'Fremennik brown shirt',
	'Shirt',
	'Steel arrow(p++)',
	'Spider on shaft',
	'Tribal mask',
	'White dagger',
	'Sandstone (5kg)',
	'Minced meat',
	'Bagged dead tree',
	'Kitchen table',
	'Teak bed ',
	'Bandana eyepatch',
	'Iron bolts (p+)',
	'Elemental helmet',
	'Butterfly net',
	'Light orb',
	'Steel hasta',
	'Defence mix(2)',
	'Arceuus banner',
	'Yellow cape',
	'Iron spear(p+)',
	'Egg and tomato',
	"Druid's robe top",
	'Bronze thrownaxe',
	'Steel thrownaxe',
	'Iron javelin(p)',
	'Black longsword',
	"Premade s'y crunch",
	'Redberry pie',
	'Serum 207 (2)',
	'Fremennik red shirt',
	'Dwellberry seed',
	'Iron javelin(p++)',
	'Steel knife(p+)',
	'Mithril dagger(p++)',
	'Thatch spar dense',
	'Villager armband',
	'Sliced mushrooms',
	'Raw fish pie',
	"Blue d'hide chaps (g)",
	'Oak armchair',
	'Teak armchair',
	'Beer barrel',
	'Carved oak bench',
	'Carved teak bench',
	'Oak stock',
	'Oak toy box',
	'Teak magic wardrobe',
	'Oak armour case',
	'Roast beast meat',
	"Relicym's mix(2)",
	'Antidote+ mix(1)'
]
	.map(getItem)
	.map(i => i.id);

const keysToWarnIfRemovedOrAdded: (keyof Item)[] = ['equipable', 'equipment', 'weapon'];

export default async function prepareItems(): Promise<void> {
	const allItemsRaw: RawItemCollection = await fetch(
		'https://raw.githubusercontent.com/ZappyScript/osrsbox-item-complete/main/items-complete.json'
	).then((res): Promise<any> => res.json());
	const allItems = deepClone(allItemsRaw);

	const allPrices = await fetch('https://prices.runescape.wiki/api/v1/osrs/latest', {
		headers: {
			'User-Agent': 'oldschooljs - @Magnaboy#7556'
		}
	})
		.then((res): Promise<any> => res.json())
		.then(res => res.data);

	if (!allPrices[20_997]) {
		throw new Error('Failed to fetch prices');
	}

	const newItems = [];
	const majorPriceChanges = [];
	const deletedItems = Object.values(allPrices)
		.filter(i => !itemShouldntBeAdded(i))
		.filter((i: any) => !(allItems as any)[i.id])
		.filter(notEmpty);

	for (let item of Object.values(allItems)) {
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
		if (item.lowalch === null) delete item.lowalch;
		if (item.highalch === null) delete item.highalch;

		const previousItem = Items.get(item.id);
		if (!previousItem) {
			newItems.push(item);
		}

		const price = allPrices[item.id];
		if (price) {
			item.price = Math.max(0, ((price.high as number) + (price.low as number)) / 2);
		} else {
			item.price = 0;
		}
		if (item.id === 995) {
			item.price = 1;
		}
		if (itemsToIgnorePrices.includes(item.id) || !item.tradeable) {
			item.price = 0;
		}

		// If major price increase, just dont fucking change it.
		if (previousItem && item.tradeable && previousItem.price < item.price / 20) {
			majorPriceChanges.push([previousItem, item]);
			item.price = previousItem.price;
		}

		// Dont change price if its only a <10% difference and price is less than 100k
		if (
			previousItem &&
			item.price > reduceNumByPercent(previousItem?.price, 10) &&
			item.price < increaseNumByPercent(previousItem?.price, 10) &&
			item.price < 100_000
		) {
			item.price = previousItem.price;
		} else if (
			// Ignore <3% changes in any way
			previousItem &&
			item.price > reduceNumByPercent(previousItem?.price, 3) &&
			item.price < increaseNumByPercent(previousItem?.price, 3)
		) {
			item.price = previousItem.price;
		}

		if (previousItem) {
			for (const key of keysToWarnIfRemovedOrAdded) {
				if (!item[key] && Boolean(previousItem?.[key])) {
					console.warn(`WARNING: ${item.name} (${item.id}) had ${key} removed`);
				}
				if (!previousItem[key] && Boolean(item?.[key])) {
					console.warn(`WARNING: ${item.name} (${item.id}) had ${key} added`);
				}
			}
			if (item.name !== previousItem.name) {
				console.warn(`WARNING: name changed from ${previousItem.name} to ${item.name}`);
			}
		}

		if (item.name === "Pharaoh's sceptre") {
			item = {
				...allItems[26_950],
				id: item.id,
				price: Math.max(0, ((price.high as number) + (price.low as number)) / 2)
			};
		}

		itemNameMap[item.id] = item;
	}

	console.log(`New Items: ${moidLink(newItems)}.`);
	console.log(`Deleted Items: ${moidLink(deletedItems)}.`);

	console.log(
		`Major price changes NOT changed: ${majorPriceChanges
			.map(ent => `${ent[0].name} (${ent[0].price} to ${ent[1].price})`)
			.join(', ')}.`
	);

	writeFileSync('./src/data/items/item_data.json', JSON.stringify(itemNameMap, null, 4));

	console.log('Prepared items.');
}
