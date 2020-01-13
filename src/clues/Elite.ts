import {
	GildedTable,
	PrayerPageTable,
	FirelighterTable,
	GiveHalfKeyTable,
	BlessingTable,
	TeleportScrollTable
} from './General';
import LootTable from '../structures/LootTable';
import Clue from '../structures/Clue';
import { ItemBank } from '../meta/types';
import Loot from '../structures/Loot';
import { rand, roll } from '../util/util';

export const Elite3rdageTable = new LootTable()
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
	.addItem('3rd age kiteshield')
	.addItem('3rd age longsword')
	.addItem('3rd age druidic cloak')
	.addItem('3rd age wand')
	.addItem('3rd age bow');

export const EliteMegaRareTable = new LootTable()
	.addItem('Gilded scimitar')
	.addItem('Gilded boots')
	.addItem('Battlestaff', 100)
	.addItem('Crystal key')
	.addItem('Lava dragon mask')
	.addItem('Ranging potion(4)', 30)
	.addItem('Saradomin brew(4)', 30)
	.addItem('Super restore(4)', 30)
	.addItem('Ring of nature')
	.addItem('Extended antifire(4)', 30)
	.addItem('Gilded coif')
	.addItem("Gilded d'hide vambs")
	.addItem("Gilded d'hide body")
	.addItem("Gilded d'hide chaps")
	.addItem('Gilded pickaxe')
	.addItem('Gilded axe')
	.addItem('Gilded Spade')
	.add(GildedTable, undefined, 5)
	.add(Elite3rdageTable);

export const EliteTuxedoTable = new LootTable()
	.addItem('Dark tuxedo jacket')
	.addItem('Dark tuxedo cuffs')
	.addItem('Dark trousers')
	.addItem('Dark tuxedo shoes')
	.addItem('Dark bow tie')
	.addItem('Light tuxedo jacket')
	.addItem('Light tuxedo cuffs')
	.addItem('Light trousers')
	.addItem('Light tuxedo shoes')
	.addItem('Light bow tie');

export const EliteRareTable = new LootTable()
	.addItem('Dragon Cane')
	.addItem('Briefcase')
	.addItem('Sagacious spectacles')
	.addItem('Royal crown')
	.addItem('Royal sceptre')
	.addItem('Royal gown top')
	.addItem('Royal gown bottom')
	.addItem('Fury ornament kit')
	.addItem('Dragon chainbody ornament kit')
	.addItem('Dragon legs/skirt ornament kit')
	.addItem('Dragon sq shield ornament kit')
	.addItem('Dragon full helm ornament kit')
	.addItem('Bronze dragon mask')
	.addItem('Iron dragon mask')
	.addItem('Steel dragon mask')
	.addItem('Mithril dragon mask')
	.addItem('Afro')
	.addItem('Katana')
	.addItem('Pirate hat')
	.addItem('Top hat')
	.addItem('Top hat & monocle')
	.addItem('Light infinity colour kit')
	.addItem('Dark infinity colour kit')
	.addItem("Black d'hide chaps (t)")
	.addItem("Black d'hide chaps (g)")
	.addItem("Black d'hide body (t)")
	.addItem("Black d'hide body (g)")
	.addItem('Musketeer hat')
	.addItem('Musketeer tabard')
	.addItem('Musketeer pants')
	.addItem('Deerstalker')
	.addItem("Blacksmith's helm")
	.addItem('Arceuus scarf')
	.addItem('Hosidius scarf')
	.addItem('Lovakengj scarf')
	.addItem('Piscarilius scarf')
	.addItem('Shayzien scarf')
	.addItem('Dragon scimitar ornament kit')
	.addItem('Holy wraps')
	.addItem('Ranger gloves')
	.addItem('Bucket helm')
	.addItem('Fremennik kilt')
	.addItem('Adamant dragon mask')
	.addItem('Rune dragon mask')
	.addItem("Rangers' tights")
	.addItem("Uri's hat")
	.addItem('Giant boot')
	.addItem("Rangers' tunic")
	.add(EliteMegaRareTable)
	.add(EliteTuxedoTable);

export const EliteSeedTable = new LootTable()
	.addItem('Magic seed')
	.addItem('Yew seed')
	.addItem('Palm tree seed');

export const EliteStandardTable = new LootTable()
	.addItem('Coins', [20000, 30000])
	.addItem('Tuna potato', [15, 20])
	.addItem('Summer pie', [15, 20])
	.addItem('Law rune', [50, 75])
	.addItem('Death rune', [50, 75])
	.addItem('Blood rune', [50, 75])
	.addItem('Soul rune', [50, 75])
	.addItem('Oak plank', [60, 80])
	.addItem('Purple sweets', [9, 23])
	.addItem('Teak plank', [40, 50])
	.addItem('Mahogany plank', [20, 30])
	.addItem('Dragonstone bracelet')
	.addItem('Dragon necklace')
	.addItem('Dragonstone ring')
	.addItem('Runite bar', [1, 3])
	.addItem('Onyx bolt tips', [8, 12])
	.addItem('Dragon dagger')
	.addItem('Dragon longsword')
	.addItem('Rune platebody')
	.addItem('Rune platelegs')
	.addItem('Rune plateskirt')
	.addItem('Rune kiteshield')
	.addItem('Dragon mace')
	.addItem('Rune crossbow')
	.add(EliteSeedTable)
	.add(PrayerPageTable)
	.add(FirelighterTable)
	.add(GiveHalfKeyTable)
	.add(TeleportScrollTable, undefined, 2)
	.add(BlessingTable);

export const EliteClueTable = new LootTable()
	.add(EliteStandardTable, undefined, 24)
	.add(EliteRareTable, undefined, 1);

class EliteCasket extends Clue {
	public open(quantity = 1): ItemBank {
		const loot = new Loot();

		for (let i = 0; i < quantity; i++) {
			const numberOfRolls = rand(4, 6);

			if (roll(5)) loot.add('Clue scroll (master)');

			for (let i = 0; i < numberOfRolls; i++) {
				loot.add(EliteClueTable.roll());
			}
		}

		return loot.values();
	}
}

export default new EliteCasket();
