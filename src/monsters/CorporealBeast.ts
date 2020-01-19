import LootTable from '../structures/LootTable';
import SimpleMonster from '../structures/SimpleMonster';
/*import RareDropTable, { GemTable } from './RareDropTable';*/

export const CorporealBeastTable = new LootTable()

	.tertiary(200, 'Clue scroll (elite)')
	.tertiary(5000, 'Pet dark core')

	/* Unique drops 2.31%*/
	.oneIn(64, 'Spirit shield')
	.oneIn(171, 'Holy elixir')
	.oneIn(1365, 'Spectral sigil')
	.oneIn(1365, 'Arcane sigil')
	.oneIn(4095, 'Elysian sigil')

	/* Weapons and armor 17/512 ea 20%*/
	.addItem('Mystic air staff', 1, 17)
	.addItem('Mystic water staff', 1, 17)
	.addItem('Mystic earth staff', 1, 17)
	.addItem('Mystic fire staff', 1, 17)
	.addItem('Mystic robe top', 1, 17)
	.addItem('Mystic robe bottom', 1, 17)

	/* Runes and ammunition 17/512 besides onyx at 20/512 27.15% */

	.addItem('Onyx bolts (e)', 175, 20)
	.addItem('Cannonball', 2000, 17)
	.addItem('Adamant arrow', 750, 17)
	.addItem('Runite bolts', 250, 17)
	.addItem('Law rune', 250, 17)
	.addItem('Cosmic rune', 500, 17)
	.addItem('Death rune', 300, 17)
	.addItem('Soul rune', 250, 17)

	/* Resources 17/512 ea 29.88%*/
	.addItem('Adamantite ore', 125, 17)
	.addItem('Runite ore', 20, 17)
	.addItem('Adamantite bar', 35, 17)
	.addItem('Teak plank', 100, 17)
	.addItem('Mahogany logs', 150, 17)
	.addItem('Magic logs', 75, 17)
	.addItem('Green dragonhide', 100, 17)
	.addItem('Raw shark', 70, 17)
	.addItem('Pure essence', 2500, 17)

	/* Other 15/512 ea besides ranarr 3/512 18.16%*/
	.addItem('Watermelon seed', 24, 15)
	.addItem('Coins', [20000, 50000], 15)
	.addItem('White berries', 120, 15)
	.addItem('Desert goat horn', 120, 15)
	.addItem('Tuna potato', 30, 15)
	.addItem('Antidote++(4)', 40, 15)
	.addItem('Ranarr seed', 10, 3);

/* Uncuts 12/512 2.34%
.add(GemTable, undefined, 11);
*/

export default new SimpleMonster({ id: 319, name: 'Corporeal Beast', table: CorporealBeastTable });
