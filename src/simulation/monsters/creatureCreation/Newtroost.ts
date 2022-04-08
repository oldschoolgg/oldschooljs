import LootTable from '../../../structures/LootTable';

const NewtroostTable = new LootTable({ limit: 20 })
	.every('Bones')
	.every('Eye of newt', [4, 10])

	/* Other */
	.add('Rune satchel', 1, 3)
	.add('Tea flask', 1, 2);

export default NewtroostTable;
