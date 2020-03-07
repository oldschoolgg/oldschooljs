import LootTable from '../../structures/LootTable';

const VariableAllotmentSeedTable = new LootTable()
	.addItem('Potato seed', [1, 4], 64)
	.addItem('Onion seed', [1, 3], 32)
	.addItem('Cabbage seed', [1, 3], 16)
	.addItem('Tomato seed', [1, 2], 8)
	.addItem('Sweetcorn seed', [1, 2], 4)
	.addItem('Strawberry seed', 1, 2)
	.addItem('Watermelon seed', 1, 1)
	.addItem('Snape grass seed', 1, 1);

export default VariableAllotmentSeedTable;
