import LootTable from '../structures/LootTable';
import RareDropTable from './RareDropTable';
import SimpleMonster from '../structures/SimpleMonster';
import { ItemBank } from '../meta/types';
import Loot from '../structures/Loot';
import { roll, rand } from '../util';

const ZulrahUniqueTable = new LootTable()
	.add('Tanzanite fang')
	.add('Magic fang')
	.add('Serpentine visage')
	.add('Uncut onyx');

const ZulrahFlaxMutagenTable = new LootTable()
	.add('Tanzanite mutagen', 1, 10)
	.add('Magma mutagen', 1, 10)
	.add('Flax', 1000, 5244);

export const ZulrahTable = new LootTable()
	.add(RareDropTable, undefined, 9)
	.oneIn(256, ZulrahUniqueTable)

	/* Weapons and armour */
	.addItem('Dragon med helm', 1, 2)
	.addItem('Dragon halberd', 1, 2)
	.addItem('Battlestaff', 10, 10)

	/* Runes */
	.addItem('Death rune', 300, 12)
	.addItem('Law rune', 200, 12)
	.addItem('Chaos rune', 500, 12)

	/* Herbs */
	.addItem('Snapdragon', 10, 2)
	.addItem('Dwarf weed', 30, 2)
	.addItem('Toadflax', 25, 2)
	.addItem('Torstol', 10, 2)

	/* Seeds */
	.addItem('Palm tree seed', 1, 6)
	.addItem('Papaya tree seed', 3, 6)
	.addItem('Calquat tree seed', 2, 6)
	.addItem('Magic seed', 1, 4)
	.addItem('Toadflax seed', 2, 2)
	.addItem('Snapdragon seed', 1, 2)
	.addItem('Dwarf weed seed', 2, 2)
	.addItem('Torstol seed', 1, 2)
	.addItem('Spirit seed')

	/* Resources */
	.addItem('Snakeskin', 35, 11)
	.addItem('Runite ore', 2, 11)
	.addItem('Pure essence', 1500, 10)
	.add(ZulrahFlaxMutagenTable, undefined, 10)
	.addItem('Yew logs', 35, 10)
	.addItem('Adamantite bar', 20, 8)
	.addItem('Coal', 200, 8)
	.addItem('Dragon bones', 12, 8)
	.addItem('Mahogany logs', 50, 8)

	/* Other */
	.addItem('Zul-andra teleport', 4, 15)
	.addItem('Manta ray', 35, 12)
	.addItem('Antidote++(4)', 10, 9)
	.addItem('Dragonstone bolt tips', 12, 8)
	.addItem('Grapes', 250, 6)
	.addItem('Coconut', 20, 5)
	.addItem('Swamp tar', 1000, 5)
	.addItem("Zulrah's scales", 500, 5);

export class Zulrah extends SimpleMonster {
	public kill(quantity = 1): ItemBank {
		const loot = new Loot();

		for (let i = 0; i < quantity; i++) {
			loot.add(ZulrahTable.roll());
			loot.add(ZulrahTable.roll());

			loot.add("Zulrah's scales", rand(100, 299));
			if (roll(75)) loot.add('Clue scroll (elite)');
			if (roll(3000)) loot.add('Jar of swamp');
			if (roll(4000)) loot.add('Pet snakeling');
		}

		return loot.values();
	}
}

export default new Zulrah({ id: 2042, name: 'Zulrah', table: ZulrahTable });
