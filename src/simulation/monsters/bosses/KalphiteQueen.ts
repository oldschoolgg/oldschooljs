import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import RareDropTable from '../../subtables/RareDropTable';

const KqConsumablesTable = new LootTable()
	.addItem('Monkfish', 3, 1)
	.addItem('Shark', 2, 1)
	.addItem('Dark crab', 2, 1)
	.addItem('Saradomin brew(4)', 1, 1)
	.addItem('Prayer potion(4)', 2, 1)
	.addItem('Super restore(4)', 1, 1)
	.addItem('Super combat potion(2)', 1, 1)
	.addItem('Ranging potion(3)', 1, 1)
	.addItem('Superantipoison(2)', 1, 1);

const KalphiteQueenTable = new LootTable(256)

	/* Consumables */
	.every(KqConsumablesTable)

	/* Weapons and armor */
	.addItem('Battlestaff', 10, 10)
	.addItem('Rune chainbody', 1, 9)
	.addItem("Red d'hide body", 1, 8)
	.addItem('Rune knife(p++)', 25, 8)
	.addItem('Lava battlestaff', 1, 4)
	.addItem('Dragon chainbody', 1, 2)
	.addItem('Dragon 2h sword', 1, 1)

	/* Runes and ammunition */
	.addItem('Death rune', 150, 12)
	.addItem('Blood rune', 100, 12)
	.addItem('Mithril arrow', 500, 10)
	.addItem('Rune arrow', 250, 6)

	/* Herbs */
	.addItem('Grimy toadflax', 25, 4)
	.addItem('Grimy ranarr weed', 25, 4)
	.addItem('Grimy snapdragon', 25, 4)
	.addItem('Grimy torstol', 25, 4)

	/* Seeds */
	.addItem('Torstol seed', 2, 8)
	.addItem('Watermelon seed', 25, 6)
	.addItem('Papaya tree seed', 2, 6)
	.addItem('Palm tree seed', 2, 6)
	.addItem('Magic seed', 2, 6)

	/* Resources */
	.addItem('Runite bar', 3, 10)
	.addItem('Bucket of sand', 100, 8)
	.addItem('Gold ore', 250, 8)
	.addItem('Magic logs', 60, 8)
	.addItem('Uncut emerald', 25, 6)
	.addItem('Uncut ruby', 25, 6)
	.addItem('Uncut diamond', 25, 6)

	/* Other */
	.addItem('Wine of zamorak', 60, 20)
	.addItem('Potato cactus', 100, 16)
	.addItem('Coins', [15000, 20000], 10)
	.addItem('Grapes', 100, 10)
	.addItem('Weapon poison(++)', 5, 10)
	.addItem('Cactus spine', 10, 6)

	/* Rdt */
	.add(RareDropTable, 1, 2)

	/* Tertiary */
	.tertiary(20, 'Ensouled kalphite head')
	.tertiary(100, 'Clue scroll (elite)')
	.tertiary(128, 'Kq head')
	.tertiary(2000, 'Jar of sand')
	.tertiary(3000, 'Kalphite princess');

export default new SimpleMonster({
	id: 963,
	name: 'Kalphite Queen',
	table: KalphiteQueenTable,
	aliases: ['kalphite queen', 'kq']
});
