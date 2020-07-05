import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { ItemBank } from '../../../meta/types';
import Loot from '../../../structures/Loot';
import { roll, rand } from '../../../util/util';
import RareDropTable from '../../subtables/RareDropTable';

const ZulrahUniqueTable = new LootTable()
	.add('Tanzanite fang')
	.add('Magic fang')
	.add('Serpentine visage')
	.add('Uncut onyx');

const ZulrahFlaxMutagenTable = new LootTable()
	.add('Tanzanite mutagen', 1, 10)
	.add('Magma mutagen', 1, 10)
	.add('Flax', 1000, 5244);

const ZulrahTable = new LootTable()
	.add(RareDropTable, 1, 9)
	.oneIn(256, ZulrahUniqueTable)

	/* Weapons and armour */
	.add('Battlestaff', 10, 10)
	.add('Dragon med helm', 1, 2)
	.add('Dragon halberd', 1, 2)

	/* Runes */
	.add('Death rune', 300, 12)
	.add('Law rune', 200, 12)
	.add('Chaos rune', 500, 12)

	/* Herbs */
	.add('Snapdragon', 10, 2)
	.add('Dwarf weed', 30, 2)
	.add('Toadflax', 25, 2)
	.add('Torstol', 10, 2)

	/* Seeds */
	.add('Palm tree seed', 1, 6)
	.add('Papaya tree seed', 3, 6)
	.add('Calquat tree seed', 2, 6)
	.add('Magic seed', 1, 4)
	.add('Toadflax seed', 2, 2)
	.add('Snapdragon seed', 1, 2)
	.add('Dwarf weed seed', 2, 2)
	.add('Torstol seed', 1, 2)
	.add('Spirit seed')

	/* Resources */
	.add('Snakeskin', 35, 11)
	.add('Runite ore', 2, 11)
	.add('Pure essence', 1500, 10)
	.add(ZulrahFlaxMutagenTable, 1, 10)
	.add('Yew logs', 35, 10)
	.add('Adamantite bar', 20, 8)
	.add('Coal', 200, 8)
	.add('Dragon bones', 12, 8)
	.add('Mahogany logs', 50, 8)

	/* Other */
	.add('Zul-andra teleport', 4, 15)
	.add('Manta ray', 35, 12)
	.add('Antidote++(4)', 10, 9)
	.add('Dragonstone bolt tips', 12, 8)
	.add('Grapes', 250, 6)
	.add('Coconut', 20, 6)
	.add('Swamp tar', 1000, 5)
	.add("Zulrah's scales", 500, 5);

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

export default new Zulrah({
	id: 2042,
	name: 'Zulrah',
	table: ZulrahTable,
	aliases: ['zulrah', 'snek', 'zul']
});
