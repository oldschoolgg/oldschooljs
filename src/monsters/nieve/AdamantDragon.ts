import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import RareDropTable from '../subtables/RareDropTable';
import UsefulHerbTable from '../subtables/UsefulHerbTable';

export const AdamantDragonTable = new LootTable()
	.every('Dragon bones')
	.every('Adamantite bar', 2)

	/*Weapons and armour */
	.addItem('Adamant platebody', 1, 9)
	.addItem('Rune mace', 1, 7)
	.addItem('Rune scimitar', 1, 7)
	.addItem('Dragon med helm', 1, 1)
	.addItem('Dragon platelegs', 1, 1)
	.addItem('Dragon plateskirt', 1, 1)

	/* Runes and ammunition */
	.addItem('Adamant arrow', [30, 40], 8)
	.addItem('Wrath rune', [10, 30], 8)
	.addItem('Chaos rune', [60, 120], 7)
	.addItem('Death rune', [30, 60], 7)

	/* Herbs */
	.add(UsefulHerbTable, 1, 8)

	/* Materials */
	.addItem('Adamant bolts(unf)', [20, 40], 11)
	.addItem('Adamant javelin heads', [40, 50], 8)
	.addItem('Diamond', [1, 3], 7)
	.addItem('Dragon javelin heads', [20, 30], 7)
	.addItem('Adamantite ore', [8, 20], 6)
	.addItem('Adamantite bar', [5, 35], 4)
	.addItem('Dragon bolts (unf)', [15, 20], 1)

	/* Other */
	.add('Wrath talisman', 1, 1)

	/* Rdt */
	.add(RareDropTable, 1, 1)

	/* Tertiary */
	.tertiary(320, 'Clue scroll (elite)')
	.tertiary(1000, 'Dragon limbs')
	.tertiary(5000, 'Dragon metal slice')
	.tertiary(9000, 'Draconic visage');

export default new SimpleMonster({
	id: 8030,
	name: 'Adamant Dragon',
	table: AdamantDragonTable,
	aliases: ['adamanant dragon', 'addy dragon']
});
