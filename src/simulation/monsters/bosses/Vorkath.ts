import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { ItemBank } from '../../../meta/types';
import Loot from '../../../structures/Loot';
import { roll } from '../../../util/util';
import RareDropTable from '../../subtables/RareDropTable';
import TreeHerbSeedTable from '../../subtables/TreeHerbSeedTable';

const VorkathBoltTipTable = new LootTable()
	.add('Diamond bolt tips', [25, 30], 10)
	.add('Emerald bolt tips', [25, 30], 8)
	.add('Ruby bolt tips', [25, 30], 8)
	.add('Dragonstone bolt tips', [25, 30], 6)
	.add('Onyx bolt tips', [25, 30], 3)
	.add('Sapphire bolt tips', [25, 30], 2);

export const VorkathTable = new LootTable()
	.every('Superior dragon bones')
	.every('Blue dragonhide')

	/* Weapons and armour */
	.addItem('Rune longsword', [2, 3], 5)
	.addItem('Rune kiteshield', [2, 3], 5)
	.addItem('Battlestaff', [5, 15], 4)
	.addItem('Dragon battleaxe', 1, 2)
	.addItem('Dragon longsword', 1, 2)
	.addItem('Dragon platelegs', 1, 2)
	.addItem('Dragon plateskirt', 1, 2)

	/* Runes */
	.addItem('Chaos rune', [650, 1000], 6)
	.addItem('Death rune', [300, 500], 6)
	.addItem('Wrath rune', [30, 60], 3)

	/* Dragonhide */
	.addItem('Blue dragonhide', [25, 30], 8)
	.addItem('Green dragonhide', [25, 30], 7)
	.addItem('Red dragonhide', [20, 25], 7)
	.addItem('Black dragonhide', [15, 25], 7)

	/* Fletching materials */
	.addItem('Dragon bolts (unf)', [50, 100], 8)
	.addItem('Dragon dart tip', [10, 50], 6)
	.addItem('Dragonstone bolt tips', [11, 25], 5)
	.addItem('Onyx bolt tips', [5, 10], 4)
	.addItem('Rune dart tip', [75, 100], 3)
	.addItem('Dragon arrowtips', [25, 50], 3)
	.add(VorkathBoltTipTable, undefined, 5)

	/* Other */
	.add(RareDropTable, undefined, 5)
	.add(TreeHerbSeedTable, undefined, 3)
	.addItem('Adamantite ore', [10, 30], 7)
	.addItem('Coins', [20000, 81000], 5)
	.addItem('Grapes', [250, 300], 5)
	.addItem('Magic logs', 50, 5)
	.addItem('Manta ray', [35, 55], 4)
	.addItem('Dragon bones', [15, 20], 4)
	.addItem('Diamond', [10, 20], 4)
	.addItem('Dragonstone', [2, 3], 3)
	.addItem('Wrath talisman', 1, 3);

export class Vorkath extends SimpleMonster {
	public kill(quantity = 1): ItemBank {
		const loot = new Loot();

		for (let i = 0; i < quantity; i++) {
			loot.add(VorkathTable.roll());
			loot.add(VorkathTable.roll());

			if (roll(50)) loot.add("Vorkath's head");
			if (roll(65)) loot.add('Clue scroll (elite)');
			if (roll(1000)) loot.add('Dragonbone necklace');
			if (roll(3000)) loot.add('Jar of decay');
			if (roll(3000)) loot.add('Vorki');
			if (roll(5000)) loot.add('Draconic visage');
			if (roll(5000)) loot.add('Skeletal visage');
		}

		return loot.values();
	}
}

export default new Vorkath({
	id: 8026,
	name: 'Vorkath',
	table: VorkathTable,
	aliases: ['vorkath', 'vorki', 'vork']
});
