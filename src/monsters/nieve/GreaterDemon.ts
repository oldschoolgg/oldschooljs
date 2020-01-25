import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import { GemTable } from '../subtables/RareDropTable';

export const GreaterDemonTable = new LootTable()
	.every('Ashes')

	/* Weapons and armor */
	.addItem('Steel 2h sword', 1, 4)
	.addItem('Steel axe', 1, 3)
	.addItem('Steel battleaxe', 1, 3)
	.addItem('Mithril kiteshield', 1, 1)
	.addItem('Adamant platelegs', 1, 1)
	.addItem('Rune full helm', 1, 1)

	/* Runes and ammunition */
	.addItem('Fire rune', 75, 8)
	.addItem('Chaos rune', 15, 3)
	.addItem('Fire rune', 37, 1)
	.addItem('Death rune', 5, 3)

	/* Coins */
	.addItem('Coins', 132, 40)
	.addItem('Coins', 44, 29)
	.addItem('Coins', 220, 10)
	.addItem('Coins', 11, 7)
	.addItem('Coins', 460, 1)

	/* Other */
	.addItem('Tuna', 1, 3)
	.addItem('Gold bar', 1, 2)
	.addItem('Thread', 10, 1)

	/* Rdt */
	.add(GemTable, undefined, 5)

	/* Tertiary */
	.tertiary(40, 'Ensouled demon head')
	.tertiary(128, 'Clue scroll (hard)')

	/* Catacombs tertiary */
	.tertiary(246, 'Ancient shard')
	.tertiary(370, 'Dark totem base')
	.tertiary(370, 'Dark totem middle')
	.tertiary(370, 'Dark totem top');
export default new SimpleMonster({ id: 2025, name: 'Greater Demon', table: GreaterDemonTable });
