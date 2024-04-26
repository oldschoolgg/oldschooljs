import deepMerge from 'deepmerge';
import { deepClone, increaseNumByPercent, notEmpty, reduceNumByPercent } from 'e';
import { readFileSync, writeFileSync } from 'fs';
import fetch from 'node-fetch';

import { EquipmentSlot, Item } from '../dist/meta/types';
import Items, { CLUE_SCROLLS, CLUE_SCROLL_NAMES, USELESS_ITEMS } from '../dist/structures/Items';
import { itemID } from '../dist/util';
import { itemChanges } from './manualItemChanges';

const equipmentModifications = new Map();
const equipmentModSrc = [
	['Pink stained full helm', 'Bronze full helm'].map(itemID),
	['Pink stained platebody', 'Bronze platebody'].map(itemID),
	['Pink stained platelegs', 'Bronze platelegs'].map(itemID),
	['Bulging sack', 'Red cape'].map(itemID)
] as const;
for (const [toChange, toCopy] of equipmentModSrc) {
	equipmentModifications.set(toChange, toCopy);
}

const itemNameMap: { [key: string]: Item } = {};

interface RawItemCollection {
	[index: string]: Item & {
		duplicate: boolean;
		noted: boolean;
		placeholder: boolean;
		linked_id_item: number | null;
	};
}

// This regex matches the nearly 600 individual clue-step items:
const clueStepRegex = /^Clue scroll \((beginner|easy|medium|hard|elite|master)\) - .*$/;

