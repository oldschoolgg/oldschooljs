import {
	PrayerPageTable,
	FirelighterTable,
	TeleportScrollTable,
	BlessingTable,
	GildedTable
} from './General';
import LootTable from '../structures/LootTable';
import Clue from '../structures/Clue';
import { ItemBank } from '../meta/types';
import Loot from '../structures/Loot';
import { rand, roll } from '../util/util';

export const Hard3rdageTable = new LootTable()
	.addItem('3rd age range coif')
	.addItem('3rd age range top')
	.addItem('3rd age range legs')
	.addItem('3rd age vambraces')
	.addItem('3rd age robe top')
	.addItem('3rd age robe')
	.addItem('3rd age mage hat')
	.addItem('3rd age amulet')
	.addItem('3rd age platelegs')
	.addItem('3rd age platebody')
	.addItem('3rd age full helmet')
	.addItem('3rd age plateskirt')
	.addItem('3rd age kiteshield');

export const HardMegaRareTable = new LootTable()
	.addItem('Super energy(4)', 15)
	.addItem('Super restore(4)', 15)
	.addItem('Antifire potion(4)', 15)
	.addItem([
		['Super attack(4)', 5],
		['Super strength(4)', 5],
		['Super defence(4)', 5]
	])
	.add(Hard3rdageTable)
	.add(GildedTable, undefined, 5);

export const HardBlessedShields = new LootTable()
	.addItem("Guthix d'hide shield")
	.addItem("Saradomin d'hide shield")
	.addItem("Zamorak d'hide shield")
	.addItem("Ancient d'hide shield")
	.addItem("Armadyl d'hide shield")
	.addItem("Bandos d'hide shield");

export const HardHeralicPlatebody = new LootTable()
	.addItem('Rune platebody (h1)')
	.addItem('Rune platebody (h2)')
	.addItem('Rune platebody (h3)')
	.addItem('Rune platebody (h4)')
	.addItem('Rune platebody (h5)');

