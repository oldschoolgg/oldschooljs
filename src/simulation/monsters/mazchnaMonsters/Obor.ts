import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { GemTable } from '../../subtables/RareDropTable';

export const OborTable = new LootTable()
	.every('Big bones')
	.every('Clue scroll (beginner)')
	.every('Ensouled giant head')

	/* Weapons and armour */
	.add('Rune med helm', 1, 6)
	.add('Rune full helm', 1, 5)
	.add('Rune longsword', 1, 5)
	.add('Rune battleaxe', 1, 4)
	.add('Rune kiteshield', 1, 3)
	.add('Rune chainbody', 1, 3)
	.add('Rune platelegs', 1, 3)
	.add('Rune plateskirt', 1, 3)
	.add('Rune 2h sword', 1, 3)
	.add('Hill giant club', 1, 1)

	/* Runes */
	.add('Law rune', [50, 99], 12)
	.add('Cosmic rune', [60, 119], 12)
	.add('Chaos rune', [100, 199], 10)
	.add('Death rune', [40, 79], 10)
	.add('Nature rune', [40, 79], 7)

	/* Other */
	.add('Coins', [10000, 20000], 10)
	.add('Limpwurt root', 20, 8)
	.add('Big bone', 50, 8)
	.add('Uncut ruby', 5, 5)
	.add('Uncut diamond', 1, 5)

	/* Tertiary */
	.tertiary(16, 'Giant key')
	.tertiary(400, 'Long bone')
	.tertiary(5000, 'Giant champion scroll')
	.tertiary(5013, 'Curved bone');

export default new SimpleMonster({
	id: 7416,
	name: 'Obor',
	table: OborTable,
	aliases: ['obor']
});
