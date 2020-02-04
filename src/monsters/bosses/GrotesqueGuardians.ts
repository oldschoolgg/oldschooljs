import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';

export const GrotesqueGuardians2Table = new LootTable()

	/* Uniques */
	.oneIn(250, 'Granite maul')
	.oneIn(500, 'Granite gloves')
	.oneIn(500, 'Granite ring')
	.oneIn(750, 'Granite hammer')
	.oneIn(1000, 'Black tourmaline core')

	/* Weapons and armour */
	.addItem('Rune pickaxe', 1, 6)
	.addItem('Rune full helm', 1, 5)
	.addItem('Rune platelegs', 1, 5)
	.addItem('Rune 2h sword', 1, 4)
	.addItem('Rune battleaxe', 1, 3)
	.addItem('Dragon longsword', 1, 1)
	.addItem('Adamant boots', 1, 1)
	.addItem('Dragon med helm', 1, 1)

	/* Food and potions */
	.addItem('Mushroom potato', [4, 6], 10)
	.addItem('Saradomin brew(4)', 2, 8)
	.addItem(
		[
			['Magic potion(2)', 1],
			['Ranging potion(2)', 1],
			['Super combat potion(2)', 1]
		],
		1,
		6
	)
	.addItem('Prayer potion(4)', [1, 2], 4)

	/* Resources */
	.addItem('Gold ore', [40, 75], 7)
	.addItem('Adamantite bar', [25, 40], 6)
	.addItem('Coal', [180, 250], 6)
	.addItem('Gold bar', [37, 50], 6)
	.addItem('Mithril bar', [35, 45], 6)
	.addItem('Runite ore', [3, 6], 4)
	.addItem('Runite bar', [3, 5], 3)

	/* Other */
	.addItem('Coins', [10000, 20000], 10)
	.addItem('Chaos rune', [100, 150], 8)
	.addItem('Coins', 25000, 5)
	.addItem('Crystal key', 1, 5)
	.addItem('Death rune', [60, 100], 5)
	.addItem('Dragon dart tip', [15, 25], 4)
	.addItem('Diamond bolt tips', [100, 150], 2)
	.addItem('Dragonstone bolt tips', [20, 40], 2)
	.addItem('Onyx bolt tips', [5, 10], 2)
	.addItem('Dragon arrowtips', [50, 150], 1);

export const GrotesqueGuardiansTable = new LootTable()
	.every(GrotesqueGuardians2Table, 2)
	.every('Granite dust', [50, 100])
	.tertiary(3000, 'Noon')
	.tertiary(5000, 'Jar of stone')
	.tertiary(230, 'Clue scroll (elite)');

export default new SimpleMonster({
	id: 7850,
	name: 'Grotesque Guardians',
	table: GrotesqueGuardiansTable,
	aliases: ['grotesque guardians', 'grotesque', 'ggs']
});
