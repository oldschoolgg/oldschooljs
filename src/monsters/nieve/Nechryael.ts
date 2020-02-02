import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import RareSeedTable from '../subtables/RareSeedTable';
import RareDropTable, { GemTable } from '../subtables/RareDropTable';

export const NechryaelTable = new LootTable(116)
	.every('Ashes')

	/* Weapons and armor */
	.addItem('Adamant platelegs', 1, 4)
	.addItem('Rune 2h sword', 1, 4)
	.addItem('Rune full helm', 1, 3)
	.addItem('Adamant kiteshield', 1, 2)
	.addItem('Rune boots', 1, 1)

	/* Runes*/
	.addItem('Chaos rune', 37, 8)
	.addItem('Death rune', 5, 6)
	.addItem('Death rune', 10, 6)
	.addItem('Law rune', [25, 35], 5)
	.addItem('Blood rune', [15, 20], 4)

	/* Seeds */
	.addItem('Limpwurt seed', 1, 6)
	.add(RareSeedTable, 2, 18)

	/* Coins */
	.addItem('Coins', [1000, 1499], 13)
	.addItem('Coins', [1500, 2000], 11)
	.addItem('Coins', [2500, 2999], 6)
	.addItem('Coins', [3000, 3500], 3)
	.addItem('Coins', [500, 999], 2)
	.addItem('Coins', 5000, 1)

	/* Other */
	.addItem('Soft clay', 25, 4)
	.addItem('Tuna', 1, 3)

	/* Rdt */
	.add(RareDropTable, 1)
	.add(GemTable, 5)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 8,
	name: 'Nechryael',
	table: NechryaelTable,
	aliases: ['nechryael', 'nech']
});
