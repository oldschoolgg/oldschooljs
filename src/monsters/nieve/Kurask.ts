import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import HerbDropTable from '../subtables/HerbDropTable';
import { GemTable } from '../subtables/RareDropTable';
import RareSeedTable from '../subtables/RareSeedTable';

export const KuraskHerbTable = new LootTable().add(HerbDropTable);

export const KuraskTable = new LootTable(124)
	.every('Bones')

	/* Weapons and armor */
	.addItem('Mithril kiteshield', 1, 3)
	.addItem('Rune longsword', 1, 3)
	.addItem('Adamant platebody', 1, 3)
	.addItem('Rune axe', 1, 3)
	.oneIn(384, 'Leaf-bladed sword')
	.oneIn(512, 'Mystic robe top (light)')
	.oneIn(1026, 'Leaf-bladed battleaxe')

	/* Runes */
	.addItem('Nature rune', 10, 10)
	.addItem('Nature rune', 15, 7)
	.addItem('Nature rune', 30, 4)

	/* Herbs */
	.add(HerbDropTable, 3, 18)

	/* Seeds */
	.add(RareSeedTable, 15)

	/* Other */
	.addItem('Coins', [2000, 5000], 16)
	.addItem('Flax', 100, 6)
	.addItem('White berries', 12, 6)
	.addItem('Coins', 10000, 5)
	.addItem('Big bones', 20, 5)
	.addItem('Papaya fruit', 10, 4)
	.addItem('Coconut', 10, 4)

	/* Rdt */
	.add(GemTable, 6)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (hard)')
	.tertiary(3000, 'Kurask head');

export default new SimpleMonster({
	id: 123,
	name: 'Kurask',
	table: KuraskTable,
	aliases: ['kurask']
});
