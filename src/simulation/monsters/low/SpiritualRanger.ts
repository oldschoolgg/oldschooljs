import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

const SpiritualRangerTable = new LootTable({ limit: 128 })

	/* Weapons */
	.add('Oak shortbow', 1, 8)
	.add('Steel crossbow', 1, 5)
	.add('Maple longbow', 1, 5)
	.add('Magic shortbow', [1, 2], 3)

	/* Runes and ammunition */
	.add('Mithril arrow(p+)', 1, 8)
	.add('Steel arrow', [1, 12], 8)
	.add('Iron arrow', [1, 24], 8)
	.add('Bronze arrow', [1, 58], 8)
	.add('Bronze arrow(p+)', 1, 8)
	.add('Body rune', [1, 12], 5)
	.add('Rune arrow', [1, 5], 5)
	.add('Adamant arrow', [1, 15], 5)
	.add('Adamant arrow(p++)', 3, 2)
	.add('Adamant fire arrow', [3, 4], 2)

	/* Other */
	.add('Headless arrow', 12, 8)
	.add('Iron arrowtips', 5, 8)
	.add('Adamant arrowtips', [1, 13], 8)
	.add('Bow string', 7, 8)
	.add('Broken arrow', 1, 8)
	.add('Oak longbow (u)', [1, 12], 8)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 2211,
	name: 'Spiritual Ranger',
	table: SpiritualRangerTable,
	aliases: ['spiritual ranger']
});
