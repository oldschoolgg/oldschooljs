import { Openables } from '../dist';
import { itemID } from '../dist/util';

describe('Openables', () => {
	test('allItems', () => {
		const allItems = Openables.array()
			.map(i => i.allItems)
			.flat(Infinity);
		for (const item of ['Mystic hat (dusk)', 'Broken dragon hasta', 'Dragonstone full helm'].map(itemID)) {
			expect(allItems.includes(item)).toEqual(true);
		}
	});
	test('allItems', () => {
		for (const [key, val] of Openables.entries()) {
			if (!val.allItems.length) {
				console.error(`${key} has no allitems`);
			}
		}
	});
});
