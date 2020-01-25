import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import { GemTable } from '../subtables/RareDropTable';

export const CaveKrakenTable = new LootTable(128)

	/*Weapons and armour */
	.addItem('Mystic water staff', 1, 3)
	.addItem('Rune warhammer', 1, 2)
	.addItem('Rune longsword', 1, 2)
	.addItem('Mystic robe top', 1, 1)
	.addItem('Mystic robe bottom', 1, 1)
	.oneIn(512, 'Trident of the seas (full)')

	/* Runes and ammunition */
	.addItem('Water rune', 400, 10)
	.addItem('Chaos rune', 250, 10)
	.addItem('Death rune', 150, 10)
	.addItem('Blood rune', 60, 10)
	.addItem('Soul rune', 50, 7)
	.addItem('Mist rune', 100, 4)

	/* Seeds */
	.addItem('Watermelon seed', 24, 3)
	.addItem('Torstol seed', 2, 1)
	.addItem('Magic seed', 1, 1)

	/* Materials */
	.addItem('Battlestaff', 10, 4)
	.addItem('Seaweed', 125, 3)
	.addItem('Oak plank', 60, 3)
	.addItem('Unpowered orb', 50, 2)
	.addItem('Raw shark', 50, 2)
	.addItem('Raw monkfish', 100, 2)
	.addItem('Grimy snapdragon', 6, 2)
	.addItem('Diamond', 8, 1)
	.addItem('Runite bar', 2, 1)

	/* Other */
	.addItem('Coins', [10000, 19999], 15)
	.addItem('Shark', 5, 7)
	.addItem('Pirate boots', 1, 4)
	.addItem('Sanfew serum(4)', 2, 4)
	.addItem('Edible seaweed', 5, 3)
	.addItem('Antidote++(4)', 2, 2)
	.addItem('Rusty sword', 1, 2)
	.addItem('Harpoon', 1, 1)
	.addItem('Bucket', 1, 1)
	.addItem('Crystal key', 1, 1)
	.addItem('Dragonstone ring', 1, 1)
	.oneIn(400, 'Kraken tentacle')

	/* Rdt */
	.add(GemTable, undefined, 2)

	/* Tertiary */
	.tertiary(500, 'Clue scroll (elite)')
	.tertiary(1000, 'Jar of dirt')
	.tertiary(3000, 'Pet kraken');

export default new SimpleMonster({
	id: 494,
	name: 'CaveKraken',
	table: CaveKrakenTable,
	aliases: ['kraken']
});
