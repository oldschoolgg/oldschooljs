import minifyDist from './minifyDist';
import prepareItems from './prepareItems';
// @ts-ignore asif
import _items from '../src/data/items/item_data.json';

minifyDist();
const previousItems: string[] = [];
for (const key of Object.keys(_items)) {
	previousItems.push(key);
}

const newItems: string[] = [];
const deletedItems: string[] = [];
prepareItems().then(newItemMap => {
	for (const key of Object.keys(newItemMap))
	{
		if (!previousItems.includes(key)) {
			newItems.push(key);
		}
	}
	for (const key of previousItems) {
		if (!newItemMap[key]) deletedItems.push(key);
	}
	console.log(`Deleted items: ${deletedItems}`);
	console.log(`New items: ${newItems}`);
});
