import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import HerbDropTable from '../../subtables/HerbDropTable';
import RareSeedTable from '../../subtables/RareSeedTable';
import VariableAllotmentSeedTable from '../../subtables/VariableAllotmentSeedTable';
import { GemTable } from '../../subtables/RareDropTable';

export const CaveHorrorTable = new LootTable()
	.every('Big bones')

	/* Weapons and armor*/
	.addItem('Mithril axe', 1, 3)
	.addItem('Rune dagger', 1, 1)
	.addItem('Adamant full helm', 1, 1)
	.addItem('Mithril kiteshield', 1, 1)
	.oneIn(512, 'Black mask (10)')

	/* Runes */
	.addItem('Nature rune', 6, 6)
	.addItem('Nature rune', 4, 5)
	.addItem('Nature rune', 3, 1)

	/* Herbs */
	.add(HerbDropTable, 1, 13)

	/* Seeds */
	.add(RareSeedTable, 1, 18)
	.add(VariableAllotmentSeedTable, 1, 15)

	/* Coins */
	.add('Coins', 44, 28)
	.add('Coins', 132, 12)
	.add('Coins', 440, 1)

	/* Other */
	.add('Limpwurt root', 1, 7)
	.add('Teak logs', 4, 7)
	.add('Mahogany logs', 2, 3)

	/* Gems */
	.add(GemTable, 1, 5)

	/* Tertiary */
	.tertiary(30, 'Ensouled horror head')
	.tertiary(128, 'Clue scroll (hard)')
	.tertiary(400, 'Long bone')
	.tertiary(5013, 'Curved bone');

export default new SimpleMonster({
	id: 1047,
	name: 'Cave Horror',
	table: CaveHorrorTable,
	aliases: ['cave horror', 'cave h']
});
