import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import RareSeedTable from '../../subtables/RareSeedTable';
import NotedHerbTable from '../../subtables/NotedHerbTable';
import { GemTable } from '../../subtables/RareDropTable';

const SarachnisTable = new LootTable()
	.oneIn(192, 'Dragon med helm')
	.oneIn(384, 'Sarachnis cudgel')

	/* Weapons and armour */
	.add('Battlestaff', [8, 10], 2)
	.add('Rune platebody', 1, 2)
	.add('Rune med helm', 1, 2)
	.add('Rune 2h sword', 1, 2)

	/* Runes and ammunition */
	.add('Blood rune', [80, 100], 5)
	.add('Chaos rune', [175, 200], 5)
	.add('Cosmic rune', [125, 150], 5)
	.add('Death rune', [80, 100], 5)
	.add('Soul rune', [80, 100], 5)
	.add('Mithril arrow', [450, 600], 2)
	.add('Mithril bolts', [175, 225], 2)

	/* Seeds */
	.add(RareSeedTable, 1, 2)

	/* Herbs */
	.add(NotedHerbTable, 1, 10)

	/* Materials */
	.add('Mithril ore', [60, 90], 6)
	.add('Red dragonhide', [15, 25], 5)
	.add('Uncut sapphire', [20, 30], 4)
	.add('Adamantite ore', [30, 40], 3)
	.add('Uncut emerald', [20, 30], 3)
	.add('Onyx bolt tips', [8, 10], 2)
	.add('Uncut ruby', [20, 30], 2)
	.add('Runite ore', [4, 6], 1)
	.add('Uncut diamond', [20, 3], 1)

	/* Other */
	.add('Coins', [17_000, 25_000], 6)
	.add('Dragon bones', [10, 15], 5)
	.add('Egg potato', [5, 8], 5)
	.add('Weapon poison(++)', [4, 6], 2)
	.add('Crystal key', 1, 1)
	.add('Crystal key', 10, 1)

	/* Rdt */
	.add(GemTable, 1, 1)

	/* Tertiary */
	.tertiary(15, 'Grubby key')
	.tertiary(20, 'Giant egg sac(full)')
	.tertiary(40, 'Clue scroll (hard)')
	.tertiary(60, 'Clue scroll (elite)')
	.tertiary(2000, 'Jar of eyes')
	.tertiary(3000, 'Sraracha');

export default new SimpleMonster({
	id: 8713,
	name: 'Sarachnis',
	table: SarachnisTable,
	aliases: ['sarachnis', 'sriracha']
});
