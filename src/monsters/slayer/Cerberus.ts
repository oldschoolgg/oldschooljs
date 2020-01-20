import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import RareDropTable from '../subtables/RareDropTable';

const CerberusUniqueTable = new LootTable()
	.add('Primordial crystal')
	.add('Pegasian crystal')
	.add('Eternal crystal')
	.add('Smouldering stone');

export const CerberusTable = new LootTable()
	.every('Ashes')
	.add(CerberusUniqueTable)
	.tertiary(100, 'Clue scroll (elite)')
	.tertiary(2000, 'Jar of souls')
	.tertiary(3000, 'Hellpuppy')

	/* Weapons and armour */
	.addItem('Rune platebody', 1, 5)
	.addItem('Rune chainbody', 1, 4)
	.addItem('Rune 2h sword', 1, 4)
	.addItem(`Black d'hide body`, 1, 3)
	.addItem('Rune axe', 1, 3)
	.addItem('Rune pickaxe', 1, 3)
	.addItem('Battlestaff', 6, 3)
	.addItem('Rune full helm', 1, 3)
	.addItem('Lava battlestaff', 1, 2)
	.addItem('Rune halberd', 1, 2)

	/* Runes and ammunition */
	.addItem('Fire rune', 300, 6)
	.addItem('Soul rune', 100, 6)
	.addItem('Pure essence', 300, 5)
	.addItem('Blood rune', 60, 4)
	.addItem('Cannonball', 50, 4)
	.addItem('Runite bolts (unf)', 40, 4)
	.addItem('Death rune', 100, 3)

	/* Other */
	.addItem('Coal', 120, 6)
	.addItem('Super restore(4)', 2, 6)
	.addItem('Summer pie', 3, 6)
	.addItem('Coins', [10000, 20000], 5)
	.addItem('Dragon Bones', 20, 5)
	.addItem('Unholy symbol', 1, 5)
	.addItem('Wine of zamorak', 15, 5)
	.addItem('Ashes', 50, 4)
	.addItem('Fire orb', 20, 4)
	.addItem('Grimy Torstol', 6, 4)
	.addItem('Runite ore', 5, 3)
	.addItem('Uncut diamond', 5, 3)
	.addItem('Key master teleport', 3, 2)
	.addItem('Torstol seed', 3, 2)

	.add(RareDropTable, undefined, 3);

export default new SimpleMonster({ id: 5862, name: 'Cerberus', table: CerberusTable });
