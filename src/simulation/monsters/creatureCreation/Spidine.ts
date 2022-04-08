import LootTable from '../../../structures/LootTable';

const SpidineTable = new LootTable({ limit: 20 })
	.every('Bones')
	.every("Red spiders' eggs", [3, 6])

	/* Other */
	.add('Red satchel', 1, 3)
	.add('Tea flask', 1, 2);

export default SpidineTable;
