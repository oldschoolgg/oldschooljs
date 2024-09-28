"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HardCasket = exports.HardClueTable = exports.HardStandardTable = exports.HardBowTable = exports.HardRareTable = exports.HardHeralicPlatebody = exports.HardBlessedShields = exports.HardMegaRareTable = exports.Hard3rdageTable = void 0;
const Bank_1 = __importDefault(require("../../structures/Bank"));
const Clue_1 = __importDefault(require("../../structures/Clue"));
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const util_1 = require("../../util");
const General_1 = require("./General");
exports.Hard3rdageTable = new LootTable_1.default()
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
    .add("3rd age kiteshield");
exports.HardMegaRareTable = new LootTable_1.default()
    .add("Super energy(4)", 15)
    .add("Super restore(4)", 15)
    .add("Antifire potion(4)", 15)
    .add((0, util_1.itemTupleToTable)([
    ["Super attack(4)", 5],
    ["Super strength(4)", 5],
    ["Super defence(4)", 5],
]))
    .add(exports.Hard3rdageTable)
    .add(General_1.GildedTable, 1, 5);
exports.HardBlessedShields = new LootTable_1.default()
    .add("Guthix d'hide shield")
    .add("Saradomin d'hide shield")
    .add("Zamorak d'hide shield")
    .add("Ancient d'hide shield")
    .add("Armadyl d'hide shield")
    .add("Bandos d'hide shield");
exports.HardHeralicPlatebody = new LootTable_1.default()
    .add("Rune platebody (h1)")
    .add("Rune platebody (h2)")
    .add("Rune platebody (h3)")
    .add("Rune platebody (h4)")
    .add("Rune platebody (h5)");
exports.HardRareTable = new LootTable_1.default()
    .add("Robin Hood hat")
    .add("Tan Cavalier")
    .add("Dark Cavalier")
    .add("Black Cavalier")
    .add("White Cavalier")
    .add("Red Cavalier")
    .add("Navy Cavalier")
    .add("Pirate's hat")
    .add("Enchanted hat")
    .add("Enchanted top")
    .add("Enchanted robe")
    .add("Amulet of glory (t4)")
    .add("Pith helmet")
    .add("Explorer backpack")
    .add(19_912)
    .add("Nunchaku")
    .add("Cyclops head")
    .add("Dragon boots ornament kit")
    .add("Dual sai")
    .add("Thieving bag")
    .add("Rune defender ornament kit")
    .add("Tzhaar-ket-om ornament kit")
    .add("Berserker necklace ornament kit")
    .add("Rune cane")
    .add("Green dragon mask")
    .add("Blue dragon mask")
    .add("Red dragon mask")
    .add("Black dragon mask")
    .add("Rune platebody (t)")
    .add("Rune platelegs (t)")
    .add("Rune plateskirt (t)")
    .add("Rune kiteshield (t)")
    .add("Rune full helm (t)")
    .add("Rune platebody (g)")
    .add("Rune platelegs (g)")
    .add("Rune plateskirt (g)")
    .add("Rune kiteshield (g)")
    .add("Rune full helm (g)")
    .add("Rune helm (h1)")
    .add("Rune helm (h2)")
    .add("Rune helm (h3)")
    .add("Rune helm (h4)")
    .add("Rune helm (h5)")
    .add("Rune shield (h1)")
    .add("Rune shield (h2)")
    .add("Rune shield (h3)")
    .add("Rune shield (h4)")
    .add("Rune shield (h5)")
    .add("Zamorak platebody")
    .add("Zamorak platelegs")
    .add("Zamorak plateskirt")
    .add("Zamorak kiteshield")
    .add("Zamorak full helm")
    .add("Zamorak bracers")
    .add("Zamorak d'hide body")
    .add("Zamorak chaps")
    .add("Zamorak coif")
    .add("Zamorak crozier")
    .add("Zamorak stole")
    .add("Zamorak d'hide boots")
    .add("Saradomin platebody")
    .add("Saradomin platelegs")
    .add("Saradomin plateskirt")
    .add("Saradomin kiteshield")
    .add("Saradomin full helm")
    .add("Saradomin bracers")
    .add("Saradomin d'hide body")
    .add("Saradomin chaps")
    .add("Saradomin coif")
    .add("Saradomin crozier")
    .add("Saradomin stole")
    .add("Saradomin d'hide boots")
    .add("Guthix platebody")
    .add("Guthix platelegs")
    .add("Guthix plateskirt")
    .add("Guthix kiteshield")
    .add("Guthix full helm")
    .add("Guthix bracers")
    .add("Guthix d'hide body")
    .add("Guthix chaps")
    .add("Guthix coif")
    .add("Guthix crozier")
    .add("Guthix stole")
    .add("Guthix d'hide boots")
    .add("Bandos platebody")
    .add("Bandos platelegs")
    .add("Bandos plateskirt")
    .add("Bandos kiteshield")
    .add("Bandos full helm")
    .add("Bandos bracers")
    .add("Bandos d'hide body")
    .add("Bandos chaps")
    .add("Bandos coif")
    .add("Bandos d'hide boots")
    .add("Armadyl platebody")
    .add("Armadyl platelegs")
    .add("Armadyl plateskirt")
    .add("Armadyl kiteshield")
    .add("Armadyl full helm")
    .add("Armadyl bracers")
    .add("Armadyl d'hide body")
    .add("Armadyl chaps")
    .add("Armadyl coif")
    .add("Armadyl d'hide boots")
    .add("Ancient platebody")
    .add("Ancient platelegs")
    .add("Ancient plateskirt")
    .add("Ancient kiteshield")
    .add("Ancient full helm")
    .add("Ancient bracers")
    .add("Ancient d'hide body")
    .add("Ancient chaps")
    .add("Ancient coif")
    .add("Ancient d'hide boots")
    .add("Blue d'hide body (t)")
    .add("Blue d'hide chaps (t)")
    .add("Blue d'hide body (g)")
    .add("Blue d'hide chaps (g)")
    .add("Red d'hide body (t)")
    .add("Red d'hide chaps (t)")
    .add("Red d'hide body (g)")
    .add("Red d'hide chaps (g)")
    .add(exports.HardMegaRareTable)
    .add(exports.HardBlessedShields)
    .add(exports.HardHeralicPlatebody);
