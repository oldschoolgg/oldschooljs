import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import RareDropTable from '../subtables/RareDropTable';
import TreeHerbSeedTable from '../subtables/TreeHerbSeedTable';
import NotedHerbTable from '../subtables/NotedHerbTable';

export const DemonicGorillaTable = new LootTable(500)
	.every('Ashes')

	/* Uniques */
	.oneIn(300, 'Zenyte shard')
	.oneIn(500, 'Ballista limbs')
	.oneIn(500, 'Ballista spring')
	.oneIn(750, 'Light frame')
	.oneIn(1500, 'Heavy frame')
	.oneIn(1500, 'Monkey tail')

	/* Weapons and armor */
	.addItem('Rune platelegs', 1, 35)
	.addItem('Rune plateskirt', 1, 35)
	.addItem('Rune chainbody', 1, 20)
	.addItem('Dragon scimitar', 1, 10)

	/* Runes and ammunition */
	.addItem('Law rune', [50, 75], 35)
	.addItem('Death rune', [50, 75], 35)
	.addItem('Runite bolts', [100, 150], 25)

	/* Herbs */
	.add(NotedHerbTable, [7, 13], 18)

	/* Seeds */
	.add(TreeHerbSeedTable, 25)

	/* Other */
	.addItem('Prayer potion(3)', 2, 40)
	.addItem('Shark', [2, 3], 35)
	.addItem('Coins', [5000, 10000], 25)
	.addItem('Saradomin brew(2)', 1, 25)
	.addItem('Javelin shaft', [750, 1250], 25)
	.addItem('Rune javelin heads', [45, 55], 25)
	.addItem('Dragon javelin heads', [27, 33], 25)
	.addItem('Adamantite bar', 6, 20)
	.addItem('Diamond', [4, 6], 17)
	.addItem('Runite bar', 3, 15)

	/* Rdt */
	.add(RareDropTable, 5)

	/* Tertiary */
	.tertiary(100, 'Clue scroll (hard)')
	.tertiary(500, 'Clue scroll (elite)');

export default new SimpleMonster({
	id: 7144,
	name: 'Demonic Gorilla',
	table: DemonicGorillaTable,
	aliases: ['demonic gorilla']
});
