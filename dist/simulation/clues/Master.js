"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterCasket = exports.MasterClueTable = exports.MasterStandardTable = exports.MasterSeedTable = exports.MasterRareTable = exports.MasterMegaRareTable = exports.Master3rdageTable = exports.MasterDragonOrnTable = exports.MasterSubDragonOrnTable = exports.MasterMummyOutfitTable = exports.MasterSubMummyOutfitTable = exports.MasterAnkouOutfitTable = exports.MasterSubAnkouOutfitTable = exports.MasterGodSwordOrnTable = void 0;
const Bank_1 = __importDefault(require("../../structures/Bank"));
const Clue_1 = __importDefault(require("../../structures/Clue"));
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const General_1 = require("./General");
exports.MasterGodSwordOrnTable = new LootTable_1.default()
    .add("Armadyl godsword ornament kit")
    .add("Bandos godsword ornament kit")
    .add("Zamorak godsword ornament kit")
    .add("Saradomin godsword ornament kit");
exports.MasterSubAnkouOutfitTable = new LootTable_1.default()
    .add("Ankou mask")
    .add("Ankou top")
    .add("Ankou's leggings")
    .add("Ankou gloves")
    .add("Ankou socks");
exports.MasterAnkouOutfitTable = new LootTable_1.default().add("Coins", [15_000, 30_000], 2).add(exports.MasterSubAnkouOutfitTable);
exports.MasterSubMummyOutfitTable = new LootTable_1.default()
    .add("Mummy's head")
    .add("Mummy's body")
    .add("Mummy's legs")
    .add("Mummy's hands")
    .add("Mummy's feet");
exports.MasterMummyOutfitTable = new LootTable_1.default().add("Coins", [15_000, 30_000], 2).add(exports.MasterSubMummyOutfitTable);
exports.MasterSubDragonOrnTable = new LootTable_1.default()
    .add("Dragon kiteshield ornament kit")
    .add("Dragon platebody ornament kit", 1, 2);
exports.MasterDragonOrnTable = new LootTable_1.default().add("Coins", [15_000, 30_000], 9).add(exports.MasterSubDragonOrnTable);
exports.Master3rdageTable = new LootTable_1.default()
    .add("3rd age range coif")
    .add("3rd age range top")
    .add("3rd age range legs")
    .add("3rd age vambraces")
    .add("3rd age robe top")
    .add("3rd age robe")
    .add("3rd age mage hat")
    .add("3rd age amulet")
    .add("3rd age platelegs")
    .add("3rd age platebody")
    .add("3rd age full helmet")
    .add("3rd age plateskirt")
    .add("3rd age kiteshield")
    .add("3rd age longsword")
    .add("3rd age cloak")
    .add("3rd age wand")
    .add("3rd age bow")
    .add("3rd age druidic staff")
    .add("3rd age druidic cloak")
    .add("3rd age druidic robe top")
    .add("3rd age druidic robe bottoms")
    .add("3rd age pickaxe")
    .add("3rd age axe");
exports.MasterMegaRareTable = new LootTable_1.default()
    .add("Gilded scimitar")
    .add("Bucket helm (g)")
    .add("Gilded boots")
    .add("Ring of coins")
    .add("Cabbage", 3)
    .add("Anti-venom+(4)", 15)
    .add("Torstol", 50)
    .add("Gilded coif")
    .add("Gilded d'hide vambraces")
    .add("Gilded d'hide body")
    .add("Gilded d'hide chaps")
    .add("Gilded Pickaxe")
    .add("Gilded Axe")
    .add("Gilded spade")
    .add(exports.Master3rdageTable)
    .add(General_1.GildedTable);
exports.MasterRareTable = new LootTable_1.default()
    .add("Left eye patch")
    .add("Bowl wig")
    .add("Ale of the gods")
    .add("Half moon spectacles")
    .add("Fancy tiara")
    .add("Hood of darkness")
    .add("Robe top of darkness")
    .add("Gloves of darkness")
    .add("Robe bottom of darkness")
    .add("Boots of darkness")
    .add("Obsidian cape (r)")
    .add("Occult ornament kit")
    .add("Torture ornament kit")
    .add("Dragon defender ornament kit")
    .add("Samurai kasa")
    .add("Samurai shirt")
    .add("Samurai greaves")
    .add("Samurai boots")
    .add("Samurai gloves")
    .add("Arceuus hood")
    .add("Hosidius hood")
    .add("Lovakengj hood")
    .add("Piscarilius hood")
    .add("Shayzien hood")
    .add("Lesser demon mask")
    .add("Greater demon mask")
    .add("Black demon mask")
    .add("Jungle demon mask")
    .add("Old demon mask")
    .add("Anguish ornament kit")
    .add("Tormented ornament kit")
    .add(exports.MasterMegaRareTable)
    .add(General_1.PrayerPageTable)
    .add(exports.MasterGodSwordOrnTable)
    .add(exports.MasterAnkouOutfitTable)
    .add(exports.MasterMummyOutfitTable)
    .add(exports.MasterDragonOrnTable);
exports.MasterSeedTable = new LootTable_1.default()
    .add("Magic seed", [1, 2])
    .add("Yew seed", [1, 2])
    .add("Palm tree seed", [1, 2]);
exports.MasterStandardTable = new LootTable_1.default()
    .add("Coins", [20_000, 35_000])
    .add("Manta ray", [15, 25])
    .add("Nature rune", [100, 200])
    .add("Death rune", [100, 200])
    .add("Blood rune", [100, 200])
    .add("Soul rune", [100, 200])
    .add("Limpwurt root", [40, 60])
    .add("Purple sweets", [14, 33])
    .add("Runite ore", [5, 8])
    .add("Wine of Zamorak", [35, 50])
    .add("Grimy toadflax", [25, 35])
    .add("Grimy ranarr weed", [5, 10])
    .add("Grimy snapdragon", [5, 10])
    .add("Runite bar", [5, 7])
    .add("Onyx bolts (e)", [15, 25])
    .add("Dragon dagger")
    .add("Dragon longsword")
    .add("Dragon battleaxe")
    .add("Dragon scimitar")
    .add("Dragon halberd")
    .add("Black dragonhide", [5, 25])
    .add("Dragon mace")
    .add(General_1.PrayerPageTable)
    .add(General_1.FirelighterTable)
    .add(General_1.TeleportScrollTable, 1, 2)
    .add(exports.MasterSeedTable)
    .add(General_1.GiveHalfKeyTable)
    .add(General_1.BlessingTable);
exports.MasterClueTable = new LootTable_1.default().add(exports.MasterStandardTable, 1, 22).add(exports.MasterRareTable, 1, 1);
const MainTable = new LootTable_1.default().add(exports.MasterClueTable, [5, 7]).tertiary(1000, "Bloodhound");
class MasterCasket extends Clue_1.default {
    open(quantity, targetBank) {
        const loot = targetBank ?? new Bank_1.default();
        MainTable.roll(quantity, { targetBank: loot });
        return loot;
    }
}
exports.MasterCasket = MasterCasket;
exports.default = new MasterCasket({ table: exports.MasterClueTable });
