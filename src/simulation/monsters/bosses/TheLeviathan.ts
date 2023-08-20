import { randInt, roll, uniqueArr } from 'e';

import { MonsterKillOptions } from '../../../meta/types';
import Bank from '../../../structures/Bank';
import LootTable from '../../../structures/LootTable';
import Monster from '../../../structures/Monster';
import itemID from '../../../util/itemID';

const VirtusTable = new LootTable().add('Virtus mask').add('Virtus robe top').add('Virtus robe bottom');

const TradeableUniqueTable = new LootTable({ limit: 8 })
	.add(VirtusTable, 1, 1)
	.add('Chromium ingot', 1, 3)
	.add('Venator vestige', 1, 1)
	.add("Leviathan's lure", 1, 1);

const ClueTable = new LootTable()
	.add('Clue scroll (easy)')
	.add('Clue scroll (medium)')
	.add('Clue scroll (hard)')
	.add('Clue scroll (elite)');

const SupplyTable = new LootTable()
	.every('Prayer potion(3)', 1)
	.every('Ranging potion(2)', 1)
	.every('Sea turtle', [3, 4]);

const ResourceTable = new LootTable()
	.add('Pure essence', [180, 270], 100)
	.add('Iron ore', [57, 85], 100)
	.add('Silver ore', [57, 85], 100)
	.add('Coal', [195, 292], 100)
	.add('Gold ore', [67, 101], 100)
	.add('Adamantite ore', [57, 85], 100)
	.add('Runite ore', [27, 40], 100)
	.add('Sapphire', [25, 38], 100)
	.add('Emerald', [25, 38], 100)
	.add('Ruby', [25, 38], 100)
	.add('Uncut ruby', [37, 56], 100)
	.add('Uncut diamond', [37, 56], 100)
	.add('Dragon javelin heads', [54, 81], 100)
	.add('Dragon bolts (unf)', [150, 225], 100)
	.add('Onyx bolt tips', [90, 135], 100)
	.add('Raw manta ray', [180, 270], 100)
	.add('Anglerfish', [4, 6], 100);

class TheLeviathanSingleton extends Monster {
	public allItems: number[] = uniqueArr([
		...ClueTable.allItems,
		...SupplyTable.allItems,
		...ResourceTable.allItems,
		...TradeableUniqueTable.allItems,
		itemID("Awakener's orb"),
		itemID('Scarred tablet'),
		itemID('Smoke quartz'),
		itemID("Lil'viathan")
	]);

	public kill(quantity = 1, options: MonsterKillOptions = {}): Bank {
		const loot = new Bank();

		for (let i = 0; i < quantity; i++) {
			let tradeableUniqueCap = Boolean(options.isAwakened) ? 3 : 1;
			if (randInt(1, 96) <= tradeableUniqueCap) {
				loot.add(TradeableUniqueTable.roll());
			} else if (roll(53)) {
				loot.add("Awakener's orb");
			} else if (roll(25)) {
				loot.add('Scarred tablet');
			} else if (roll(200)) {
				loot.add('Smoke quartz');
			} else if (roll(5)) {
				loot.add(SupplyTable.roll());
			} else {
				loot.add(ResourceTable.roll());
			}

			if (roll(40)) {
				loot.add(ClueTable.roll());
			}
			if (roll(2500)) {
				loot.add("Lil'viathan");
			}
		}
		return loot;
	}
}

export const TheLeviathan = new TheLeviathanSingleton({
	id: 12_214,
	name: 'The Leviathan',
	aliases: ['the leviathan']
});
