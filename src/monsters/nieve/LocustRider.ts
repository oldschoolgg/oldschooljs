import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import RareDropTable, { GemTable } from '../subtables/RareDropTable';
import HerbDropTable from '../subtables/HerbDropTable';
import RareSeedTable from '../subtables/RareSeedTable';

export const LocustRiderTable = new LootTable(128)
	.every('Bones')

	/* Weapons and armor */
	.addItem('Adamant kiteshield', 1, 3)
	.addItem('Battlestaff', 3, 2)
	.addItem('Rune dagger', 1, 2)
	.addItem('Rune mace', 1, 1)
	.addItem('Rune sq shield', 1, 1)

	/* Runes and ammunition */
	.addItem('Adamant arrow', 36, 4)
	.addItem('Blood rune', 18, 4)
	.addItem('Fire rune', 250, 2)
	.addItem('Cosmic rune', 35, 2)
	.addItem('Lava rune', 150, 2)
	.addItem('Rune arrow', 18, 2)

	/* Herbs */
	.add(HerbDropTable, 20)

	/* Seeds */
	.add(RareSeedTable, 2)

	/* Materials */
	.addItem('Raw lobster', 15, 7)
	.addItem('Coal', 32, 6)
	.addItem('Raw bass', 24, 4)
	.addItem('Uncut sapphire', 4, 3)
	.addItem('Adamantite ore', 14, 2)
	.addItem('Desert goat horn', 6, 2)
	.addItem('Mithril bar', 22, 2)

	/* Other */
	.addItem('Coins', [2000, 3000], 32)
	.addItem('Bass', 6, 4)
	.addItem('Waterskin(4)', 1, 1)
	.addItem('Lobster', 5, 1)
	.addItem('Marrentill tar', 80, 1)

	/* Rdt */
	.add(RareDropTable, 1)
	.add(GemTable, 15)

	/* Tertiary */
	.tertiary(200, 'Clue scroll (hard)')
	.tertiary(400, 'Long bone')
	.tertiary(1200, 'Clue scroll (elite)')
	.tertiary(5013, 'Curved bone');

export default new SimpleMonster({
	id: 795,
	name: 'Locust Rider',
	table: LocustRiderTable,
	aliases: ['Locust', 'locust rider']
});
