import fetch from 'node-fetch';
import { ItemCollection } from '../dist/structures/Items';
import { writeFileSync } from 'fs';

const itemNameMap: { [key: string]: string } = {};

export default async function prepareItems(): Promise<void> {
	const allItems: ItemCollection = await fetch(
		`https://github.com/osrsbox/osrsbox-db/blob/master/docs/items-complete.json?raw=true`
	).then((res): Promise<any> => res.json());

	for (const item of Object.values(allItems).filter(
		(item): boolean => !item.placeholder && !item.noted && !item.duplicate
	)) {
		itemNameMap[item.id] = item.name;
	}

	writeFileSync('./src/data/items/item_data.json', JSON.stringify(itemNameMap, null, 4));
	console.log('Prepared items.');
}
