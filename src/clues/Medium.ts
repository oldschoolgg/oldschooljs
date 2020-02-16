import { PrayerPageTable, TeleportScrollTable, BlessingTable } from './General';
import LootTable from '../structures/LootTable';
import Clue from '../structures/Clue';
import { ItemBank } from '../meta/types';
import Loot from '../structures/Loot';
import { rand, roll } from '../util/util';

export const MediumUnicornTable = new LootTable()
	.addItem('White unicorn mask')
	.addItem('Black unicorn mask');

export const MediumElegantTable = new LootTable()
	.addItem('Purple elegant shirt')
	.addItem('Purple elegant legs')
	.addItem('Purple elegant blouse')
	.addItem('Purple elegant skirt')
	.addItem('Black elegant shirt')
	.addItem('Black elegant legs')
	.addItem('White elegant blouse')
	.addItem('White elegant skirt')
	.addItem('Pink elegant shirt')
	.addItem('Pink elegant legs')
	.addItem('Pink elegant blouse')
	.addItem('Pink elegant skirt')
	.addItem('Gold elegant shirt')
	.addItem('Gold elegant legs')
	.addItem('Gold elegant blouse')
	.addItem('Gold elegant skirt');

export const MediumRareTable = new LootTable()
	.addItem('Ranger boots')
	.addItem('Wizard boots')
	.addItem('Leprechaun Hat')
	.addItem('Cat mask')
	.addItem('Penguin mask')
	.addItem('Crier hat')
	.addItem('Adamant cane')
	.addItem('Cabbage round shield')
	.addItem('Crier coat')
	.addItem('Crier bell')
	.addItem('Black leprechaun hat')
	.addItem('Holy sandals')
	.addItem('Wolf mask')
	.addItem('Wolf cloak')
	.addItem('Spiked manacles')
	.addItem('Red headband')
	.addItem('Black headband')
	.addItem('Brown headband')
	.addItem('White headband')
	.addItem('Blue headband')
	.addItem('Gold headband')
	.addItem('Pink headband')
	.addItem('Green headband')
	.addItem('Red boater')
	.addItem('Orange boater')
	.addItem('Green boater')
	.addItem('Black boater')
	.addItem('Blue boater')
	.addItem('Pink boater')
	.addItem('Purple boater')
	.addItem('White boater')
	.addItem('Adamant platebody (t)')
	.addItem('Adamant platelegs (t)')
	.addItem('Adamant kiteshield (t)')
	.addItem('Adamant full helm (t)')
	.addItem('Adamant plateskirt (t)')
	.addItem('Mithril platebody (t)')
	.addItem('Mithril platelegs (t)')
	.addItem('Mithril plateskirt (t)')
	.addItem('Mithril kiteshield (t)')
	.addItem('Mithril full helm (t)')
	.addItem('Adamant platebody (g)')
	.addItem('Adamant platelegs (g)')
	.addItem('Adamant kiteshield (g)')
	.addItem('Adamant full helm (g)')
	.addItem('Adamant plateskirt (g)')
	.addItem('Mithril platebody (g)')
	.addItem('Mithril platelegs (g)')
	.addItem('Mithril plateskirt (g)')
	.addItem('Mithril kiteshield (g)')
	.addItem('Mithril full helm (g)')
	.addItem('Climbing boots (g)')
	.addItem('Adamant shield (h1)')
	.addItem('Adamant shield (h2)')
	.addItem('Adamant shield (h3)')
	.addItem('Adamant shield (h4)')
	.addItem('Adamant shield (h5)')
	.addItem('Adamant helm (h1)')
	.addItem('Adamant helm (h2)')
	.addItem('Adamant helm (h3)')
	.addItem('Adamant helm (h4)')
	.addItem('Adamant helm (h5)')
	.addItem('Adamant platebody (h1)')
	.addItem('Adamant platebody (h2)')
	.addItem('Adamant platebody (h3)')
	.addItem('Adamant platebody (h4)')
	.addItem('Adamant platebody (h5)')
	.addItem("Green d'hide body (g)")
	.addItem("Green d'hide body (t)")
	.addItem("Green d'hide chaps (g)")
	.addItem("Green d'hide chaps (t)")
	.addItem('Saradomin mitre')
	.addItem('Guthix mitre')
	.addItem('Zamorak mitre')
	.addItem('Ancient mitre')
	.addItem('Armadyl mitre')
	.addItem('Bandos mitre')
	.addItem('Saradomin cloak')
	.addItem('Guthix cloak')
	.addItem('Zamorak cloak')
	.addItem('Ancient cloak')
	.addItem('Armadyl cloak')
	.addItem('Bandos cloak')
	.addItem('Ancient stole')
	.addItem('Bandos stole')
	.addItem('Armadyl stole')
	.addItem('Ancient crozier')
	.addItem('Armadyl crozier')
	.addItem('Bandos crozier')
	.addItem('Arceuus banner')
	.addItem('Piscarilius banner')
	.addItem('Hosidius banner')
	.addItem('Shayzien banner')
	.addItem('Lovakengj banner')
	.add(MediumUnicornTable)
	.add(MediumElegantTable, undefined, 8);

