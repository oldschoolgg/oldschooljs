import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import { GemTable } from '../subtables/RareDropTable';

export const GargoyleTable = new LootTable()

	.tertiary(256, 'Granite maul')
	.tertiary(512, 'Mystic robe top (dark)')

	/* Weapons and armor */
	.addItem('Adamant platelegs', 1, 4)
	.addItem('Rune full helm', 1, 3)
	.addItem('Rune 2h sword', 1, 2)
	.addItem('Adamant boots', 1, 1)
	.addItem('Rune battleaxe', 1, 1)
	.addItem('Rune platelegs', 1, 1)

	/* Runes and ammunition */
	.addItem('Fire rune', 756, 10)
	.addItem('Chaos rune', 30, 8)
	.addItem('Fire rune', 150, 6)
	.addItem('Death rune', 15, 5)

	/* Materials */
	.addItem('Gold ore', [10, 20], 10)
	.addItem('Pure essence', 150, 6)
	.addItem('Steel bar', 15, 6)
	.addItem('Gold bar', [10, 15], 3)
	.addItem('Mithril bar', 15, 2)
	.addItem('Runite ore', 1, 2)

	/* Coins */
	.addItem('Coins', 400, 28)
	.addItem('Coins', [500, 1000], 20)
	.addItem('Coins', 10000, 5)

	/* Rdt */
	.add(GemTable, undefined, 5)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (hard)')
	.tertiary(150, 'Brittle key');

export default new SimpleMonster({
	id: 412,
	name: 'Gargoyle',
	table: GargoyleTable,
	aliases: ['gargoyle', 'garg']
});
