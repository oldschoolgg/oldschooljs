import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import HerbDropTable from '../../subtables/HerbDropTable';
import { GemTable } from '../../subtables/RareDropTable';

export const BloodveldTable = new LootTable()
	.every('Bones')

	/*Weapons and armour */
	.addItem('Steel axe', 1, 4)
	.addItem('Steel full helm', 1, 4)
	.addItem('Steel scimitar', 1, 2)
	.addItem('Black boots', 1, 1)
	.addItem('Mithril sq shield', 1, 1)
	.addItem('Mithril chainbody', 1, 1)
	.addItem('Rune med helm', 1, 1)

	/* Runes and ammunition */
	.addItem('Fire rune', 60, 8)
	.addItem('Blood rune', 10, 5)
	.addItem('Blood rune', 3, 3)
	.addItem('Blood rune', 30, 1)

	/* Herbs */
	.add(HerbDropTable, 1, 1)

	/* Coins */
	.add('Coins', 120, 30)
	.add('Coins', 40, 29)
	.add('Coins', 200, 10)
	.add('Coins', 10, 7)
	.add('Coins', 450, 1)

	/* Other */
	.addItem(
		[
			['Big bones', 1],
			['Bones', 1]
		],
		1,
		7
	)
	.addItem(
		[
			['Big bones', 3],
			['Bones', 1]
		],
		1,
		3
	)
	.add('Meat pizza', 1, 3)
	.add('Gold ore', 1, 2)

	/* Rdt */
	.add(GemTable, 1, 4)

	/* Tertiary */
	.tertiary(256, 'Clue scroll (hard)')
	.tertiary(35, 'Ensouled bloodveld head');

export default new SimpleMonster({
	id: 484,
	name: 'Bloodveld',
	table: BloodveldTable,
	aliases: ['bloodveld']
});
