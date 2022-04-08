import LootTable from '../../../structures/LootTable';

const JubsterTable = new LootTable({ limit: 20 })
	.every('Bones')
	.every('Raw jubbly', [3, 7])

	/* Other */
	.add('Gold satchel', 1, 3)
	.add('Tea flask', 1, 2);

export default JubsterTable;
