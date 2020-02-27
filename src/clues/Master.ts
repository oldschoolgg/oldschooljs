import {
	PrayerPageTable,
	GiveHalfKeyTable,
	GildedTable,
	FirelighterTable,
	TeleportScrollTable,
	BlessingTable
} from './General';
import LootTable from '../structures/LootTable';
import Clue from '../structures/Clue';
import { ItemBank } from '../meta/types';
import Loot from '../structures/Loot';
import { rand, roll } from '../util/util';

export const MasterGodSwordOrnTable = new LootTable()
	.addItem('Armadyl godsword ornament kit')
	.addItem('Bandos godsword ornament kit')
	.addItem('Zamorak godsword ornament kit')
	.addItem('Saradomin godsword ornament kit');

export const MasterSubAnkouOutfitTable = new LootTable()
	.addItem('Ankou mask')
	.addItem('Ankou top')
	.addItem('Ankou leggings')
	.addItem('Ankou gloves')
	.addItem('Ankou socks');

export const MasterAnkouOutfitTable = new LootTable()
	.addItem('Coins', [15000, 30000], 2)
	.add(MasterSubAnkouOutfitTable);

export const MasterSubMummyOutfitTable = new LootTable()
	.addItem("Mummy's head")
	.addItem("Mummy's body")
	.addItem("Mummy's legs")
	.addItem("Mummy's hands")
	.addItem("Mummy's feet");

export const MasterMummyOutfitTable = new LootTable()
	.addItem('Coins', [15000, 30000], 2)
	.add(MasterSubMummyOutfitTable);

export const MasterSubDragonOrnTable = new LootTable()
	.addItem('Dragon kiteshield ornament kit')
	.addItem('Dragon platebody ornament kit', undefined, 2);

export const MasterDragonOrnTable = new LootTable()
	.addItem('Coins', [15000, 30000], 9)
	.add(MasterSubDragonOrnTable);

export const Master3rdageTable = new LootTable()
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
	.addItem('3rd age bow')
	.addItem('3rd age druidic staff')
	.addItem('3rd age druidic cloak')
	.addItem('3rd age druidic robe top')
	.addItem('3rd age druidic robe bottoms')
	.addItem('3rd age pickaxe')
	.addItem('3rd age axe');

export const MasterMegaRareTable = new LootTable()
	.addItem('Gilded scimitar')
	.addItem('Bucket helm (g)')
	.addItem('Gilded boots')
	.addItem('Ring of coins')
	.addItem('Cabbage', 3)
	.addItem('Anti-venom+(4)', 15)
	.addItem('Torstol', 50)
	.addItem('Gilded coif')
	.addItem("Gilded d'hide vambs")
	.addItem("Gilded d'hide body")
	.addItem("Gilded d'hide chaps")
	.addItem('Gilded Pickaxe')
	.addItem('Gilded Axe')
	.addItem('Gilded spade')
	.add(Master3rdageTable)
	.add(GildedTable);

export const MasterRareTable = new LootTable()
	.addItem('Left eye patch')
	.addItem('Bowl wig')
	.addItem('Ale of the gods')
	.addItem('Half moon spectacles')
	.addItem('Fancy tiara')
	.addItem('Hood of darkness')
	.addItem('Robe top of darkness')
	.addItem('Gloves of darkness')
	.addItem('Robe bottom of darkness')
	.addItem('Boots of darkness')
	.addItem('Obsidian cape (r)')
	.addItem('Occult ornament kit')
	.addItem('Torture ornament kit')
	.addItem('Dragon defender ornament kit')
	.addItem('Samurai kasa')
	.addItem('Samurai shirt')
	.addItem('Samurai greaves')
	.addItem('Samurai boots')
	.addItem('Samurai gloves')
	.addItem('Arceuus hood')
	.addItem('Hosidius hood')
	.addItem('Lovakengj hood')
	.addItem('Piscarilius hood')
	.addItem('Shayzien hood')
	.addItem('Lesser demon mask')
	.addItem('Greater demon mask')
	.addItem('Black demon mask')
	.addItem('Jungle demon mask')
	.addItem('Old demon mask')
	.addItem('Anguish ornament kit')
	.addItem('Tormented ornament kit')
	.add(MasterMegaRareTable)
	.add(PrayerPageTable)
	.add(MasterGodSwordOrnTable)
	.add(MasterAnkouOutfitTable)
	.add(MasterMummyOutfitTable)
	.add(MasterDragonOrnTable);

export const MasterSeedTable = new LootTable()
	.addItem('Magic seed', [1, 2])
	.addItem('Yew seed', [1, 2])
	.addItem('Palm tree seed', [1, 2]);

export const MasterStandardTable = new LootTable()
	.addItem('Coins', [20000, 35000])
	.addItem('Manta ray', [15, 25])
	.addItem('Nature rune', [100, 200])
	.addItem('Death rune', [100, 200])
	.addItem('Blood rune', [100, 200])
	.addItem('Soul rune', [100, 200])
	.addItem('Limpwurt root', [40, 60])
	.addItem('Purple sweets', [14, 33])
	.addItem('Runite ore', [5, 8])
	.addItem('Wine of Zamorak', [35, 50])
	.addItem('Grimy toadflax', [25, 35])
	.addItem('Grimy ranarr weed', [5, 10])
	.addItem('Grimy snapdragon', [5, 10])
	.addItem('Runite bar', [5, 7])
	.addItem('Onyx bolts (e)', [15, 25])
	.addItem('Dragon dagger')
	.addItem('Dragon longsword')
	.addItem('Dragon battleaxe')
	.addItem('Dragon scimitar')
	.addItem('Dragon halberd')
	.addItem('Black dragonhide', [5, 25])
	.addItem('Dragon mace')
	.add(PrayerPageTable)
	.add(FirelighterTable)
	.add(TeleportScrollTable, 1, 2)
	.add(MasterSeedTable)
	.add(GiveHalfKeyTable)
	.add(BlessingTable);

export const MasterClueTable = new LootTable()
	.add(MasterStandardTable, undefined, 22)
	.add(MasterRareTable, undefined, 1);

export class MasterCasket extends Clue {
	public open(quantity = 1): ItemBank {
		const loot = new Loot();

		for (let i = 0; i < quantity; i++) {
			if (roll(1000)) loot.add('Bloodhound');

			const numberOfRolls = rand(5, 7);

			for (let i = 0; i < numberOfRolls; i++) {
				loot.add(MasterClueTable.roll());
			}
		}

		return loot.values();
	}
}

export default new MasterCasket();
