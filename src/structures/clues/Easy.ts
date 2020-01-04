import LootTable from '../LootTable';
import Clue from '../Clue';
import { PrayerPageTable, FirelighterTable, TeleportScrollTable, BlessingTable } from './General';
import { rand, roll } from '../../util';
import { ItemBank } from '../../meta/types';
import Loot from '../Loot';

export const EasyChefTable = new LootTable().addItem('Golden apron').addItem("Golden chef's hat");

export const EasySubMonkTable = new LootTable()
	.addItem("Monk's robe top (g)")
	.addItem("Monk's robe (g)");

export const EasyMonkTable = new LootTable()
	.addItem('Coins', [3400, 6200], 4)
	.add(EasySubMonkTable);

export const EasyCapeTable = new LootTable()
	.addItem('Team cape zero')
	.addItem('Team cape i')
	.addItem('Team cape x')
	.addItem('Cape of skulls');

export const EasyElegantTable = new LootTable()
	.addItem('Red elegant shirt')
	.addItem('Red elegant legs')
	.addItem('Red elegant blouse')
	.addItem('Red elegant skirt')
	.addItem('Green elegant shirt')
	.addItem('Green elegant legs')
	.addItem('Green elegant blouse')
	.addItem('Green elegant skirt')
	.addItem('Blue elegant shirt')
	.addItem('Blue elegant legs')
	.addItem('Blue elegant blouse')
	.addItem('Blue elegant skirt');

export const EasyRareTable = new LootTable()
	.addItem('Highwayman mask')
	.addItem('Blue beret')
	.addItem('Black beret')
	.addItem('White beret')
	.addItem('A powdered wig')
	.addItem('Flared trousers')
	.addItem('Pantaloons')
	.addItem('Sleeping cap')
	.addItem('Beanie')
	.addItem('Imp mask')
	.addItem('Goblin mask')
	.addItem('Black cane')
	.addItem('Red beret')
	.addItem('Rain bow')
	.addItem('Ham joint')
	.addItem('Staff of bob the cat')
	.addItem("Bob's red shirt")
	.addItem("Bob's blue shirt")
	.addItem("Bob's green shirt")
	.addItem("Bob's black shirt")
	.addItem("Bob's purple shirt")
	.addItem('Black platebody (t)')
	.addItem('Black platelegs (t)')
	.addItem('Black plateskirt (t)')
	.addItem('Black Full Helm (t)')
	.addItem('Black Kiteshield (t)')
	.addItem('Studded body (t)')
	.addItem('Studded chaps (t)')
	.addItem('Blue skirt (t)')
	.addItem('Blue wizard robe (t)')
	.addItem('Blue wizard hat (t)')
	.addItem('Bronze platebody (t)')
	.addItem('Bronze platelegs (t)')
	.addItem('Bronze plateskirt (t)')
	.addItem('Bronze kiteshield (t)')
	.addItem('Bronze full helm (t)')
	.addItem('Iron platebody (t)')
	.addItem('Iron platelegs (t)')
	.addItem('Iron plateskirt (t)')
	.addItem('Iron full helm (t)')
	.addItem('Iron kiteshield (t)')
	.addItem('Black wizard hat (t)')
	.addItem('Black wizard robe (t)')
	.addItem('Black skirt (t)')
	.addItem('Steel full helm (t)')
	.addItem('Steel platebody (t)')
	.addItem('Steel platelegs (t)')
	.addItem('Steel plateskirt (t)')
	.addItem('Steel kiteshield (t)')
	.addItem('Amulet of power (t)')
	.addItem('Black Platebody (g)')
	.addItem('Black platelegs (g)')
	.addItem('Black plateskirt (g)')
	.addItem('Black full Helm (g)')
	.addItem('Black kiteshield (g)')
	.addItem('Studded body (g)')
	.addItem('Studded chaps (g)')
	.addItem('Blue skirt (g)')
	.addItem('Blue wizard robe (g)')
	.addItem('Blue wizard hat (g)')
	.addItem('Bronze platebody (g)')
	.addItem('Bronze platelegs (g)')
	.addItem('Bronze plateskirt (g)')
	.addItem('Bronze kiteshield (g)')
	.addItem('Bronze full helm (g)')
	.addItem('Iron platebody (g)')
	.addItem('Iron platelegs (g)')
	.addItem('Iron plateskirt (g)')
	.addItem('Iron kiteshield (g)')
	.addItem('Iron full helm (g)')
	.addItem('Black wizard hat (g)')
	.addItem('Black wizard robe (g)')
	.addItem('Black skirt (g)')
	.addItem('Wooden shield (g)')
	.addItem('Steel full helm (g)')
	.addItem('Steel platebody (g)')
	.addItem('Steel platelegs (g)')
	.addItem('Steel plateskirt (g)')
	.addItem('Steel kiteshield (g)')
	.addItem('Leather body (g)')
	.addItem('Leather chaps (g)')
	.addItem('Black shield (h1)')
	.addItem('Black shield (h2)')
	.addItem('Black shield (h3)')
	.addItem('Black shield (h4)')
	.addItem('Black shield (h5)')
	.addItem('Black helm (h1)')
	.addItem('Black helm (h2)')
	.addItem('Black helm (h3)')
	.addItem('Black helm (h4)')
	.addItem('Black helm (h5)')
	.addItem('Black platebody (h1)')
	.addItem('Black platebody (h2)')
	.addItem('Black platebody (h3)')
	.addItem('Black platebody (h4)')
	.addItem('Black platebody (h5)')
	.addItem('Saradomin robe top')
	.addItem('Saradomin robe legs')
	.addItem('Guthix robe top')
	.addItem('Guthix robe legs')
	.addItem('Zamorak robe top')
	.addItem('Zamorak robe legs')
	.addItem('Ancient robe top')
	.addItem('Ancient robe legs')
	.addItem('Armadyl robe top')
	.addItem('Armadyl robe legs')
	.addItem('Bandos robe top')
	.addItem('Bandos robe legs')
	.add(EasyChefTable)
	.add(EasyMonkTable)
	.add(EasyCapeTable)
	.add(EasyElegantTable, undefined, 6);

