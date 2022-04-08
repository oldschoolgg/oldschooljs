import LootTable from '../../../structures/LootTable';

const FrogeelTable = new LootTable({ limit: 20 })
	.every('Bones')
	.every('Raw cave eel', [5, 10])

	/* Other */
	.add('Plain satchel', 1, 3)
	.add('Tea flask', 1, 2);

export default FrogeelTable;
