import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';

export const CaveBugTable = new LootTable(128)

	/* Runes and ammunition */
	.addItem('Earth rune', [2, 7], 25)
	.addItem('Water rune', [8, 119], 25)
	.addItem('Nature rune', [1, 2], 7)

	/* Herbs */
	.addItem('Grimy guam leaf', 1, 20)
	.addItem('Grimy marrentill', 1, 20)
	.addItem('Grimy tarromin', 1, 20)
	.addItem('Grimy harralander', 1, 6)
	.addItem('Grimy ranarr weed', 1, 4)
	.addItem('Grimy irit leaf', 1, 4)
	.addItem('Grimy kwuarm', 1, 4)
	.addItem('Grimy cadantine', 1, 2)
	.addItem('Grimy lantadyme', 1, 2)
	.addItem('Grimy dwarf weed', 1, 2)

	/* Materials */

	.addItem('Unicorn horn dust', 1, 6)
	.addItem('Eye of newt', 1, 8)
	.addItem('Limpwurt root', 1, 5)
	.addItem('Snape grass', 1, 4)
	.addItem("Red spiders' eggs", 1, 4)

	/* Other */

	.addItem('Coins', [3, 8], 30)
	.addItem('Tinderbox', 1, 22)
	.addItem('Swamp weed', [1, 8], 21)
	.addItem('Candle', 1, 6)
	.addItem('Empty candle latern', 1, 2);

export default new SimpleMonster({
	id: 481,
	name: 'Cave Bug',
	table: CaveBugTable,
	aliases: ['cave bug']
});
