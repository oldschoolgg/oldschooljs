import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import RareDropTable, { GemTable } from '../subtables/RareDropTable';

export const MithrilDragonTable = new LootTable()
	.every('Dragon bones')
	.every('Mithril bar', 3)

	/*Weapons and armour */
	.addItem('Rune battleaxe', 1, 12)
	.addItem('Rune dart(p)', 14, 7)
	.addItem('Rune knife', 8, 3)
	.addItem('Rune mace', 1, 3)
	.addItem('Rune spear', 1, 2)
	.addItem('Rune full helm', 1, 1)
	.oneIn(32768, 'Dragon full helm')

	/* Runes and ammunition */
	.addItem('Blood rune', 27, 19)
	.addItem('Rune javelin', 8, 14)
	.addItem('Runite bolts', [10, 21], 6)
	.addItem('Soul rune', 10, 5)
	.addItem('Rune arrow', 8, 3)

	/* Consumables */
	.addItem('Shark', 1, 6)
	.addItem('Prayer mix(2)', 1, 2)
	.addItem('Shark', 6, 2)
	.addItem('Superattack mix(2)', 1, 2)
	.addItem('Super def. mix(2)', 1, 2)
	.addItem('Super str. mix(2)', 1, 2)

	/* Other */
	.addItem('Coins', 600, 17)
	.addItem('Coins', 876, 7)
	.addItem('Dragon javelin heads', 15, 7)
	.addItem('Chewed bones', 1, 3)
	.addItem('Runite bar', 2, 3)

	/* Rdt */
	.add(RareDropTable, 1, 1)
	.add(GemTable, 1, 4)

	/* Tertiary */
	.tertiary(350, 'Clue scroll (elite)')
	.tertiary(10000, 'Draconic visage');

export default new SimpleMonster({
	id: 2919,
	name: 'Mithril Dragon',
	table: MithrilDragonTable,
	aliases: ['mithril dragon', 'mith dragon']
});
