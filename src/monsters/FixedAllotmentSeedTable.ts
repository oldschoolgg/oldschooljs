import LootTable from '../structures/LootTable';

const FixedAllotmentSeedTable = new LootTable()
	.addItem('Potato seed', 4, 96)
	.addItem('Onion seed', 4, 72)
	.addItem('Cabbage seed', 4, 48)
	.addItem('Tomato seed', 3, 24)
	.addItem('Sweetcorn seed', 3, 12)
	.addItem('Strawberry seed', 2, 6)
	.addItem('Watermelon seed', 2, 3)
	.addItem('Snape grass seed', 2, 2);

export default FixedAllotmentSeedTable;
