import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import { GemTable } from '../subtables/RareDropTable';
import HerbDropTable from '../subtables/HerbDropTable';
import CommonSeedDropTable from '../subtables/CommonSeedDropTable';

export const MountainTrollTable = new LootTable(128)
	.every('Big bones')

	/* Weapons and armour */
	.addItem('Steel med helm', 1, 4)
	.addItem('Black warhammer', 1, 3)
	.addItem('Steel warhammer', 1, 3)
	.addItem('Adamant med helm', 1, 1)
	.addItem('Adamant warhammer', 1, 1)
	.addItem('Mithril sq shield', 1, 1)

	/* Runes */
	.addItem('Earth rune', 60, 8)
	.addItem('Nature rune', 7, 5)
	.addItem('Law rune', 2, 3)
	.addItem('Earth rune', 45, 1)
	.addItem('Earth rune', 25, 1)

	/* Herbs */
	.add(HerbDropTable, 15)

	/* Seeds */
	.add(CommonSeedDropTable, 19)

	/* Other */
	.addItem('Coins', 35, 29)
	.addItem('Coins', 100, 10)
	.addItem('Coins', 8, 7)
	.addItem('Coins', 50, 6)
	.addItem('Coins', 250, 1)

	/* Other */
	.addItem('Coal', 3, 3)
	.addItem('Raw mackerel', 3, 2)

	/* Rdt */
	.add(GemTable, 5)

	/* Tertiary */
	.tertiary(45, 'Ensouled troll head')
	.tertiary(400, 'Long bone')
	.tertiary(5013, 'Curved bone');

export default new SimpleMonster({
	id: 936,
	name: 'MountainTroll',
	table: MountainTrollTable,
	aliases: ['mountain troll']
});
