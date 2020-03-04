import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { GemTable } from '../../subtables/RareDropTable';

const SigilTable = new LootTable()
	.add('Spectral sigil', 1, 3)
	.add('Arcane sigil', 1, 3)
	.add('Elysian sigil', 1, 1);

export const CorporealBeastTable = new LootTable()

	.add('Spirit shield', 1, 8)
	.add('Holy elixir', 1, 3)
	.oneIn(585, SigilTable)

	/* Uncuts */
	.add(GemTable, 10, 12)

	/* Weapons and armour */
	.add('Mystic air staff', 1, 17)
	.add('Mystic water staff', 1, 17)
	.add('Mystic earth staff', 1, 17)
	.add('Mystic fire staff', 1, 17)
	.add('Mystic robe top', 1, 17)
	.add('Mystic robe bottom', 1, 17)

	/* Runes */
	.add('Onyx bolts (e)', 175, 20)
	.add('Cannonball', 2000, 17)
	.add('Adamant arrow', 750, 17)
	.add('Runite bolts', 250, 17)
	.add('Law rune', 250, 17)
	.add('Cosmic rune', 500, 17)
	.add('Death rune', 300, 17)
	.add('Soul rune', 250, 17)

	/* Resources */
	.add('Adamantite ore', 125, 17)
	.add('Runite ore', 20, 17)
	.add('Adamantite bar', 35, 17)
	.add('Teak plank', 100, 17)
	.add('Mahogany logs', 150, 17)
	.add('Magic logs', 75, 17)
	.add('Green dragonhide', 100, 17)
	.add('Raw shark', 70, 17)
	.add('Pure essence', 2500, 17)

	/* Other */
	.add('Watermelon seed', 24, 15)
	.add('Coins', [20000, 50000], 14)
	.add('White berries', 120, 14)
	.add('Desert goat horn', 120, 14)
	.add('Tuna potato', 30, 14)
	.add('Antidote++(4)', 40, 14)
	.add('Ranarr seed', 10, 10)

	/* Tertiary */
	.tertiary(200, 'Clue scroll (elite)')
	.tertiary(5000, 'Pet dark core');

export default new SimpleMonster({
	id: 319,
	name: 'Corporeal Beast',
	table: CorporealBeastTable,
	aliases: ['corporeal beast', 'corp']
});
