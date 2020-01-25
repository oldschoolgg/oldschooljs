import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import RareDropTable from '../subtables/RareDropTable';

export const AdamantDragonTable = new LootTable()
	.every('Dragon bones')
	.every('Adamantite bar', 2)

	/*Weapons and armour */
	.addItem('Adamant platebody', 1, 18)
	.addItem('Rune mace', 1, 14)
	.addItem('Rune scimitar', 1, 14)
	.addItem('Dragon med helm', 1, 2)
	.addItem('Dragon platelegs', 1, 2)
	.addItem('Dragon plateskirt', 1, 2)

	/* Runes and ammunition */
	.addItem('Adamant arrow', [30, 40], 16)
	.addItem('Wrath rune', [10, 30], 16)
	.addItem('Chaos rune', [60, 120], 14)
	.addItem('Death rune', [30, 60], 14)

	/* Seeds */
	.addItem('Grimy avantoe', 1, 5)
	.addItem('Grimy ranarr weed', 1, 4)
	.addItem('Grimy snapdragon', 1, 4)
	.addItem('Grimy torstol', 1, 3)

	/* Materials */
	.addItem('Adamant bolts(unf)', [20, 40], 22)
	.addItem('Adamant javelin heads', [40, 50], 16)
	.addItem('Diamond', [1, 3], 14)
	.addItem('Dragon javelin heads', [20, 30], 14)
	.addItem('Adamantite ore', [8, 20], 12)
	.addItem('Adamantite bar', [5, 35], 8)
	.addItem('Dragon bolts (unf)', [15, 20], 2)

	/* Other */
	.add('Wrath talisman', 1, 2)

	/* Rdt */
	.add(RareDropTable, undefined, 2)

	/* Tertiary */
	.tertiary(320, 'Clue scroll (elite)')
	.tertiary(1000, 'Dragon limbs')
	.tertiary(5000, 'Dragon metal slice')
	.tertiary(9000, 'Draconic visage');

/* Need to add adamant dragon id */
export default new SimpleMonster({
	id: 124,
	name: 'Adamant Dragon',
	table: AdamantDragonTable,
	aliases: ['adamanant dragon', 'addy dragon']
});
