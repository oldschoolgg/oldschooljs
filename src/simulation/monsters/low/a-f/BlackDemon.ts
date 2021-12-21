import LootTable from '../../../../structures/LootTable';
import SimpleMonster from '../../../../structures/SimpleMonster';
import HerbDropTable from '../../../subtables/HerbDropTable';
import RareDropTable, { GemTable } from '../../../subtables/RareDropTable';

const BlackDemonTable = new LootTable()
	.every('Malicious ashes')

	/* Weapons and armour */
	.add('Black sword', 1, 4)
	.add('Steel battleaxe', 1, 3)
	.add('Black axe', 1, 2)
	.add('Mithril kiteshield', 1, 1)
	.add('Rune med helm', 1, 1)
	.add('Rune chainbody', 1, 1)

	/* Runes and ammunition */
	.add('Air rune', 50, 8)
	.add('Chaos rune', 10, 7)
	.add('Blood rune', 7, 4)
	.add('Fire rune', 37, 1)
	.add('Law rune', 3, 1)

	/* Herbs */
	.add(HerbDropTable, 1, 23)

	/* Coins */
	.add('Coins', 132, 40)
	.add('Coins', 30, 7)
	.add('Coins', 44, 6)
	.add('Coins', 220, 6)
	.add('Coins', 460, 1)

	/* Other */
	.add('Lobster', 1, 3)
	.add('Adamantite bar', 1, 2)
	.add('Defence potion(3)', 1, 1)

	/* RDT */
	.add(RareDropTable, 1, 1)
	.add(GemTable, 1, 5)

	/* Tertiary */
	.tertiary(35, 'Ensouled demon head')
	.tertiary(128, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 240,
	name: 'Black Demon',
	table: BlackDemonTable,
	aliases: ['black demon']
});
