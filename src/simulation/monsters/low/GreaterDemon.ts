import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { GemTable } from '../../subtables/RareDropTable';

const GreaterDemonTable = new LootTable({ limit: 128 })
	.every('Ashes')

	/* Weapons and armor */
	.add('Steel 2h sword', 1, 4)
	.add('Steel axe', 1, 3)
	.add('Steel battleaxe', 1, 3)
	.add('Mithril kiteshield', 1, 1)
	.add('Adamant platelegs', 1, 1)
	.add('Rune full helm', 1, 1)

	/* Runes and ammunition */
	.add('Fire rune', 75, 8)
	.add('Chaos rune', 15, 3)
	.add('Fire rune', 37, 1)
	.add('Death rune', 5, 3)

	/* Coins */
	.add('Coins', 132, 40)
	.add('Coins', 44, 29)
	.add('Coins', 220, 10)
	.add('Coins', 11, 7)
	.add('Coins', 460, 1)

	/* Other */
	.add('Tuna', 1, 3)
	.add('Gold bar', 1, 2)
	.add('Thread', 10, 1)

	/* Rdt */
	.add(GemTable, 1, 5)

	/* Tertiary */
	.tertiary(40, 'Ensouled demon head')
	.tertiary(128, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 2025,
	name: 'Greater Demon',
	table: GreaterDemonTable,
	aliases: ['greater demon', 'greater']
});
