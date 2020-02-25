import fetch from 'node-fetch';
import { ItemCollection } from '../dist/structures/Items';
import weirdItemFilter from '../dist/util/weirdItemFilter';
import { writeFileSync } from 'fs';

const itemNameMap: { [key: string]: string } = {};

export default async function prepareItems(): Promise<void> {
	const allItems: ItemCollection = await fetch(
		`https://raw.githubusercontent.com/osrsbox/osrsbox-db/master/docs/items-complete.json`
	).then((res): Promise<any> => res.json());

	for (const item of Object.values(allItems).filter(weirdItemFilter)) {
		itemNameMap[item.id] = item.name;
	}

	writeFileSync('./src/data/items/item_data.json', JSON.stringify(itemNameMap, null, 4));
	console.log('Prepared items.');
}
