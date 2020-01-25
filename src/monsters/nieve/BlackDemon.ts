import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import HerbDropTable from '../subtables/HerbDropTable';
import RareDropTable, { GemTable } from '../subtables/RareDropTable';

export const BlackDemonTable = new LootTable()
	.every('Ashes')

	/*Weapons and armour */
	.addItem('Black sword', 1, 4)
	.addItem('Steel battleaxe', 1, 3)
	.addItem('Black axe', 1, 2)
	.addItem('Mithril kiteshield', 1, 1)
	.addItem('Rune med helm', 1, 1)
	.addItem('Rune chainbody', 1, 1)

	/* Runes and ammunition */
	.addItem('Air rune', 50, 8)
	.addItem('Chaos rune', 10, 7)
	.addItem('Blood rune', 7, 4)
	.addItem('Fire rune', 37, 1)
	.addItem('Law rune', 3, 1)

	/* Herbs */
	.add(HerbDropTable, undefined, 23)

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

	/* Rdt */
	.add(RareDropTable, undefined, 1)
	.add(GemTable, undefined, 5)

	/* Tertiary */
	.tertiary(35, 'Ensouled demon head')
	.tertiary(128, 'Clue scroll (hard)')

	/* Catacombs tertiary */
	.tertiary(226, 'Ancient shard')
	.tertiary(340, 'Dark totem base')
	.tertiary(340, 'Dark totem middle')
	.tertiary(340, 'Dark totem top');

export default new SimpleMonster({
	id: 240,
	name: 'Black Demon',
	table: BlackDemonTable,
	aliases: ['black demon']
});