export const HardRareTable = new LootTable()
	.addItem('Robin Hood hat')
	.addItem('Tan Cavalier')
	.addItem('Dark Cavalier')
	.addItem('Black Cavalier')
	.addItem('White Cavalier')
	.addItem('Red Cavalier')
	.addItem('Navy Cavalier')
	.addItem('Pirate hat')
	.addItem('Enchanted hat')
	.addItem('Enchanted top')
	.addItem('Enchanted robe')
	.addItem('Amulet of glory (t)')
	.addItem('Pith helmet')
	.addItem('Explorer backpack')
	.add(19912) // Zombie head
	.addItem('Nunchaku')
	.addItem('Cyclops head')
	.addItem('Dragon boots ornament kit')
	.addItem('Dual sai')
	.addItem('Thieving bag')
	.addItem('Rune defender ornament kit')
	.addItem('Tzhaar-ket-om ornament kit')
	.addItem('Berserker necklace ornament kit')
	.addItem('Rune cane')
	.addItem('Green dragon mask')
	.addItem('Blue dragon mask')
	.addItem('Red dragon mask')
	.addItem('Black dragon mask')
	.addItem('Rune platebody (t)')
	.addItem('Rune platelegs (t)')
	.addItem('Rune plateskirt (t)')
	.addItem('Rune kiteshield (t)')
	.addItem('Rune full helm (t)')
	.addItem('Rune platebody (g)')
	.addItem('Rune platelegs (g)')
	.addItem('Rune plateskirt (g)')
	.addItem('Rune kiteshield (g)')
	.addItem('Rune full helm (g)')
	.addItem('Rune helm (h1)')
	.addItem('Rune helm (h2)')
	.addItem('Rune helm (h3)')
	.addItem('Rune helm (h4)')
	.addItem('Rune helm (h5)')
	.addItem('Rune shield (h1)')
	.addItem('Rune shield (h2)')
	.addItem('Rune shield (h3)')
	.addItem('Rune shield (h4)')
	.addItem('Rune shield (h5)')
	.addItem('Zamorak platebody')
	.addItem('Zamorak platelegs')
	.addItem('Zamorak plateskirt')
	.addItem('Zamorak kiteshield')
	.addItem('Zamorak full helm')
	.addItem('Zamorak bracers')
	.addItem("Zamorak d'hide")
	.addItem('Zamorak chaps')
	.addItem('Zamorak coif')
	.addItem('Zamorak crozier')
	.addItem('Zamorak stole')
	.addItem("Zamorak d'hide boots")
	.addItem('Saradomin platebody')
	.addItem('Saradomin platelegs')
	.addItem('Saradomin plateskirt')
	.addItem('Saradomin kiteshield')
	.addItem('Saradomin full helm')
	.addItem('Saradomin bracers')
	.addItem("Saradomin d'hide")
	.addItem('Saradomin chaps')
	.addItem('Saradomin coif')
	.addItem('Saradomin crozier')
	.addItem('Saradomin stole')
	.addItem("Saradomin d'hide boots")
	.addItem('Guthix platebody')
	.addItem('Guthix platelegs')
	.addItem('Guthix plateskirt')
	.addItem('Guthix kiteshield')
	.addItem('Guthix full helm')
	.addItem('Guthix bracers')
	.addItem("Guthix d'hide")
	.addItem('Guthix chaps')
	.addItem('Guthix coif')
	.addItem('Guthix crozier')
	.addItem('Guthix stole')
	.addItem("Guthix d'hide boots")
	.addItem('Bandos platebody')
	.addItem('Bandos platelegs')
	.addItem('Bandos plateskirt')
	.addItem('Bandos kiteshield')
	.addItem('Bandos full helm')
	.addItem('Bandos bracers')
	.addItem("Bandos d'hide")
	.addItem('Bandos chaps')
	.addItem('Bandos coif')
	.addItem("Bandos d'hide boots")
	.addItem('Armadyl platebody')
	.addItem('Armadyl platelegs')
	.addItem('Armadyl plateskirt')
	.addItem('Armadyl kiteshield')
	.addItem('Armadyl full helm')
	.addItem('Armadyl bracers')
	.addItem("Armadyl d'hide")
	.addItem('Armadyl chaps')
	.addItem('Armadyl coif')
	.addItem("Armadyl d'hide boots")
	.addItem('Ancient platebody')
	.addItem('Ancient platelegs')
	.addItem('Ancient plateskirt')
	.addItem('Ancient kiteshield')
	.addItem('Ancient full helm')
	.addItem('Ancient bracers')
	.addItem("Ancient d'hide")
	.addItem('Ancient chaps')
	.addItem('Ancient coif')
	.addItem("Ancient d'hide boots")
	.addItem("Blue d'hide body (t)")
	.addItem("Blue d'hide chaps (t)")
	.addItem("Blue d'hide body (g)")
	.addItem("Blue d'hide chaps (g)")
	.addItem("Red d'hide body (t)")
	.addItem("Red d'hide chaps (t)")
	.addItem("Red d'hide body (g)")
	.addItem("Red d'hide chaps (g)")
	.add(HardMegaRareTable)
	.add(HardBlessedShields)
	.add(HardHeralicPlatebody);

export const HardBowTable = new LootTable()
	.addItem('Magic comp bow')
	.addItem('Magic longbow', undefined, 9);

export const HardStandardTable = new LootTable()
	.addItem('Coins', [1000, 5000])
	.addItem('Lobster', [12, 15])
	.addItem('Shark', [12, 15])
	.addItem('Law rune', [30, 50])
	.addItem('Blood rune', [20, 30])
	.addItem('Nature rune', [30, 50])
	.addItem('Purple sweets', [7, 15])
	.addItem('Rune longsword')
	.addItem('Rune full helm')
	.addItem('Rune platelegs')
	.addItem('Rune battleaxe')
	.addItem('Rune axe')
	.addItem('Rune pickaxe')
	.addItem('Rune dagger')
	.addItem('Rune platebody')
	.addItem('Rune platelegs')
	.addItem('Rune plateskirt')
	.addItem('Rune kiteshield')
	.addItem("Black d'hide chaps")
	.addItem("Black d'hide body")
	.addItem('Magic shortbow')
	.add(PrayerPageTable)
	.add(FirelighterTable)
	.add(TeleportScrollTable)
	.add(BlessingTable)
	.add(HardBowTable);

export const HardClueTable = new LootTable()
	.add(HardStandardTable, undefined, 12)
	.add(HardRareTable, undefined, 1);

export class HardCasket extends Clue {
	public open(quantity = 1): ItemBank {
		const loot = new Loot();

		for (let i = 0; i < quantity; i++) {
			const numberOfRolls = rand(4, 6);

			if (roll(15)) loot.add('Clue scroll (master)');

			for (let i = 0; i < numberOfRolls; i++) {
				loot.add(HardClueTable.roll());
			}
		}

		return loot.values();
	}
}

export default new HardCasket();
