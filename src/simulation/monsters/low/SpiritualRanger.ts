import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

const SpiritualRangerTable = new LootTable(128)

	/* Weapons */
	.addItem('Oak shortbow', 1, 8)
	.addItem('Steel crossbow', 1, 5)
	.addItem('Maple longbow', 1, 5)
	.addItem('Magic shortbow', [1, 2], 3)

	/* Runes and ammunition */
	.addItem('Mithril arrow(p+)', 1, 8)
	.addItem('Steel arrow', [1, 12], 8)
	.addItem('Iron arrow', [1, 24], 8)
	.addItem('Bronze arrow', [1, 58], 8)
	.addItem('Bronze arrow(p+)', 1, 8)
	.addItem('Body rune', [1, 12], 5)
	.addItem('Rune arrow', [1, 5], 5)
	.addItem('Adamant arrow', [1, 15], 5)
	.addItem('Adamant arrow(p++)', 3, 2)
	.addItem('Adamant fire arrow', [3, 4], 2)

	/* Other */
	.addItem('Headless arrow', 12, 8)
	.addItem('Iron arrowtips', 5, 8)
	.addItem('Adamant arrowtips', [1, 13], 8)
	.addItem('Bow string', 7, 8)
	.addItem('Broken arrow', 1, 8)
	.addItem('Oak longbow (u)', [1, 12], 8)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 2211,
	name: 'Spiritual Ranger',
	table: SpiritualRangerTable,
	aliases: ['spiritual ranger']
});
