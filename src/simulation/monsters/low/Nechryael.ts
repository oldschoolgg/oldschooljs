import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import RareSeedTable from '../../subtables/RareSeedTable';
import RareDropTable, { GemTable } from '../../subtables/RareDropTable';

const NechryaelTable = new LootTable(116)
	.every('Ashes')

	/* Weapons and armor */
	.add('Adamant platelegs', 1, 4)
	.add('Rune 2h sword', 1, 4)
	.add('Rune full helm', 1, 3)
	.add('Adamant kiteshield', 1, 2)
	.add('Rune boots', 1, 1)

	/* Runes*/
	.add('Chaos rune', 37, 8)
	.add('Death rune', 5, 6)
	.add('Death rune', 10, 6)
	.add('Law rune', [25, 35], 5)
	.add('Blood rune', [15, 20], 4)

	/* Seeds */
	.add('Limpwurt seed', 1, 6)
	.add(RareSeedTable, 2, 18)

	/* Coins */
	.add('Coins', [1000, 1499], 13)
	.add('Coins', [1500, 2000], 11)
	.add('Coins', [2500, 2999], 6)
	.add('Coins', [3000, 3500], 3)
	.add('Coins', [500, 999], 2)
	.add('Coins', 5000, 1)

	/* Other */
	.add('Soft clay', 25, 4)
	.add('Tuna', 1, 3)

	/* Rdt */
	.add(RareDropTable, 1, 1)
	.add(GemTable, 1, 5)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 8,
	name: 'Nechryael',
	table: NechryaelTable,
	aliases: ['nechryael', 'nech']
});
