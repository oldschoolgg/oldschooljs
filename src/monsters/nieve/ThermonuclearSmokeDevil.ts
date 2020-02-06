import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import { GemTable } from '../subtables/RareDropTable';

export const ThermonuclearSmokeDevilTable = new LootTable(128)
	.every('Ashes')

	/* Weapons and armor */
	.addItem('Rune dagger', 1, 5)
	.addItem('Rune chainbody', 1, 4)
	.addItem("Red d'hide body", 1, 3)
	.addItem('Rune battleaxe', 1, 3)
	.addItem('Mystic air staff', 1, 3)
	.addItem('Mystic fire staff', 1, 3)
	.addItem('Rune scimitar', 1, 2)
	.addItem('Rune knife(p++)', 50, 1)
	.addItem('Dragon scimitar', 1, 1)
	.addItem('Ancient staff', 1, 1)
	.oneIn(350, 'Occult necklace')
	.oneIn(512, 'Smoke battlestaff')
	.oneIn(2000, 'Dragon chainbody')

	/* Runes and ammunition */
	.addItem('Smoke rune', 100, 10)
	.addItem('Air rune', 300, 8)
	.addItem('Soul rune', 60, 8)
	.addItem('Rune arrow', 100, 2)

	/* Consumables */
	.addItem('Ugthanki kebab', 3, 4)
	.addItem('Tuna potato', 3, 3)
	.addItem('Sanfew serum(4)', 2, 3)
	.addItem('Prayer potion(4)', 2, 1)

	/* Resources */
	.addItem('Pure essence', 300, 5)
	.addItem('Molten glass', 100, 2)
	.addItem('Mithril bar', 20, 2)
	.addItem('Coal', 150, 2)
	.addItem('Magic logs', 20, 2)
	.addItem('Gold ore', 200, 2)
	.addItem('Diamond', 10, 1)

	/* Other */
	.addItem('Coins', [10000, 20000], 15)
	.addItem('Tinderbox', 1, 10)
	.addItem('Fire talisman', 1, 4)
	.addItem('Bullseye lantern', 1, 3)
	.addItem('Desert goat horn', 50, 2)
	.addItem('Grimy toadflax', 15, 2)
	.addItem('Onyx bolt tips', 12, 2)
	.addItem('Snapdragon seed', 2, 2)
	.addItem('Grapes', 100, 1)
	.addItem('Magic seed', 1, 1)
	.addItem('Dragonstone ring', 1, 1)
	.addItem('Crystal key', 1, 1)

	/* Rdt */
	.add(GemTable, 3)

	/* Tertiary */
	.tertiary(96, 'Clue scroll (hard)')
	.tertiary(500, 'Clue scroll (elite)')
	.tertiary(3000, 'Pet smoke devil');

export default new SimpleMonster({
	id: 499,
	name: 'Thermonuclear Smoke Devil',
	table: ThermonuclearSmokeDevilTable,
	aliases: ['thermonuclear smoke devil', 'thermy', 'thermo smoke devil']
});
