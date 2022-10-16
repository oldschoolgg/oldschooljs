import LootTable from '../dist/structures/LootTable';
import {itemID} from "../dist/util";
import {LootTableItem} from "../dist/meta/types";

test('LootTable', async () => {
	const table1 = new LootTable().every('Coal').tertiary(1, 'Coal').add('Coal');
	const table2 = table1.clone();

	table1.add('Coal').add('Coal').tertiary(1, 'Coal').every('Bones');

	expect(table2.length).toEqual(1);
	expect(table2.tertiaryItems.length).toEqual(1);
});

test('LootTableClone', async () => {
	// Test LootTable.clone()
	const subTable = new LootTable().add('Coal').add('Iron ore').add('Steel bar');
	const lootItem: LootTableItem[] = [{ item: itemID('Cake'), quantity: 1, weight: 1 }];
	const mainTable = new LootTable().add('Bones').add(subTable).add(lootItem);

	const clonedTable = mainTable.clone();

	// Test sub-LootTable cloning
	const modifyObj = clonedTable.table.find(t => t.item instanceof LootTable);
	(modifyObj!.item as LootTable).table[0].item = 995;
	(modifyObj!.item as LootTable).add('Cheese');

	// Test sub-LootTableItem[] cloning:
	const modifyObj2 = clonedTable.table.filter(t => !(t.item instanceof LootTable) && typeof t.item !== 'number')[0];
	modifyObj2.item = [{ item: itemID('Anchovy pizza'), quantity: 1, weight: 1 }];

	// Run the tests:
	expect(JSON.stringify(clonedTable)).toEqual(
		'{"length":3,"table":[{"item":526,"weight":1,"quantity":1},{"item":{"length":4,"table":[{"item":995,"weight":1,"quantity":1},{"item":440,"weight":1,"quantity":1},{"item":2353,"weight":1,"quantity":1},{"item":1985,"weight":1,"quantity":1}],"totalWeight":4,"oneInItems":[],"tertiaryItems":[],"everyItems":[],"allItems":[453,440,2353,1985]},"weight":1,"quantity":1},{"item":[{"item":2297,"quantity":1,"weight":1}],"weight":1,"quantity":1}],"totalWeight":3,"oneInItems":[],"tertiaryItems":[],"everyItems":[],"allItems":[526,453,440,2353,1891]}'
	);
	expect(JSON.stringify(mainTable)).toEqual(
		'{"length":3,"table":[{"item":526,"weight":1,"quantity":1},{"item":{"length":3,"table":[{"item":453,"weight":1,"quantity":1},{"item":440,"weight":1,"quantity":1},{"item":2353,"weight":1,"quantity":1}],"totalWeight":3,"oneInItems":[],"tertiaryItems":[],"everyItems":[],"allItems":[453,440,2353]},"weight":1,"quantity":1},{"item":[{"item":1891,"quantity":1,"weight":1}],"weight":1,"quantity":1}],"totalWeight":3,"oneInItems":[],"tertiaryItems":[],"everyItems":[],"allItems":[526,453,440,2353,1891]}'
	);

	console.log(JSON.stringify(mainTable));
	console.log(JSON.stringify(clonedTable));

})
