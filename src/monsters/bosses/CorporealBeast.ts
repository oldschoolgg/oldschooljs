import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import { GemTable } from '../subtables/RareDropTable';

const SigilTable = new LootTable()
	.add('Spectral sigil', 1, 3)
	.add('Arcane sigil', 1, 3)
	.add('Elysian sigil', 1, 1);

const CorpGemTable = new LootTable()
	.add(GemTable, 1, 1);

export const CorporealBeastTable = new LootTable()

	.addItem('Spirit shield', 8)
	.addItem('Holy elixir', 3)
	.oneIn(585, SigilTable)

	/* Uncuts */
	.add(CorpGemTable, 10, 12)

	/* Weapons and armour */
	.addItem('Mystic air staff', 1, 17)
	.addItem('Mystic water staff', 1, 17)
	.addItem('Mystic earth staff', 1, 17)
	.addItem('Mystic fire staff', 1, 17)
	.addItem('Mystic robe top', 1, 17)
	.addItem('Mystic robe bottom', 1, 17)

	/* Runes */
	.addItem('Onyx bolts (e)', 175, 20)
	.addItem('Cannonball', 2000, 17)
	.addItem('Adamant arrow', 750, 17)
	.addItem('Runite bolts', 250, 17)
	.addItem('Law rune', 250, 17)
	.addItem('Cosmic rune', 500, 17)
	.addItem('Death rune', 300, 17)
	.addItem('Soul rune', 250, 17)

	/* Resources */
	.addItem('Adamantite ore', 125, 17)
	.addItem('Runite ore', 20, 17)
	.addItem('Adamantite bar', 35, 17)
	.addItem('Teak plank', 100, 17)
	.addItem('Mahogany logs', 150, 17)
	.addItem('Magic logs', 75, 17)
	.addItem('Green dragonhide', 100, 17)
	.addItem('Raw shark', 70, 17)
	.addItem('Pure essence', 2500, 17)

	/* Other */
	.addItem('Watermelon seed', 24, 15)
	.addItem('Coins', [20000, 50000], 14)
	.addItem('White berries', 120, 14)
	.addItem('Desert goat horn', 120, 14)
	.addItem('Tuna potato', 30, 14)
	.addItem('Antidote++(4)', 40, 14)
	.addItem('Ranarr seed', 10, 10)

	/* Tertiary */
	.tertiary(200, 'Clue scroll (elite)')
	.tertiary(5000, 'Pet dark core');

export default new SimpleMonster({
	id: 319,
	name: 'Corporeal Beast',
	table: CorporealBeastTable,
	aliases: ['corporeal beast', 'corp']
});
