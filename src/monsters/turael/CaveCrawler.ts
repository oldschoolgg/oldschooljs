import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import FixedAllotmentSeedTable from '../subtables/FixedAllotmentSeedTable';
import HerbDropTable from '../subtables/HerbDropTable';
import { GemTable } from '../subtables/RareDropTable';

export const CaveCrawlerTable = new LootTable(128)
	/* Armour */
	.addItem('Bronze boots', 1, 1)

	/* Runes */
	.addItem('Nature rune', [3, 4], 6)
	.addItem('Fire rune', 12, 5)
	.addItem('Earth rune', 9, 2)

	/* Subtables */
	.add(FixedAllotmentSeedTable, 1, 26)
	.add(HerbDropTable, 1, 22)
	.add(GemTable, 1, 1)

	/* Coins */
	.addItem('Coins', 3, 5)
	.addItem('Coins', 8, 3)
	.addItem('Coins', 29, 3)
	.addItem('Coins', 10, 1)

	/* Other */
	.addItem('Vial of water', 1, 13)
	.addItem('White berries', 1, 5)
	.addItem('Unicorn horn dust', 1, 2)
	.addItem('Eye of newt', 1, 1)
	.addItem("Red spiders' eggs", 1, 1)
	.addItem('Limpwurt root', 1, 1)
	.addItem('Snape grass', 1, 1);

export default new SimpleMonster({
	id: 406,
	name: 'Cave Crawler',
	table: CaveCrawlerTable,
	aliases: ['cave crawler']
});
