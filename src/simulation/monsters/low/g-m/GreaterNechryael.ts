import LootTable from '../../../../structures/LootTable';
import SimpleMonster from '../../../../structures/SimpleMonster';
import HerbDropTable from '../../../subtables/HerbDropTable';
import { GemTable } from '../../../subtables/RareDropTable';
import RareSeedTable from '../../../subtables/RareSeedTable';

const GreaterNechryaelTable = new LootTable()
	.every('Ashes')

	/* Weapons and armor */
	.add('Adamant kiteshield', 1, 7)
	.add('Rune axe', 1, 7)
	.add('Rune sq shield', 1, 7)
	.add('Adamant battleaxe', 1, 5)
	.add('Rune med helm', 1, 4)
	.add('Rune full helm', 1, 3)
	.add('Mystic air staff', 1, 2)
	.add('Rune boots', 1, 1)
	.add('Rune chainbody', 1, 1)

	/* Runes */
	.add('Death rune', 23, 12)
	.add('Blood rune', 20, 10)
	.add('Chaos rune', 50, 10)
	.add('Air rune', 150, 6)
	.add('Soul rune', 25, 5)

	/* Herbs */
	.add(HerbDropTable, 1, 7)

	/* Seeds */
	.add(RareSeedTable, 2, 5)

	/* Other */
	.add('Lobster', 1, 10)
	.add('Coins', [2000, 2500], 8)
	.add('Gold bar', 5, 7)
	.add('Tuna', 2, 6)
	.add('Wine of zamorak', 3, 2)

	/* Gem drop table */
	.add(GemTable, 1, 3)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 7278,
	name: 'Greater Nechryael',
	table: GreaterNechryaelTable,
	aliases: ['greater nechryael', 'greater nech']
});
