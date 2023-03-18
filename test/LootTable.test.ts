import { expect, test } from 'vitest';

import LootTable from '../src/structures/LootTable';

test('LootTable', async () => {
	const table1 = new LootTable().every('Coal').tertiary(1, 'Coal').add('Coal');
	const table2 = table1.clone();

	table1.add('Coal').add('Coal').tertiary(1, 'Coal').every('Bones');

	expect(table2.length).toEqual(1);
	expect(table2.tertiaryItems.length).toEqual(1);
});
