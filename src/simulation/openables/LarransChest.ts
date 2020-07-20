import LootTable from '../../structures/LootTable';
import { OpenableOpenOptions, ItemBank } from '../../meta/types';
import Loot from '../../structures/Loot';
import SimpleOpenable from '../../structures/SimpleOpenable';
import clone from '../../util/clone';
import { LarransBigChestBonus, LarransSmallChestBonus } from './BonusOpenables';

//TODO check wiki for more accurate results in future
const LarransSmallChestTable = new LootTable()
	.add('Uncut diamond', 21, 5)
	.add('Uncut ruby', [24, 29], 5)
	.add('Coal', [352, 443], 5)
	.add('Coins', [74000, 75000], 4)
	.add('Gold ore', [100, 150], 4)
	.add('Dragon arrowtips', [49, 182], 4)
	.add('Iron ore', [300, 450], 3)
	.add('Rune full helm', 3, 3)
	.add('Rune platebody', 2, 3)
	.add('Rune platelegs', 2, 3)
	.add('Runite ore', [10, 15], 2)
	.add('Steel bar', [250, 350], 2)
	.add('Magic logs', [80, 120], 2)
	.add('Dragon dart tip', 80, 2)
	.add('Palm tree seed', [2, 4], 1)
	.add('Magic seed', [1, 3], 1)
	.add('Celastrus seed', [2, 4], 1)
	.add('Dragonfruit tree seed', [1, 3], 1)
	.add('Redwood tree seed', 1, 1)
	.add('Torstol seed', 3, 1)
	.add('Snapdragon seed', 3, 1)
	.add('Ranarr seed', [2, 4], 1)
	.add('Pure essence', [3359, 5815], 1);

const LarransBigChestTable = new LootTable()
	.oneIn(256, `Dagon'hai hat`)
	.oneIn(256, `Dagon'hai robe top`)
	.oneIn(256, `Dagon'hai robe bottom`)
	.add('Uncut diamond', [35, 45], 5)
	.add('Uncut ruby', [35, 45], 5)
	.add('Coal', [450, 650], 5)
	.add('Gold ore', [150, 250], 4)
	.add('Dragon arrowtips', [100, 250], 4)
	.add('Coins', [75000, 175000], 3)
	.add('Iron ore', [500, 650], 3)
	.add('Rune full helm', [3, 5], 3)
	.add('Rune platebody', [2, 3], 3)
	.add('Rune platelegs', [2, 3], 3)
	.add('Pure essence', [4500, 7500], 3)
	.add('Runite ore', [15, 20], 2)
	.add('Steel bar', [350, 550], 2)
	.add('Magic logs', [180, 220], 2)
	.add('Dragon dart tip', [80, 200], 2)
	.add('Palm tree seed', [3, 5], 1)
	.add('Magic seed', [3, 4], 1)
	.add('Celastrus seed', [3, 5], 1)
	.add('Dragonfruit tree seed', [3, 5], 1)
	.add('Redwood tree seed', 1, 1)
	.add('Torstol seed', [4, 6], 1)
	.add('Snapdragon seed', [4, 6], 1)
	.add('Ranarr seed', [4, 6], 1);

const LarransChestTable = new LootTable().add(LarransSmallChestTable).add(LarransBigChestTable);

export class LarransChestOpenable extends SimpleOpenable {
	public open(
		quantity = 1,
		options: OpenableOpenOptions = { fishLvl: 99, chestSize: 'big' }
	): ItemBank {
		let tempTable;
		const loot = new Loot();
		const tier = options.chestSize ?? 'big';
		const fishLvl = options.fishLvl ?? 99;

		if (tier.toLowerCase() === 'big') {
			tempTable = clone(LarransBigChestTable);

			for (const fish of LarransBigChestBonus) {
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
		} else {
			tempTable = clone(LarransSmallChestTable);

			for (const fish of LarransSmallChestBonus) {
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
		}

		for (let i = 0; i < quantity; i++) {
			loot.add(tempTable.roll());
		}

		return loot.values();
	}
}

export default new LarransChestOpenable({
	id: 23490,
	name: "Larran's chest",
	aliases: [
		'larran big chest',
		'larrans big chest',
		"larran's big chest",
		"Larran's small chest",
		'larran small chest',
		'larrans small chest',
		"larran's small chest"
	],
	table: LarransChestTable
});