// For some reason the medium table has 1 less firelighter chance?
export const MediumSubFirelighterTable = new LootTable()
	.addItem('Red firelighter', [4, 9])
	.addItem('Green firelighter', [4, 9])
	.addItem('Blue firelighter', [4, 9])
	.addItem('Purple firelighter', [4, 9])
	.addItem('White firelighter', [4, 9]);

export const MediumFirelighterTable = new LootTable()
	.addItem('Gnomish firelighter')
	.add(MediumSubFirelighterTable, undefined, 9);

export const MediumAmuletTable = new LootTable()
	.addItem('Strength amulet (t)')
	.addItem('Amulet of power', undefined, 9);

export const MediumBowTable = new LootTable()
	.addItem('Yew comp bow')
	.addItem('Yew longbow', undefined, 9);

export const MediumStandardTable = new LootTable()
	.addItem('Coins', [200, 1000])
	.addItem('Lobster', [8, 12])
	.addItem('Swordfish', [8, 12])
	.addItem('Air rune', [50, 100])
	.addItem('Fire rune', [50, 100])
	.addItem('Water rune', [50, 100])
	.addItem('Earth rune', [50, 100])
	.addItem('Mind rune', [50, 100])
	.addItem('Death rune', [10, 10])
	.addItem('Law rune', [10, 10])
	.addItem('Chaos rune', [10, 10])
	.addItem('Nature rune', [10, 10])
	.addItem('Adamant longsword')
	.addItem('Adamant full helm')
	.addItem('Adamant platelegs')
	.addItem('Adamant battleaxe')
	.addItem('Adamant axe')
	.addItem('Adamant pickaxe')
	.addItem('Adamant dagger')
	.addItem('Adamant platebody')
	.addItem('Purple sweets', [5, 10])
	.addItem('Fire battlestaff')
	.addItem("Green d'hide chaps")
	.addItem("Green d'hide body")
	.addItem('Yew shortbow')
	.add(PrayerPageTable)
	.add(TeleportScrollTable)
	.add(BlessingTable)
	.add(MediumFirelighterTable)
	.add(MediumAmuletTable)
	.add(MediumBowTable);

export const MediumClueTable = new LootTable()
	.add(MediumStandardTable, undefined, 10)
	.add(MediumRareTable, undefined, 1);

export class MediumCasket extends Clue {
	public open(quantity = 1): ItemBank {
		const loot = new Loot();

		for (let i = 0; i < quantity; i++) {
			const numberOfRolls = rand(3, 5);

			if (roll(30)) loot.add('Clue scroll (master)');

			for (let i = 0; i < numberOfRolls; i++) {
				loot.add(MediumClueTable.roll());
			}
		}

		return loot.values();
	}
}

export default new MediumCasket();
