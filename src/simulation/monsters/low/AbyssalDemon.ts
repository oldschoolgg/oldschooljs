import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import HerbDropTable from '../../subtables/HerbDropTable';
import RareDropTable, { GemTable } from '../../subtables/RareDropTable';

const AbyssalDemonTable = new LootTable()
	.every('Ashes')

	/*Weapons and armour */
	.add('Black sword', 1, 4)
	.add('Steel battleaxe', 1, 3)
	.add('Black axe', 1, 2)
	.add('Mithril kiteshield', 1, 1)
	.add('Rune chainbody', 1, 1)
	.add('Rune med helm', 1, 1)
	.oneIn(512, 'Abyssal whip')
	.oneIn(32768, 'Abyssal dagger')

	/* Runes */
	.add('Air rune', 50, 8)
	.add('Chaos rune', 10, 6)
	.add('Blood rune', 7, 4)
	.add('Law rune', 3, 1)

	/* Seeds */
	.add(HerbDropTable, 1, 19)

	/* Materials */
	.add('Pure essence', 60, 5)
	.add('Adamantite bar', 1, 2)

	/* Coins */
	.add('Coins', 132, 35)
	.add('Coins', 220, 9)
	.add('Coins', 30, 7)
	.add('Coins', 44, 6)
	.add('Coins', 460, 1)

	/* Other */
	.add('Lobster', 1, 2)
	.add('Cosmic talisman', 1, 1)
	.add('Chaos talisman', 1, 1)
	.add('Defence potion(3)', 1, 1)

	.add(RareDropTable, 1, 2)
	.add(GemTable, 1, 5)

	/* Tertiary */
	.tertiary(25, 'Ensouled abyssal head')
	.tertiary(128, 'Clue scroll (hard)')
	.tertiary(1200, 'Clue scroll (elite)')
	.tertiary(6000, 'Abyssal head');

export default new SimpleMonster({
	id: 415,
	name: 'Abyssal Demon',
	table: AbyssalDemonTable,
	aliases: ['abbys', 'abby demon', 'abby demons', 'abyssal demons', 'abyssal demon']
});