function itemShouldntBeAdded(item: any) {
	if (CLUE_SCROLLS.includes(item.id)) return false;

	return (
		CLUE_SCROLL_NAMES.includes(item.name) && !CLUE_SCROLLS.includes(item.id) ||
		USELESS_ITEMS.includes(item.id) ||
		item.duplicate === true ||
		item.noted ||
		item.linked_id_item ||
		item.placeholder ||
		item.name === 'Null' ||
		item.wiki_name?.includes(' (Worn)') ||
		(item.wiki_name && clueStepRegex.exec(item.wiki_name))
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

const manualItems: Item[] = [
	{
		id: 28_329,
		name: 'Ring of shadows',
		members: true,
		equipable: true,
		equipable_by_player: true,
		cost: 75_000,
		lowalch: 30_000,
		highalch: 45_000,
		weight: 0.004,
		release_date: '2023-07-26',
		examine: 'A powerful ring used to see into other realms...',
		wiki_name: 'Ring of shadows (uncharged)',
		wiki_url: 'https://oldschool.runescape.wiki/w/Ring_of_shadows#Uncharged',
		equipment: {
			attack_stab: 4,
			attack_slash: 4,
			attack_crush: 4,
			attack_magic: 5,
			attack_ranged: 4,
			defence_stab: 0,
			defence_slash: 0,
			defence_crush: 0,
			defence_magic: 5,
			defence_ranged: 0,
			melee_strength: 2,
			ranged_strength: 0,
			magic_damage: 0,
			prayer: 2,
			slot: EquipmentSlot.Ring,
			requirements: null
		},
		price: 0
	},
	{
		id: 28_409,
		name: 'Ancient lamp',
		cost: 1,
		weight: 0.1,
		release_date: '2023-07-26',
		examine: 'Good for rubbing.',
		wiki_name: 'Ancient lamp',
		wiki_url: 'https://oldschool.runescape.wiki/w/Ancient_lamp',
		price: 0
	},
	{
		id: 27_897,
		name: 'Scaly blue dragonhide',
		members: true,
		tradeable: true,
		tradeable_on_ge: true,
		noteable: true,
		cost: 100,
		lowalch: 40,
		highalch: 60,
		weight: 3.175,
		release_date: '2023-05-17',
		examine: 'A scaled blue dragonhide.',
		wiki_name: 'Scaly blue dragonhide',
		wiki_url: 'https://oldschool.runescape.wiki/w/Scaly_blue_dragonhide',
		price: 2011
	}
];

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
	const messages: string[] = [];
	const allItemsRaw: RawItemCollection = await fetch(
		'https://raw.githubusercontent.com/0xNeffarion/osrsreboxed-db/master/docs/items-complete.json'
	).then((res): Promise<any> => res.json());
	const allItems = deepClone(allItemsRaw);

	const allPrices = await fetch('https://prices.runescape.wiki/api/v1/osrs/latest', {
		headers: {
			'User-Agent': 'oldschooljs - @magnaboy'
		}
	})
		.then((res): Promise<any> => res.json())
		.then(res => res.data);

	if (!allPrices[20_997]) {
		throw new Error('Failed to fetch prices');
	}

	const newItems = [];
	const majorPriceChanges = [];
	const previousItems = JSON.parse(readFileSync('./src/data/items/item_data.json', 'utf-8'));

	for (let item of Object.values(allItems)) {
		if (itemShouldntBeAdded(item)) continue;

		if (item.name === "Pharaoh's sceptre") {
			item = {
				...allItems[26_950],
				id: item.id
			};
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
		if (previousItem && item.tradeable && previousItem.price < item.price / 20 && previousItem.price !== 0) {
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
					messages.push(`WARNING: ${item.name} (${item.id}) had ${key} removed`);
				}
				if (!previousItem[key] && Boolean(item?.[key])) {
					messages.push(`WARNING: ${item.name} (${item.id}) had ${key} added`);
				}
			}
			if (item.name !== previousItem.name) {
				messages.push(`WARNING: name changed from ${previousItem.name} to ${item.name}`);
			}
			if (item.equipment?.slot !== previousItem.equipment?.slot) {
				messages.push(`WARNING: ${previousItem.name} slot changed`);
			}
		}

		if (equipmentModifications.has(item.id)) {
			const copyItem = Items.get(equipmentModifications.get(item.id)!)!;
			item.equipment = copyItem.equipment;
			item.equipable_by_player = copyItem.equipable_by_player;
			item.equipable_weapon = copyItem.equipable_weapon;
			item.equipable = copyItem.equipable;
		}
		if (previousItem) {
			item.cost = previousItem.cost;
			item.lowalch = previousItem.lowalch;
			item.highalch = previousItem.highalch;
			item.wiki_url = previousItem.wiki_url;
			item.wiki_name = previousItem.wiki_name;
			item.release_date = previousItem.release_date;
			if (previousItem.equipment?.requirements) {
				// @ts-ignore ignore
				item.equipment = {
					...item.equipment,
					requirements: previousItem.equipment.requirements
				};
			}
		}
		if (previousItem) {
			if (item.equipment?.requirements === null && previousItem.equipment?.requirements !== null) {
				messages.push(
					`WARNING: ${item.name} (${item.id}) had requirements removed: BEFORE[${JSON.stringify(
						previousItem.equipment?.requirements
					)}] AFTER[${JSON.stringify(item.equipment?.requirements)}]`
				);
			} else if (
				JSON.stringify(item.equipment?.requirements) !== JSON.stringify(previousItem.equipment?.requirements)
			) {
				messages.push(
					`WARNING: ${item.name} (${item.id}) had requirements changed: BEFORE[${JSON.stringify(
						previousItem.equipment?.requirements
					)}] AFTER[${JSON.stringify(item.equipment?.requirements)}]`
				);
			}
		}

		if (previousItem?.equipment?.requirements && !item.equipment?.requirements) {
			// @ts-ignore ignore
			item.equipment = {
				...item.equipment,
				requirements: previousItem.equipment.requirements
			};
		}

		if (itemChanges[item.id]) {
			item = deepMerge(item, itemChanges[item.id]) as any;
		}

		itemNameMap[item.id] = item;

		for (const item of manualItems) {
			itemNameMap[item.id] = item;
		}
	}
	const deletedItems: any[] = Object.values(previousItems)
		.filter((i: any) => !(itemNameMap as any)[i.id])
		.filter(notEmpty);

	messages.push(`New Items: ${moidLink(newItems)}.`);
	messages.push(`Deleted Items: ${moidLink(deletedItems)}.`);
	const sql = `SELECT
  ${deletedItems
		.map(
			item => `COUNT(*) FILTER (WHERE bank->>'${item.id}' IS NOT NULL) AS people_with_item_${item.id},
  SUM((bank->>'${item.id}')::int) AS sum_item_${item.id},`
		)
		.join('\n')}

FROM users;
`;
	messages.push(`${sql}`);

	messages.push(
		`Major price changes NOT changed: ${majorPriceChanges
			.map(ent => `${ent[0].name} (${ent[0].price} to ${ent[1].price})`)
			.join(', ')}.`
	);

	writeFileSync('./src/data/items/item_data.json', JSON.stringify(itemNameMap, null, 4));
	writeFileSync('./updates.txt', messages.join('\n'));

	messages.push('Prepared items.');
}
