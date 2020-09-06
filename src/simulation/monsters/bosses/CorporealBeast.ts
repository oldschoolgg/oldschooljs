import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { GemTable } from '../../subtables/RareDropTable';

const CorporealBeastTable = new LootTable()

	.oneIn(
		585,
		new LootTable()
			.add('Spectral sigil', 1, 3 / 7) // 1/1365
			.add('Arcane sigil', 1, 3 / 7) // 1/1365
			.add('Elysian sigil', 1, 1 / 7) // 1/4095
	)

	/* Weapons and armour */
	.add('Mystic robe top', 1, 18 / 512)
	.add('Mystic robe bottom', 1, 18 / 512)
	.add('Mystic air staff', 1, 12 / 512)
	.add('Mystic water staff', 1, 12 / 512)
	.add('Mystic earth staff', 1, 12 / 512)
	.add('Mystic fire staff', 1, 12 / 512)

	/* Runes */
	.add('Soul rune', 250, 32 / 512)
	.add('Runite bolts', 250, 24 / 512)
	.add('Death rune', 300, 22 / 512)
	.add('Onyx bolts (e)', 175, 20 / 512)
	.add('Cannonball', 2000, 17 / 512)
	.add('Adamant arrow', 750, 17 / 512)
	.add('Law rune', 250, 17 / 512)
	.add('Cosmic rune', 500, 17 / 512)

	/* Resources */
	.add('Raw shark', 70, 21 / 512)
	.add('Pure essence', 2500, 21 / 512)
	.add('Adamantite bar', 35, 18 / 512)
	.add('Green dragonhide', 100, 18 / 512)
	.add('Adamantite ore', 125, 17 / 512)
	.add('Runite ore', 20, 12 / 512)
	.add('Teak plank', 100, 12 / 512)
	.add('Mahogany logs', 150, 12 / 512)
	.add('Magic logs', 75, 12 / 512)

	/* Other */
	.add('Tuna potato', 30, 20 / 512)
	.add('White berries', 120, 17 / 512)
	.add('Desert goat horn', 120, 17 / 512)
	.add('Watermelon seed', 24, 15 / 512)
	.add('Coins', [20000, 50000], 12 / 512)
	.add('Antidote++(4)', 40, 10 / 512)
	.add('Spirit shield', 1, 8 / 512)
	.add('Ranarr seed', 10, 5 / 512)
	.add('Holy elixir', 1, 3 / 512)

	/* Uncuts */
	.add(GemTable, 10, 12 / 512)

	/* Tertiary */
	.tertiary(200, 'Clue scroll (elite)')
	.tertiary(5000, 'Pet dark core');

export default new SimpleMonster({
	id: 319,
	name: 'Corporeal Beast',
	table: CorporealBeastTable,
	aliases: ['corporeal beast', 'corp']
});
