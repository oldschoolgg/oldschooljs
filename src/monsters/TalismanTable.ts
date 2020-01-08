import LootTable from '../structures/LootTable';

const TalismanTable = new LootTable()
	.addItem('Air talisman', 1, 10)
	.addItem('Body talisman', 1, 10)
	.addItem('Earth talisman', 1, 10)
	.addItem('Fire talisman', 1, 10)
	.addItem('Mind talisman', 1, 10)
	.addItem('Water talisman', 1, 10)
	.addItem('Cosmic talisman', 1, 4)
	.addItem('Chaos talisman', 1, 3)
	.addItem('Nature talisman', 1, 3);

export default TalismanTable;
