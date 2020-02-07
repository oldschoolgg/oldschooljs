import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import RareDropTable from '../subtables/RareDropTable';
import HerbDropTable from '../subtables/HerbDropTable';

export const SkeletalWyvernTable = new LootTable()
	.every('Wyvern bones')

	/*Weapons and armour */
	.addItem('Earth battlestaff', 1, 4)
	.addItem('Battlestaff', 10, 3)
	.addItem('Rune axe', 1, 3)
	.addItem('Rune battleaxe', 1, 2)
	.addItem('Rune warhammer', 1, 2)
	.addItem('Rune full helm', 1, 2)
	.addItem('Rune kiteshield', 1, 1)
	.oneIn(512, 'Granite legs')
	.oneIn(512, 'Dragon platelegs')
	.oneIn(512, 'Dragon plateskirt')

	/* Runes and ammunition */
	.addItem('Air rune', 225, 6)
	.addItem('Rune arrow', 36, 5)
	.addItem('Water rune', 150, 4)
	.addItem('Chaos rune', 80, 4)
	.addItem('Law rune', 45, 4)
	.addItem('Death rune', 40, 4)
	.addItem('Blood rune', 25, 4)
	.addItem('Adamant bolts', [75, 99], 3)
	.addItem('Runite bolts', [35, 44], 3)
	.addItem('Soul rune', 20, 1)

	/* Herbs */
	.add(HerbDropTable, 3, 7)

	/* Resources */
	.addItem('Pure essence', 250, 8)
	.addItem('Magic logs', 35, 6)
	.addItem('Adamantite bar', 10, 6)
	.addItem('Iron ore', 200, 3)
	.addItem('Uncut ruby', 10, 2)
	.addItem('Uncut diamond', 5, 2)

	/* Other */
	.addItem('Coins', 300, 12)
	.addItem('Lobster', 6, 8)
	.addItem('Prayer potion(4)', 2, 7)
	.addItem('Unpowered orb', 75, 2)
	.addItem('Runite crossbow (u)', 1, 2)
	.addItem('Ranarr seed', 3, 2)
	.addItem('Snapdragon seed', 1, 2)

	/* Rdt */
	.add(RareDropTable, 1, 3)

	/* Tertiary */
	.tertiary(350, 'Clue scroll (elite)')
	.tertiary(10_000, 'Draconic visage');

export default new SimpleMonster({
	id: 465,
	name: 'Skeletal Wyvern',
	table: SkeletalWyvernTable,
	aliases: ['skeletal wyvern']
});
