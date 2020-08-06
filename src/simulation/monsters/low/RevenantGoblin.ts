import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

const UniqueTable = new LootTable()
	.add('Amulet of avarice', 1, 2)
	.add("Craw's bow (u)", 1, 1)
	.add("Thammaron's sceptre (u)", 1, 1)
	.add("Viggora's chainmace (u)", 1, 1);

export const RevenantGoblinTable = new LootTable()
	.every('Revenant ether', [1, 4])
	.oneIn(29320, UniqueTable)

	/* Ancient statuettes */
	.oneIn(4887, 'Ancient emblem')
	.oneIn(5864, 'Ancient totem')
	.oneIn(7330, 'Ancient statuette')
	.oneIn(9773, 'Ancient crystal')
	.oneIn(14660, 'Ancient medallion')
	.oneIn(29320, 'Ancient effigy')
	.oneIn(29320, 'Ancient relic')

	/* Weapons and armour */
	.add('Bracelet of ethereum (uncharged)', 1, 15)
	.add('Battlestaff', 3, 5)
	.add('Rune full helm', 1, 2)
	.add('Rune platebody', 1, 2)
	.add('Rune platelegs', 1, 2)
	.add('Rune kiteshield', 1, 2)
	.add('Rune warhammer', 1, 2)
	.add('Dragon platelegs', 1, 1)
	.add('Dragon plateskirt', 1, 1)
	.add('Dragon dagger', 1, 1)
	.add('Dragon longsword', 1, 1)
	.add('Dragon med helm', 1, 1)

	/* Resources */
	.add('Coal', [50, 100], 6)
	.add('Adamantite bar', [8, 12], 6)
	.add('Runite ore', [3, 6], 6)
	.add('Runite bar', [3, 5], 6)
	.add('Black dragonhide', [10, 15], 6)
	.add('Mahogany plank', [15, 25], 5)
	.add('Manta ray', [30, 50], 3)
	.add('Yew logs', [60, 100], 3)
	.add('Magic logs', [15, 25], 2)
	.add('Uncut dragonstone', [5, 7], 1)
	.oneIn(7330, 'Magic seed', [5, 19])

	/* Other */
	.add('Coins', [1, 76], 1745)
	.add('Revenant cave teleport', 1, 7)
	.add('Super restore(4)', [3, 5], 4)
	.add('Dragonstone bolt tips', [40, 70], 4)
	.add('Onyx bolt tips', [5, 10], 4)
	.add('Law rune', [80, 120], 3)
	.add('Death rune', [60, 100], 3)
	.add('Blood rune', [60, 100], 3);

export default new SimpleMonster({
	id: 7931,
	name: 'Revenant goblin',
	table: RevenantGoblinTable,
	aliases: ['revenant goblin']
});