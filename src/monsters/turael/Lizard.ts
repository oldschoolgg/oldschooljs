import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import { GemTable } from '../subtables/RareDropTable';

export const LizardTable = new LootTable()
	.every('Big bones')
	/* Armour */
	.oneIn(512, 'Mystic gloves (light)', 1)

	/* Runes */
	.addItem('Fire rune', [5, 42], 25)
	.addItem('Nature rune', 5, 1)

	/* Herbs */
	.addItem('Grimy tarromin', 1, 15)
	.addItem('Grimy harralander', 1, 15)
	.addItem('Grimy guam leaf', 1, 6)
	.addItem('Grimy marrentill', 1, 6)
	.addItem('Grimy ranarr weed', 1, 4)
	.addItem('Grimy irit leaf', 1, 4)
	.addItem('Grimy avantoe', 1, 4)
	.addItem('Grimy kwuarm', 1, 1)
	.addItem('Grimy cadantine', 1, 1)
	.addItem('Grimy lantadyme', 1, 1)
	.addItem('Grimy dwarf weed', 1, 1)

	/* Seeds */
	.addItem('Tomato seed', 3, 14)
	.addItem('Cabbage seed', 3, 14)
	.addItem('Onion seed', 4, 16)
	.addItem('Potato seed', 4, 8)
	.addItem('Strawberry seed', 3, 6)
	.addItem('Sweetcorn seed', 3, 5)
	.addItem('Watermelon seed', 1, 2)

	/* Ores and bars */

	.addItem('Copper ore', 1, 23)
	.addItem('Iron ore', 1, 18)
	.addItem('Silver bar', 1, 14)
	.addItem('Tin ore', 1, 23)
	.addItem('Coal ore', 1, 4)
	.addItem('Silver ore', 1, 4)
	.addItem('Mithril ore', 1, 1)

	/* Other */

	.addItem('Kebab', 1, 19)
	.addItem('Knife', 1, 24)
	.addItem('Waterskin(0)', 2, 6)
	.addItem('Waterskin(1)', 2, 6)
	.addItem('Waterskin(2)', 2, 6)
	.addItem('Waterskin(3)', 2, 6)
	.addItem('Waterskin(4)', 2, 6)
	/* Tertiary */
	.tertiary(400, 'Long bone', 1)
	.tertiary(5012.5, 'Curved bone', 1)

	/* Subtables */
	.add(GemTable, 1, 42);

export default new SimpleMonster({
	id: 458,
	name: 'Lizard',
	table: LizardTable,
	aliases: ['lizard']
});
