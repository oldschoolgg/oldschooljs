import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { GemTable } from '../../subtables/RareDropTable';

export const SpiritualWarriorTable = new LootTable(127)

	/* Weapons */
	.addItem('Steel longsword', 1, 15)
	.addItem('Mithril spear(p)', 1, 9)
	.addItem('Iron scimitar', 1, 8)
	.addItem('Mithril axe', 1, 8)
	.addItem('Steel sword', 1, 7)
	.addItem('Mithril mace', 1, 7)
	.addItem('Black warhammer', 1, 5)
	.addItem('Iron sword', 1, 3)
	.addItem('Black dagger', 1, 2)
	.addItem('Adamant battleaxe', 1, 2)
	.addItem('Adamant 2h sword', 1, 1)
	.addItem('Rune longsword', 1, 1)
	.addItem('Rune halberd', 1, 1)

	/* Armor */
	.addItem('Steel chainbody', 1, 18)
	.addItem('Mithril platelegs', 1, 11)
	.addItem('Leather gloves', 1, 9)
	.addItem('Adamant full helm', 1, 8)
	.addItem('Iron plateskirt', 1, 4)
	.addItem('Black kiteshield', 1, 3)
	.addItem('Rune kiteshield', 1, 1)

	/* Rdt */
	.add(GemTable, 1, 4)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 2210,
	name: 'Spiritual Warrior',
	table: SpiritualWarriorTable,
	aliases: ['spiritual warrior']
});
