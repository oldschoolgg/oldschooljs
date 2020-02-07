import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import RareDropTable from '../subtables/RareDropTable';
import UsefulHerbTable from '../subtables/UsefulHerbTable';

export const RuneDragonTable = new LootTable()
	.every('Dragon bones')
	.every('Runite bar')

	/*Weapons and armour */
	.addItem('Rune platebody', 1, 9)
	.addItem('Rune longsword', 1, 8)
	.addItem('Rune mace', 1, 7)
	.addItem('Rune scimitar', 1, 7)
	.addItem('Rune warhammer', 1, 7)
	.addItem('Rune platelegs', 1, 6)
	.addItem('Dragon platelegs', 1, 1)
	.addItem('Dragon plateskirt', 1, 1)
	.addItem('Dragon med helm', 1, 1)

	/* Runes and ammunition */
	.addItem('Rune arrow', [30, 40], 8)
	.addItem('Wrath rune', [30, 50], 8)
	.addItem('Chaos rune', [75, 150], 7)
	.addItem('Death rune', [50, 100], 7)

	/* Herbs */
	.add(UsefulHerbTable, 1, 8)

	/* Other */
	.addItem('Rune javelin heads', [20, 30], 10)
	.addItem('Runite bolts (unf)', [20, 30], 11)
	.addItem('Dragonstone', 1, 7)
	.addItem('Runite ore', [2, 5], 6)
	.addItem('Dragon javelin heads', [30, 40], 5)
	.addItem('Dragon bolts (unf)', [20, 40], 1)
	.addItem('Wrath talisman', 1, 1)

	/* Rdt */
	.add(RareDropTable, 1, 1)

	/* Tertiary */
	.tertiary(300, 'Clue scroll (elite)')
	.tertiary(800, 'Dragon limbs')
	.tertiary(5000, 'Dragon metal lump')
	.tertiary(8000, 'Draconic visage');

export default new SimpleMonster({
	id: 8027,
	name: 'Rune Dragon',
	table: RuneDragonTable,
	aliases: ['rune dragon']
});
