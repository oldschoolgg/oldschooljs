import LootTable from '../../../structures/LootTable';

const UnicowTable = new LootTable({ limit: 20 })
	.every('Bones')
	.every('Unicorn horn', [2, 4])

	/* Other */
	.add('Green satchel', 1, 3)
	.add('Tea flask', 1, 2);

export default UnicowTable;
