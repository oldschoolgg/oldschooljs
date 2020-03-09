import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { GemTable } from '../../subtables/RareDropTable';
import HerbDropTable from '../../subtables/HerbDropTable';

export const LizardTable = new LootTable()
	.every('Big bones')

	.tertiary(400, 'Long bone', 1)
	.tertiary(5012, 'Curved bone', 1)

	.oneIn(512, 'Mystic gloves (light)', 1)

	/* Runes */
	.add('Fire rune', [5, 42], 25)
	.add('Nature rune', 5, 1)

	/* Herbs */
	.add(HerbDropTable, 1, 20)

	/* Seeds */
	.add('Tomato seed', 3, 14)
	.add('Cabbage seed', 3, 14)
	.add('Onion seed', 4, 16)
	.add('Potato seed', 4, 8)
	.add('Strawberry seed', 3, 6)
	.add('Sweetcorn seed', 3, 5)
	.add('Watermelon seed', 1, 2)

	/* Ores and bars */

	.add('Copper ore', 1, 23)
	.add('Iron ore', 1, 18)
	.add('Silver bar', 1, 14)
	.add('Tin ore', 1, 23)
	.add('Coal', 1, 4)
	.add('Silver ore', 1, 4)
	.add('Mithril ore')

	/* Other */

	.add('Kebab', 1, 19)
	.add('Knife', 1, 24)
	.add('Waterskin(0)', 2, 6)
	.add('Waterskin(1)', 2, 6)
	.add('Waterskin(2)', 2, 6)
	.add('Waterskin(3)', 2, 6)
	.add('Waterskin(4)', 2, 6)

	/* Subtables */
	.add(GemTable, 1, 5);

export default new SimpleMonster({
	id: 458,
	name: 'Lizard',
	table: LizardTable,
	aliases: ['lizard']
});
