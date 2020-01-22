import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import GemTable from '../subtables/GemTable';
import HerbDropTable from '../subtables/HerbDropTable';
import CommonSeedDropTable from '../subtables/CommonSeedDropTable';

export const JogreDropTable = new LootTable(128)
	.every('Jogre bones')
	.tertiary(4, 'Jogre bone')
	.tertiary(129, 'Clue scroll (medium)')
	.tertiary(5000, 'Jogre champion scroll')

	/* Weapons and armour */
	.addItem('Bronze spear', 1, 30)
	.addItem('Iron spear', 1, 4)

	/* Runes and ammunition */
	.addItem('Nature rune', 2, 10)
	.addItem('Nature rune', 10, 2)
	.addItem('Nature rune', 5, 2)
	.addItem('Steel javelin', 5, 2)

	/* Other */
	.addItem('Trading sticks', 22, 27)
	.addItem('Pineapple', 2, 8)
	.addItem('Knife', 1, 5)
	.addItem('Bones', 1, 3)
	.addItem('Big bones', 1, 3)
	.addItem('Big bones', 3, 2)
	.addItem('Bones', 1, 2)

	/*Special Tables */
	.add(GemTable, undefined, 1)
	.add(CommonSeedDropTable, undefined, 15)
	.add(HerbDropTable, undefined, 6);

export default new SimpleMonster({
	id: 2094,
	name: 'Jogre',
	table: JogreDropTable,
	aliases: ['Jogre']
});
