import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { GemTable } from '../../subtables/RareDropTable';
import UsefulHerbTable from '../../subtables/UsefulHerbTable';

const BasiliskKnightTable = new LootTable(52)
	.every('Big bones')

	/*Weapons and armour */
	.addItem('Rune axe', 1, 2)
	.addItem('Adamant platelegs', 1, 1)
	.addItem('Adamant kiteshield', 1, 1)
	.addItem('Rune battleaxe', 1, 1)
	.addItem('Rune dagger', 1, 1)
	.addItem('Rune scimitar', 1, 1)
	.addItem('Rune spear', 1, 1)
	.addItem('Rune med helm', 1, 1)

	/* Runes and ammunition */
	.addItem('Astral rune', [15, 35], 6)
	.addItem('Nature rune', [15, 30], 6)
	.addItem('Law rune', [20, 30], 6)
	.addItem('Death rune', [10, 25], 3)
	.addItem('Blood rune', [8, 20], 3)

	/* Herbs */
	.add(UsefulHerbTable, 1, 3)

	/* Other */
	.addItem('Coins', [500, 2498], 7)
	.addItem('Adamantite ore', [1, 2], 1)

	/* Rdt */
	.add(GemTable, 1, 8)

	/* Tertiary */
	.tertiary(192, 'Clue scroll (hard)')
	.tertiary(256, 'Mystic hat (light)')
	.tertiary(400, 'Long bone')
	.tertiary(1000, 'Basilisk head')
	.tertiary(1000, 'Basilisk jaw')
	.tertiary(5013, 'Curved bone');

export default new SimpleMonster({
	id: 9293,
	name: 'Basilisk Knight',
	table: BasiliskKnightTable,
	aliases: ['basilisk knight', 'bas knight']
});
