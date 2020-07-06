import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { GemTable } from '../../subtables/RareDropTable';

export const KrakenTable = new LootTable()

	/* Weapons and armour */
	.add('Mystic water staff', 1, 12)
	.add('Rune warhammer', 1, 8)
	.add('Rune longsword', 1, 8)
	.add('Mystic robe top', 1, 4)
	.add('Mystic robe bottom', 1, 4)
	.oneIn(512, 'Trident of the seas (full)')

	/* Runes and ammunition */
	.add('Water rune', 400, 40)
	.add('Chaos rune', 250, 40)
	.add('Death rune', 150, 40)
	.add('Blood rune', 60, 40)
	.add('Soul rune', 50, 28)
	.add('Mist rune', 100, 16)

	/* Seeds */
	.add('Watermelon seed', 24, 12)
	.add('Torstol seed', 2, 4)
	.add('Magic seed', 1, 4)

	/* Materials */
	.add('Battlestaff', 10, 16)
	.add('Seaweed', 125, 12)
	.add('Oak plank', 60, 12)
	.add('Unpowered orb', 50, 8)
	.add('Raw shark', 50, 8)
	.add('Raw monkfish', 100, 8)
	.add('Grimy snapdragon', 6, 8)
	.add('Diamond', 8, 4)
	.add('Runite bar', 2, 4)

	/* Other */
	.add('Coins', [10000, 19999], 60)
	.add('Shark', 5, 28)
	.add('Pirate boots', 1, 16)
	.add('Sanfew serum(4)', 2, 16)
	.add('Edible seaweed', 5, 12)
	.add('Antidote++(4)', 2, 8)
	.add('Rusty sword', 1, 7)
	.add('Harpoon', 1, 4)
	.add('Bucket', 1, 4)
	.add('Crystal key', 1, 4)
	.add('Dragonstone ring', 1, 4)
	.oneIn(400, 'Kraken tentacle')

	/* Rdt */
	.add(GemTable, 1, 8)

	/* Tertiary */
	.tertiary(500, 'Clue scroll (elite)')
	.tertiary(1000, 'Jar of dirt')
	.tertiary(3000, 'Pet kraken');

export default new SimpleMonster({
	id: 494,
	name: 'Kraken',
	table: KrakenTable,
	aliases: ['kraken']
});
