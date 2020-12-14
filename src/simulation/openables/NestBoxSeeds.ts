import LootTable from '../../structures/LootTable';
import SimpleOpenable from '../../structures/SimpleOpenable';
import { EMPTY_BIRD_NEST_ID } from './../../constants';

const NestBoxSeedsTable = new LootTable()
	// source: https://oldschool.runescape.wiki/w/Bird_nest
	.every(EMPTY_BIRD_NEST_ID)
	.add('Acorn', 1, 1389)
	.add('Apple tree seed', 1, 1169)
	.add('Willow seed', 1, 928)
	.add('Banana tree seed', 1, 728)
	.add('Orange tree seed', 1, 563)
	.add('Curry tree seed', 1, 468)
	.add('Maple seed', 1, 321)
	.add('Pineapple seed', 1, 287)
	.add('Papaya tree seed', 1, 229)
	.add('Yew seed', 1, 213)
	.add('Palm tree seed', 1, 160)
	.add('Calquat tree seed', 1, 112)
	.add('Spirit seed', 1, 71)
	.add('Dragonfruit tree seed', 1, 40)
	.add('Magic seed', 1, 35)
	.add('Teak seed', 1, 29)
	.add('Mahogany seed', 1, 29)
	.add('Redwood tree seed', 1, 24)
	.add('Celastrus seed', 1, 23);

export default new SimpleOpenable({
	id: 12793,
	name: 'Nest box (seeds)',
	aliases: ['nest box (seeds)', 'seeds nest box', 'nest box seeds', 'seed nest box'],
	table: NestBoxSeedsTable
});
