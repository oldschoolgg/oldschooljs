import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import NotedHerbTable from '../subtables/NotedHerbTable';
import TreeHerbSeedTable from '../subtables/TreeHerbSeedTable';
import RareDropTable from '../subtables/RareDropTable';

export const LizardmanShamanTable = new LootTable(500)
	.every('Big bones')
	.oneIn(5000, 'Dragon Warhammer')

	/* Weapons and armor */
	.addItem('Rune med helm', 1, 18)
	.addItem('Earth battlestaff', 1, 17)
	.addItem('Mystic earth staff', 1, 17)
	.addItem('Rune warhammer', 1, 16)
	.addItem('Rune chainbody', 1, 12)
	.addItem("Red d'hide vamb", 1, 10)

	/* Runes */
	.addItem('Air rune', [60, 80], 25)
	.addItem('Chaos rune', [40, 60], 25)
	.addItem('Death rune', [20, 30], 25)
	.addItem('Fire rune', [60, 80], 25)

	/*  Materials */
	.addItem('Xerician fabric', 2, 40)
	.addItem('Coal', [20, 25], 20)
	.addItem('Iron ore', [30, 35], 20)
	.addItem('Runite ore', [3, 5], 8)

	/* Herbs */
	.add(NotedHerbTable, [2, 3], 45)

	/* Seeds */
	.add(TreeHerbSeedTable, 1, 10)

	/* Other */
	.addItem('Coins', [100, 6_000], 70)
	.addItem('Lizardman fang', [10, 14], 38)
	.addItem('Chilli potato', 2, 30)
	.addItem("Xeric's talisman(inert)", 1, 4)

	/* Rdt */
	.add(RareDropTable, 1, 20)

	/* Tertiary */
	.tertiary(200, 'Clue scroll (hard)')
	.tertiary(400, 'Long bone')
	.tertiary(1200, 'Clue scroll (elite)')
	.tertiary(5013, 'Curved bone');

export default new SimpleMonster({
	id: 6766,
	name: 'Lizardman Shaman',
	table: LizardmanShamanTable,
	aliases: ['lizardman shaman', 'shaman']
});
