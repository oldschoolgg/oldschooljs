import LootTable from '../../structures/LootTable';
import SimpleOpenable from '../../structures/SimpleOpenable';

// itemID 5075 = Bird nest empty
const NestBoxRingTable = new LootTable()
	// source: https://oldschool.runescape.wiki/w/Bird_nest
	.every(5075)
	.add('Sapphire ring', 1, 40)
	.add('Gold ring', 1, 35)
	.add('Emerald ring', 1, 15)
	.add('Ruby ring', 1, 9)
	.add('Diamond ring');

export default new SimpleOpenable({
	id: 12794,
	name: 'Nest box (ring)',
	aliases: ['nest box (ring)', 'ring nest box', 'nest box ring'],
	table: NestBoxRingTable
});
