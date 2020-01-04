import LootTable from '../LootTable';

export const PrayerPageTable = new LootTable()
	.addItem('Saradomin page 1')
	.addItem('Saradomin page 2')
	.addItem('Saradomin page 3')
	.addItem('Saradomin page 4')
	.addItem('Zamorak page 1')
	.addItem('Zamorak page 2')
	.addItem('Zamorak page 3')
	.addItem('Zamorak page 4')
	.addItem('Guthix page 1')
	.addItem('Guthix page 2')
	.addItem('Guthix page 3')
	.addItem('Guthix page 4')
	.addItem('Bandos page 1')
	.addItem('Bandos page 2')
	.addItem('Bandos page 3')
	.addItem('Bandos page 4')
	.addItem('Armadyl page 1')
	.addItem('Armadyl page 2')
	.addItem('Armadyl page 3')
	.addItem('Armadyl page 4')
	.addItem('Ancient page 1')
	.addItem('Ancient page 2')
	.addItem('Ancient page 3')
	.addItem('Ancient page 4');

export const GildedTable = new LootTable()
	.addItem('Gilded platebody')
	.addItem('Gilded platelegs')
	.addItem('Gilded plateskirt')
	.addItem('Gilded full helm')
	.addItem('Gilded kiteshield')
	.addItem('Gilded med helm')
	.addItem('Gilded chainbody')
	.addItem('Gilded sq shield')
	.addItem('Gilded 2h sword')
	.addItem('Gilded spear')
	.addItem('Gilded hasta');

export const FirelighterTable = new LootTable()
	.addItem('Red firelighter', [4, 10])
	.addItem('Green firelighter', [4, 10])
	.addItem('Blue firelighter', [4, 10])
	.addItem('Purple firelighter', [4, 10])
	.addItem('White firelighter', [4, 10]);

export const SubTeleportScrollTable = new LootTable()
	.addItem('Nardah teleport', [5, 15])
	.addItem("Mos le'harmless teleport", [5, 15])
	.addItem("Mort'ton teleport", [5, 15])
	.addItem('Feldip hills teleport', [5, 15])
	.addItem('Lunar isle teleport', [5, 15])
	.addItem('Digsite teleport', [5, 15])
	.addItem('Piscatoris teleport', [5, 15])
	.addItem('Pest control teleport', [5, 15])
	.addItem('Tai bwo wannai teleport', [5, 15])
	.addItem('Lumberyard teleport', [5, 15])
	.addItem('Charge dragonstone jewellery scroll', [5, 15])
	.addItem('Iorwerth camp teleport', [5, 15]);

export const TeleportScrollTable = new LootTable()
	.addItem('Master scroll book')
	.add(SubTeleportScrollTable, undefined, 21);

export const GiveHalfKeyTable = new LootTable()
	.addItem('Loop half of key')
	.addItem('Tooth half of key');

export const BlessingTable = new LootTable()
	.addItem('Holy blessing')
	.addItem('Unholy blessing')
	.addItem('Peaceful blessing')
	.addItem('Honourable blessing')
	.addItem('War blessing')
	.addItem('Ancient blessing')
	.addItem('Coins', [10000, 15000], 7)
	.addItem('Purple sweets', [8, 12], 7);
