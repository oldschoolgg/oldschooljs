import LootTable from '../structures/LootTable';
import Loot from '../structures/Loot';
import { ItemBank } from '../meta/types';
import { roll } from '../util/util';
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
].map(item => BarrowsTable.addItem(item));

export const OtherTable = new LootTable()
	.addItem('Coins', [2, 760], 380)
	.addItem('Mind rune', [381, 504], 125)
	.addItem('Chaos rune', [168, 210], 125)
	.addItem('Death rune', [105, 124], 125)
	.addItem('Bolt rack', [35, 40], 125)
	.addItem('Blood rune', [55, 66], 125)
	.add(new LootTable().addItem('Loop half of key').addItem('Tooth half of key'), 1, 6)
	.addItem('Dragon med helm');

const NUMBER_OF_BROTHERS = 6;

export class Barrows extends Monster {
	public kill(quantity = 1): ItemBank {
		const loot = new Loot();

		for (let i = 0; i < quantity; i++) {
			if (roll(34)) loot.add('Clue scroll (elite)');

			const barrowsItemsThisKill = new Set();
			// You get 1 initial roll, then +6 for 6 brothers killed.
			for (let x = 0; x < NUMBER_OF_BROTHERS + 1; x++) {
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
export default new Barrows({ id: 1673, name: 'Barrows' });
