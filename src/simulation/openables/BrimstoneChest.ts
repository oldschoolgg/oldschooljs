import { ItemBank, OpenableOpenOptions } from '../../meta/types';
import Bank from '../../structures/Bank';
import LootTable from '../../structures/LootTable';
import SimpleOpenable from '../../structures/SimpleOpenable';
import { BrimstoneChestBonus } from './BonusOpenables';

const BrimstoneChestTable = new LootTable()
	.add('Uncut diamond', [25, 35], 5)
	.add('Uncut ruby', [25, 35], 5)
	.add('Coal', [300, 500], 5)
	.add('Coins', [50000, 150000], 5)
	.add('Gold ore', [100, 200], 4)
	.add('Dragon arrowtips', [50, 200], 4)
	.add('Iron ore', [350, 500], 3)
	.add('Rune full helm', [2, 4], 3)
	.add('Rune platebody', [1, 2], 3)
	.add('Rune platelegs', [1, 2], 3)
	.add('Runite ore', [10, 15], 2)
	.add('Steel bar', [300, 500], 2)
	.add('Magic logs', [120, 160], 2)
	.add('Dragon dart tip', [40, 160], 2)
	.add('Palm tree seed', [2, 4], 1)
	.add('Magic seed', [2, 4], 1)
	.add('Celastrus seed', [2, 4], 1)
	.add('Dragonfruit tree seed', [1, 4], 1)
	.add('Redwood tree seed', 1, 1)
	.add('Torstol seed', [3, 5], 1)
	.add('Snapdragon seed', [3, 5], 1)
	.add('Ranarr seed', [3, 5], 1)
	.add('Pure essence', [3000, 6000], 1)
	.oneIn(200, 'Broken dragon hasta')
	.oneIn(1000, 'Mystic hat (dusk)')
	.oneIn(1000, 'Mystic robe top (dusk)')
	.oneIn(1000, 'Mystic robe bottom (dusk)')
	.oneIn(1000, 'Mystic gloves (dusk)')
	.oneIn(1000, 'Mystic boots (dusk)');

export class BrimstoneChestOpenable extends SimpleOpenable {
	public open(quantity = 1, options: OpenableOpenOptions = { fishLvl: 99 }): ItemBank {
		const tempTable = BrimstoneChestTable.clone();
		const loot = new Bank();

		const fishLvl = options.fishLvl ?? 99;

		for (const fish of BrimstoneChestBonus) {
			if (typeof fish.req === 'number') {
				if (fishLvl >= fish.req) {
					tempTable.add(fish.item, fish.qty, fish.weight);
				}
			} else {
				if (fishLvl >= fish.req[0] && fishLvl <= fish.req[1]) {
					tempTable.add(fish.item, fish.qty, fish.weight);
				}
			}
		}

		for (let i = 0; i < quantity; i++) {
			loot.add(tempTable.roll());
		}

		return loot.values();
	}
}

export default new BrimstoneChestOpenable({
	id: 23083,
	name: 'Brimstone chest',
	aliases: ['brimstone chest', 'brimstone'],
	table: BrimstoneChestTable
});
