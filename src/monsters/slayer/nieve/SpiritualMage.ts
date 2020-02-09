import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { GemTable } from '../../subtables/RareDropTable';

export const SpiritualMageTable = new LootTable()

	/* Armour */
	.addItem('Dragon boots', 1, 1)

	/* Elemental runes */
	.addItem('Air rune', 30, 9)
	.addItem('Water rune', 15, 8)
	.addItem('Water rune', 50, 7)
	.addItem('Air rune', 50, 2)
	.addItem('Fire rune', 65, 2)

	/* Combination runes */
	.addItem('Dust rune', 15, 11)
	.addItem('Mud rune', 20, 7)
	.addItem('Mist rune', 20, 6)

	/* Catalytic runes */
	.addItem('Chaos rune', 10, 18)
	.addItem('Astral rune', 15, 9)
	.addItem('Death rune', 15, 8)
	.addItem('Nature rune', 25, 7)
	.addItem('Mind rune', 50, 4)
	.addItem('Nature rune', 18, 4)
	.addItem('Body rune', 35, 3)
	.addItem('Law rune', 15, 2)
	.addItem('Body rune', 25, 2)
	.addItem('Blood rune', 10, 2)
	.addItem('Chaos rune', 25, 1)

	/* Other */
	.addItem('Pure essence', 90, 6)
	.addItem('Antipoison(3)', 5, 5)

	/* Rdt */
	.add(GemTable, 1, 2)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 2212,
	name: 'Spiritual Mage',
	table: SpiritualMageTable,
	aliases: ['spiritual mage']
});
