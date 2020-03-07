import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import TreeHerbSeedTable from '../../subtables/TreeHerbSeedTable';
import RareDropTable from '../../subtables/RareDropTable';

const AncientWyvernTable = new LootTable()
	.every('Wyvern bones')
	.oneIn(600, 'Granite longsword')
	.oneIn(600, 'Granite boots')

	/*Weapons and armour 15/128 */
	.add('Air battlestaff', 2, 4)
	.add('Mystic air staff', 1, 3)
	.add('Rune pickaxe', 1, 3)
	.add('Rune battleaxe', 1, 2)
	.add('Rune full helm', 1, 2)
	.add('Battlestaff', 6, 1)

	/* Runes and ammunition 23/128 */
	.add('Adamant arrow', [38, 42], 6)
	.add('Nature rune', [25, 60], 4)
	.add('Death rune', [30, 60], 4)
	.add('Blood rune', [25, 50], 4)
	.add('Rune arrow', [35, 72], 4)
	.add('Runite bolts', [25, 60], 1)

	/* Herbs 27/128 */
	.add('Grimy irit leaf', 3, 5)
	.add('Grimy avantoe', 3, 5)
	.add('Grimy kwuarm', 3, 4)
	.add('Grimy cadantine', 3, 4)
	.add('Grimy lantadyme', 3, 3)
	.add('Grimy dwarf weed', 3, 3)
	.add('Grimy torstol', 1, 1)
	.add('Grimy ranarr weed', [1, 4], 2)

	/* Seeds */
	.add(TreeHerbSeedTable, 1, 1)

	/* Materials 41/128 */
	.add('Adamantite bar', 3, 8)
	.add('Adamantite ore', 20, 6)
	.add('Runite ore', [1, 3], 6)
	.add('Diamond', [3, 5], 6)
	.add('Onyx bolt tips', [10, 15], 6)
	.add('Volcanic ash', [80, 120], 6)
	.add('Mahogany logs', [25, 50], 3)

	/* Fossils */
	.tertiary(2, 'Numulite', [5, 30])
	.tertiary(29, 'Unidentified small fossil')
	.tertiary(58, 'Unidentified medium fossil')
	.tertiary(73, 'Unidentified large fossil')
	.tertiary(292, 'Unidentified rare fossil')

	/* Other 20/128 */
	.add('Shark', 5, 6)
	.add('Super combat potion(2)', 1, 5)
	.add('Super restore(4)', 2, 3)
	.add('Coins', [2000, 6000], 2)
	.add('Runite crossbow (u)', 1, 2)
	.add('Supercompost', [8, 10], 2)

	/* Rdt */
	.add(RareDropTable, 1, 1)

	/* Tertiary */
	.tertiary(350, 'Clue scroll (elite)')
	.tertiary(10000, 'Wyvern visage');

export default new SimpleMonster({
	id: 7795,
	name: 'Ancient Wyvern',
	table: AncientWyvernTable,
	aliases: ['ancient wyvern', 'ancient']
});
