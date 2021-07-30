import LootTable from '../../../../structures/LootTable';
import SimpleMonster from '../../../../structures/SimpleMonster';
import HerbDropTable from '../../../subtables/HerbDropTable';
import { GemTable } from '../../../subtables/RareDropTable';

const LesserDemonTable = new LootTable()
	.every('Ashes')

	/* Weapons and armor*/
	.add('Steel full helm', 1, 4)
	.add('Steel axe', 1, 4)
	.add('Steel scimitar', 1, 3)
	.add('Mithril sq shield', 1, 1)
	.add('Mithril chainbody', 1, 1)
	.add('Rune med helm', 1, 1)

	/* Runes */
	.add('Fire rune', 60, 8)
	.add('Chaos rune', 12, 5)
	.add('Death rune', 3, 3)
	.add('Fire rune', 30, 1)

	/* Herbs */
	.add(HerbDropTable, 1, 1)

	/* Coins */
	.add('Coins', 120, 40)
	.add('Coins', 40, 29)
	.add('Coins', 200, 10)
	.add('Coins', 10, 7)
	.add('Coins', 450, 1)

	/* Other */
	.add('Jug of wine', 1, 3)
	.add('Gold ore', 1, 2)

	/* Gems */
	.add(GemTable, 1, 4)

	/* Tertiary */
	.tertiary(50, 'Ensouled demon head')
	.tertiary(5000, 'Lesser demon champion scroll');

export default new SimpleMonster({
	id: 2005,
	name: 'Lesser demon',
	table: LesserDemonTable,
	aliases: ['lesser demon']
});