exports.HardBowTable = new LootTable_1.default().add("Magic comp bow").add("Magic longbow", 1, 9);
exports.HardStandardTable = new LootTable_1.default()
    .add("Coins", [1000, 5000])
    .add("Lobster", [12, 15])
    .add("Shark", [12, 15])
    .add("Law rune", [30, 50])
    .add("Blood rune", [20, 30])
    .add("Nature rune", [30, 50])
    .add("Purple sweets", [7, 15])
    .add("Rune longsword")
    .add("Rune full helm")
    .add("Rune platelegs")
    .add("Rune battleaxe")
    .add("Rune axe")
    .add("Rune pickaxe")
    .add("Rune dagger")
    .add("Rune platebody")
    .add("Rune platelegs")
    .add("Rune plateskirt")
    .add("Rune kiteshield")
    .add("Black d'hide chaps")
    .add("Black d'hide body")
    .add("Magic shortbow")
    .add(General_1.PrayerPageTable)
    .add(General_1.FirelighterTable)
    .add(General_1.TeleportScrollTable)
    .add(General_1.BlessingTable)
    .add(exports.HardBowTable);
exports.HardClueTable = new LootTable_1.default().add(exports.HardStandardTable, 1, 12).add(exports.HardRareTable, 1, 1);
const MainTable = new LootTable_1.default().add(exports.HardClueTable, [4, 6]).tertiary(15, "Clue scroll (master)");
class HardCasket extends Clue_1.default {
    open(quantity, targetBank) {
        const loot = targetBank ?? new Bank_1.default();
        MainTable.roll(quantity, { targetBank: loot });
        return loot;
    }
}
exports.HardCasket = HardCasket;
const hardCasket = new HardCasket({ table: exports.HardClueTable });
hardCasket.allItems.push((0, util_1.itemID)("Clue scroll (master)"));
exports.default = hardCasket;
