import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import HerbDropTable from '../../subtables/HerbDropTable';

export const CaveBugTable = new LootTable()
	/* Runes and ammunition */
	.add('Earth rune', [2, 7], 25)
	.add('Water rune', [8, 119], 25)
	.add('Nature rune', [1, 2], 7)

	.add(HerbDropTable, 1, 25)

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
