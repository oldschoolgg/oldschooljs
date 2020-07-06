import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import RareDropTable from '../../subtables/RareDropTable';
import TreeHerbSeedTable from '../../subtables/TreeHerbSeedTable';
import NotedHerbTable from '../../subtables/NotedHerbTable';

const DemonicGorillaTable = new LootTable({ limit: 500 })
	.every('Ashes')

	/* Uniques */
	.oneIn(300, 'Zenyte shard')
	.oneIn(500, 'Ballista limbs')
	.oneIn(500, 'Ballista spring')
	.oneIn(750, 'Light frame')
	.oneIn(1500, 'Heavy frame')
	.oneIn(1500, 'Monkey tail')

	/* Weapons and armor */
	.add('Rune platelegs', 1, 35)
	.add('Rune plateskirt', 1, 35)
	.add('Rune chainbody', 1, 20)
	.add('Dragon scimitar', 1, 10)

	/* Runes and ammunition */
	.add('Law rune', [50, 75], 35)
	.add('Death rune', [50, 75], 35)
	.add('Runite bolts', [100, 150], 25)

	/* Herbs */
	.add(NotedHerbTable, [7, 13], 18, true) // multiply dropped roll instead of separate rolls

	/* Seeds */
	.add(TreeHerbSeedTable, 2, 25, true) // multiply dropped roll instead of separate rolls

	/* Other */
	.add('Prayer potion(3)', 2, 40)
	.add('Shark', [2, 3], 35)
	.add('Coins', [5000, 10000], 25)
	.add('Saradomin brew(2)', 1, 25)
	.add('Javelin shaft', [750, 1250], 25)
	.add('Rune javelin heads', [45, 55], 25)
	.add('Dragon javelin heads', [27, 33], 25)
	.add('Adamantite bar', 6, 20)
	.add('Diamond', [4, 6], 17)
	.add('Runite bar', 3, 15)

	/* Rdt */
	.add(RareDropTable, 1, 5)

	/* Tertiary */
	.tertiary(100, 'Clue scroll (hard)')
	.tertiary(500, 'Clue scroll (elite)');

export default new SimpleMonster({
	id: 7144,
	name: 'Demonic Gorilla',
	table: DemonicGorillaTable,
	aliases: ['demonic gorilla', 'demonic']
});
