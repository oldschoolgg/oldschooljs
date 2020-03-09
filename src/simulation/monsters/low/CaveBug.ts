import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

export const CaveBugTable = new LootTable({ limit: 128 })

	/* Runes and ammunition */
	.add('Earth rune', [2, 7], 25)
	.add('Water rune', [8, 119], 25)
	.add('Nature rune', [1, 2], 7)

	/* Herbs */
	// TODO - should this use central herb drop table?
	.add('Grimy guam leaf', 1, 20)
	.add('Grimy marrentill', 1, 20)
	.add('Grimy tarromin', 1, 20)
	.add('Grimy harralander', 1, 6)
	.add('Grimy ranarr weed', 1, 4)
	.add('Grimy irit leaf', 1, 4)
	.add('Grimy kwuarm', 1, 4)
	.add('Grimy cadantine', 1, 2)
	.add('Grimy lantadyme', 1, 2)
	.add('Grimy dwarf weed', 1, 2)

	/* Materials */

	.add('Unicorn horn dust', 1, 6)
	.add('Eye of newt', 1, 8)
	.add('Limpwurt root', 1, 5)
	.add('Snape grass', 1, 4)
	.add("Red spiders' eggs", 1, 4)

	/* Other */

	.add('Coins', [3, 8], 30)
	.add('Tinderbox', 1, 22)
	.add('Swamp weed', [1, 8], 21)
	.add('Candle', 1, 6)
	.add('Empty candle lantern', 1, 2);

export default new SimpleMonster({
	id: 481,
	name: 'Cave Bug',
	table: CaveBugTable,
	aliases: ['cave bug']
});