export const EasyAmuletTable = new LootTable()
	.addItem('Amulet of magic (t)')
	.addItem('Amulet of magic', undefined, 9);

export const EasyBlessingsTable = new LootTable()
	.add(BlessingTable)
	.addItem('Coins', [3000, 7000], 2);

export const EasyBowTable = new LootTable()
	.addItem('Willow comp bow')
	.addItem('Willow longbow', undefined, 9);

export const EasyStandardTable = new LootTable()
	.addItem('Coins', [50, 200])
	.addItem('Trout', [6, 10])
	.addItem('Salmon', [6, 10])
	.addItem('Air rune', [30, 50])
	.addItem('Fire rune', [30, 50])
	.addItem('Water rune', [30, 50])
	.addItem('Earth rune', [30, 50])
	.addItem('Mind rune', [30, 50])
	.addItem('Body rune', [30, 50])
	.addItem('Law rune', [5, 10])
	.addItem('Chaos rune', [5, 10])
	.addItem('Nature rune', [5, 10])
	.addItem('Purple sweets', [2, 6])
	.addItem('Black Platebody')
	.addItem('Black Longsword')
	.addItem('Black Full Helm')
	.addItem('Black Platelegs')
	.addItem('Black Battleaxe')
	.addItem('Black Axe')
	.addItem('Steel Pickaxe')
	.addItem('Black Dagger')
	.addItem('Staff Of Air')
	.addItem('Studded chaps')
	.addItem('Studded Body')
	.addItem('Willow Shortbow')
	.addItem('Coif')
	.addItem('Black pickaxe')
	.add(EasyAmuletTable)
	.add(EasyBlessingsTable)
	.add(EasyBowTable)
	.add(PrayerPageTable)
	.add(FirelighterTable)
	.add(TeleportScrollTable);

export const EasyClueTable = new LootTable()
	.add(EasyStandardTable, undefined, 11)
	.add(EasyRareTable, undefined, 1);

class EasyCasket extends Clue {
	public open(quantity = 1): ItemBank {
		const loot = new Loot();

		for (let i = 0; i < quantity; i++) {
			const numberOfRolls = rand(2, 4);

			if (roll(50)) loot.add('Clue scroll (master)');

			for (let i = 0; i < numberOfRolls; i++) {
				loot.add(EasyClueTable.roll());
			}
		}

		return loot.values();
	}
}

export default new EasyCasket();
