import LootTable from '../structures/LootTable';
import Loot from '../structures/Loot';
import { ItemBank } from '../meta/types';
import { roll } from '../util';
import Monster from '../structures/Monster';

export const BarrowsTable = new LootTable();

[
	"Ahrim's hood",
	"Ahrim's robetop",
	"Ahrim's robeskirt",
	"Ahrim's staff",

	"Dharok's helm",
	"Dharok's platebody",
	"Dharok's platelegs",
	"Dharok's greataxe",

	"Guthan's helm",
	"Guthan's platebody",
	"Guthan's chainskirt",
	"Guthan's warspear",

	"Karil's coif",
	"Karil's leathertop",
	"Karil's leatherskirt",
	"Karil's crossbow",

	"Torag's helm",
	"Torag's platebody",
	"Torag's platelegs",
	"Torag's hammers",

	"Verac's helm",
	"Verac's brassard",
	"Verac's plateskirt",
	"Verac's flail"
].map(item => BarrowsTable.addItem(item, 1, 7));

export const OtherTable = new LootTable()
	.addItem('Coins', [1, 5306], 380)
	.addItem('Mind rune', [1, 2889], 125)
	.addItem('Chaos rune', [1, 885], 125)
	.addItem('Death rune', [1, 578], 125)
	.addItem('Bolt rack', [1, 191], 125)
	.addItem('Blood rune', [1, 236], 125)
	.add(new LootTable().addItem('Loop half of key').addItem('Tooth half of key'), 1, 6)
	.addItem('Dragon med helm');

const NUMBER_OF_BROTHERS = 6;

export class Barrows extends Monster {
	public kill(quantity = 1): ItemBank {
		const loot = new Loot();

		for (let i = 0; i < quantity; i++) {
			const barrowsItemsThisKill = new Set();
			// You get 1 initial roll, then +6 for 6 brothers killed.
			for (let x = 0; x < NUMBER_OF_BROTHERS; x++) {
				// 1 in (450 - (58 * Number of Brothers Killed))
				if (roll(450 - 58 * NUMBER_OF_BROTHERS)) {
					let barrowsItem = BarrowsTable.roll()[0];
					while (barrowsItemsThisKill.has(barrowsItem.item)) {
						barrowsItem = BarrowsTable.roll()[0];
					}
					barrowsItemsThisKill.add(barrowsItem.item);
					loot.add(barrowsItem);
				} else {
					loot.add(OtherTable.roll());
				}
			}
		}

		return loot.values();
	}
}

// Uses NPC id for Dharoks

export default new Barrows({ id: 1673, name: 'Zulrah' });
