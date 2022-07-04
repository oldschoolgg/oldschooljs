import LootTable from '../../../../structures/LootTable';
import SimpleMonster from '../../../../structures/SimpleMonster';
import RareDropTable, { GemTable } from '../../../subtables/RareDropTable';

const MithrilDragonTable = new LootTable()
	.every('Dragon bones')
	.every('Mithril bar', 3)

	/* Weapons and armour */
	.add('Rune battleaxe', 1, 12)
	.add('Rune dart(p)', 14, 7)
	.add('Rune knife', 8, 3)
	.add('Rune mace', 1, 3)
	.add('Rune spear', 1, 2)
	.add('Rune full helm', 1, 1)
	.oneIn(32_768, 'Dragon full helm')

	/* Runes and ammunition */
	.add('Blood rune', 27, 19)
	.add('Rune javelin', 8, 14)
	.add('Runite bolts', [10, 21], 6)
	.add('Soul rune', 10, 5)
	.add('Rune arrow', 8, 3)

	/* Consumables */
	.add('Shark', 1, 6)
	.add('Prayer mix(2)', 1, 2)
	.add('Shark', 6, 2)
	.add('Superattack mix(2)', 1, 2)
	.add('Super def. mix(2)', 1, 2)
	.add('Super str. mix(2)', 1, 2)

	/* Other */
	.add('Coins', 600, 17)
	.add('Coins', 876, 7)
	.add('Dragon javelin heads', 15, 7)
	.add('Chewed bones', 1, 3)
	.add('Runite bar', 2, 3)

	/* RDT */
	.add(RareDropTable, 1, 1)
	.add(GemTable, 1, 4)

	/* Tertiary */
	.tertiary(350, 'Clue scroll (elite)')
	.tertiary(10_000, 'Draconic visage');

export default new SimpleMonster({
	id: 2919,
	name: 'Mithril Dragon',
	table: MithrilDragonTable,
	aliases: ['mithril dragon', 'mith dragon', 'mith drags', 'mithril dragons']
});
