import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import { GemTable } from '../subtables/RareDropTable';
import HerbDropTable from '../subtables/HerbDropTable';
import RareSeedTable from '../subtables/RareSeedTable';

const TurothHerbTable = new LootTable()
	.add(HerbDropTable, 1, 15)
	.add(HerbDropTable, 2, 10)
	.add(HerbDropTable, 3, 6);

export const TurothTable = new LootTable(128)
	.every('Bones')

	/* Weapons and armour */
	.addItem('Steel platelegs', 1, 7)
	.addItem('Mithril axe', 1, 3)
	.addItem('Mithril kiteshield', 1, 1)
	.addItem('Adamant full helm', 1, 1)
	.addItem('Rune dagger', 1, 1)
	.oneIn(500, 'Leaf-bladed sword')
	.oneIn(512, 'Mystic robe bottom (light)')

	/* Runes */
	.addItem('Law rune', 3, 6)
	.addItem('Nature rune', 15, 5)
	.addItem('Nature rune', 37, 1)

	/* Herbs */
	.add(TurothHerbTable, 1, 31)

	/* Seeds */
	.add(RareSeedTable, 1, 18)

	/* Materials */
	.addItem('Limpwurt root', 1, 7)

	/* Other */
	.addItem('Coins', 44, 29)
	.addItem('Coins', 132, 12)
	.addItem('Coins', 440, 1)

	/* Rdt */
	.add(GemTable, 1, 5)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 426,
	name: 'Turoth',
	table: TurothTable,
	aliases: ['turoth']
});
