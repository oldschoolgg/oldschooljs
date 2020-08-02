import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

const UniqueTable = new LootTable()
	.add('Amulet of avarice', 1, 2)
	.add("Craw's bow (u)", 1, 1)
	.add("Thammaron's sceptre (u)", 1, 1)
	.add("Viggora's chainmace (u)", 1, 1);

export const RevenantImpTable = new LootTable()
	.every('Revenant ether', [1, 3])
	.oneIn(44000, UniqueTable)

	/* Ancient statuettes */
	.oneIn(7333, 'Ancient emblem')
	.oneIn(8800, 'Ancient totem')
	.oneIn(11000, 'Ancient statuette')
	.oneIn(14667, 'Ancient crystal')
	.oneIn(22000, 'Ancient medallion')
	.oneIn(44000, 'Ancient effigy')
	.oneIn(44000, 'Ancient relic')

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
	.oneIn(11000, 'Maigc seed', [5, 19])

	/* Other */
	.add('Coins', [1, 51], 3145)
	.add('Revenant cave teleport', 1, 7)
	.add('Super restore(4)', [3, 5], 4)
	.add('Dragonstone bolt tips', [40, 70], 4)
	.add('Onyx bolt tips', [5, 10], 4)
	.add('Law rune', [80, 120], 3)
	.add('Death rune', [60, 100], 3)
	.add('Blood rune', [60, 100], 3);

export default new SimpleMonster({
	id: 7881,
	name: 'Revenant imp',
	table: RevenantImpTable,
	aliases: ['revenant imp']
});
