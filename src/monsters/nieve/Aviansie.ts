import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import HerbDropTable from '../subtables/HerbDropTable';
import { GemTable } from '../subtables/RareDropTable';

export const AviansieTable = new LootTable()
	.every('Bones')
	.every('Feather', [1, 6])

	/* Runes */
	.addItem('Air rune', 15, 18)
	.addItem('Water rune', 30, 13)
	.addItem('Law rune', 2, 4)
	.addItem('Nature rune', 9, 4)
	.addItem('Chaos rune', 3, 3)
	.addItem('Body rune', 12, 2)
	.addItem('Blood rune', 11, 2)
	.addItem('Mind rune', 5, 1)
	.addItem('Chaos rune', 16, 1)

	/* Herbs */
	.add(HerbDropTable, undefined, 15)

	/* Materials */
	.addItem('Adamantite bar', 4, 30)
	.addItem('Silver ore', 1, 10)
	.addItem('Runite limbs', 1, 1)

	/* Other */
	.add('Rune dagger(p+)', 1, 11)
	.add('Antipoison(3)', 5, 5)
	.add('Swordfish', 5, 2)

	/* Rdt */
	.add(GemTable, undefined, 3)

	/* Tertiary */
	.tertiary(35, 'Ensouled aviansie head')
	.tertiary(128, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 3619,
	name: 'Aviansie',
	table: AviansieTable,
	aliases: ['aviansie', 'avi']
});
