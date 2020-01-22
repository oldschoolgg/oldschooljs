import LootTable from '../../structures/LootTable';
import MegaRareTable from '../subtables/MegaRareTable';

const GemTable = new LootTable()
	.addItem('Uncut sapphire', 1, 32)
	.addItem('Uncut emerald', 1, 16)
	.addItem('Uncut ruby', 1, 8)
	.addItem('Chaos talisman', 1, 3)
	.addItem('Uncut diamond', 2)
	.addItem('Rune javelin', 5, 1)
	.addItem('Loop half of key', 1, 1)
	.addItem('Tooth half of key', 1, 1)
	.add(MegaRareTable, undefined, 1);

export default GemTable;
