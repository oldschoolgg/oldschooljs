import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { GemTable } from '../../subtables/RareDropTable';

const JellyTable = new LootTable()
	/*Weapons and armour */
	.add('Steel battleaxe', 1, 11)
	.add('Steel 2h sword', 1, 7)
	.add('Steel axe', 1, 3)
	.add('Mithril kiteshield', 1, 2)
	.add('Mithril boots', 1, 1)
	.add('Rune full helm', 1, 1)

	/* Coins */
	.add('Coins', 102, 39)
	.add('Coins', 44, 30)
	.add('Coins', 220, 10)
	.add('Coins', 11, 7)
	.add('Coins', 460, 2)

	/* Other */
	.add('Chaons rune', 15, 5)
	.add('Death rune', 5, 3)
	.add('Gold bar', 1, 2)
	.add('Thread', 10, 1)

	/* Gem drop table */
	.add(GemTable, 1, 4)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 437,
	name: 'Jelly',
	table: JellyTable,
	aliases: ['jelly']
});
