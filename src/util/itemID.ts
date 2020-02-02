import Items from '../structures/Items';

export default function itemID(name: string): number {
	const item = Items.get(name);
	if (!item) {
		throw console.error(`ERROR: ${JSON.stringify(name)} doesnt exist.`);
	}
	return item.id;
}
