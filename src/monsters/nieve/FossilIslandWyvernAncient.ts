import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import TreeHerbSeedTable from '../subtables/TreeHerbSeedTable';
import RareDropTable from '../subtables/RareDropTable';

export const AncientWyvernTable = new LootTable()
	.every('Wyvern bones')
	.oneIn(600, 'Granite longsword')
	.oneIn(600, 'Granite boots')

	/*Weapons and armour 15/128 */
	.addItem('Air battlestaff', 2, 4)
	.addItem('Mystic air staff', 1, 3)
	.addItem('Rune pickaxe', 1, 3)
	.addItem('Rune battleaxe', 1, 2)
	.addItem('Rune full helm', 1, 2)
	.addItem('Battlestaff', 6, 1)

	/* Runes and ammunition 23/128 */
	.addItem('Adamant arrow', [38, 42], 6)
	.addItem('Nature rune', [25, 60], 4)
	.addItem('Death rune', [30, 60], 4)
	.addItem('Blood rune', [25, 50], 4)
	.addItem('Rune arrow', [35, 72], 4)
	.addItem('Runite bolts', [25, 60], 1)

	/* Herbs 27/128 */
	.addItem('Grimy irit leaf', 3, 5)
	.addItem('Grimy avantoe', 3, 5)
	.addItem('Grimy kwuarm', 3, 4)
	.addItem('Grimy cadantine', 3, 4)
	.addItem('Grimy lantadyme', 3, 3)
	.addItem('Grimy dwarf weed', 3, 3)
	.addItem('Grimy torstol', 1, 1)
	.addItem('Grimy ranarr weed', [1, 4], 2)

	/* Seeds */
	.add(TreeHerbSeedTable, 1, 1)

	/* Materials 41/128 */
	.addItem('Adamantite bar', 3, 8)
	.addItem('Adamantite ore', 20, 6)
	.addItem('Runite ore', [1, 3], 6)
	.addItem('Diamond', [3, 5], 6)
	.addItem('Onyx bolt tips', [10, 15], 6)
	.addItem('Volcanic ash', [80, 120], 6)
	.addItem('Mahogany logs', [25, 50], 3)

	/* Fossils */
	.tertiary(2, 'Numulite', [5, 30])
	.tertiary(29, 'Unidentified small fossil')
	.tertiary(58, 'Unidentified medium fossil')
	.tertiary(73, 'Unidentified large fossil')
	.tertiary(292, 'Unidentified rare fossil')

	/* Other 20/128 */
	.addItem('Shark', 5, 6)
	.addItem('Super combat potion(2)', 1, 5)
	.addItem('Super restore(4)', 2, 3)
	.addItem('Coins', [2000, 6000], 2)
	.addItem('Runite crossbow (u)', 1, 2)
	.addItem('Supercompost', [8, 10], 2)

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
