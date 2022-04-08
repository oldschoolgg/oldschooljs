import LootTable from '../../../structures/LootTable';

const SwordchickTable = new LootTable({ limit: 20 })
	.every('Bones')
	.every('Feather', [30, 120])

	/* Other */
	.add('Black satchel', 1, 3)
	.add('Tea flask', 1, 2);

export default SwordchickTable;
