"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheLeviathan = void 0;
const e_1 = require("e");
const Bank_1 = __importDefault(require("../../../structures/Bank"));
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const Monster_1 = __importDefault(require("../../../structures/Monster"));
const itemID_1 = __importDefault(require("../../../util/itemID"));
const VirtusTable_1 = require("../../subtables/VirtusTable");
const TradeableUniqueTable = new LootTable_1.default({ limit: 8 })
    .add(VirtusTable_1.VirtusTable, 1, 1)
    .add("Chromium ingot", 1, 3)
    .add("Venator vestige", 1, 1)
    .add("Leviathan's lure", 1, 1);
const ClueTable = new LootTable_1.default()
    .add("Clue scroll (easy)")
    .add("Clue scroll (medium)")
    .add("Clue scroll (hard)")
    .add("Clue scroll (elite)");
const SupplyTable = new LootTable_1.default()
    .every("Prayer potion(3)", 1)
    .every("Ranging potion(2)", 1)
    .every("Sea turtle", [3, 4]);
const ResourceTable = new LootTable_1.default()
    .add("Coal", [195, 292], 8)
    .add("Gold ore", [67, 101], 8)
    .add("Dragon javelin heads", [54, 81], 8)
    .add("Anglerfish", [4, 6], 8)
    .add("Uncut ruby", [37, 56], 5)
    .add("Uncut diamond", [37, 56], 5)
    .add("Runite ore", [27, 40], 2)
    .add("Dragon bolts (unf)", [150, 225], 2)
    .add("Pure essence", [180, 270], 1)
    .add("Iron ore", [57, 85], 1)
    .add("Silver ore", [57, 85], 1)
    .add("Adamantite ore", [57, 85], 1)
    .add("Sapphire", [25, 38], 1)
    .add("Emerald", [25, 38], 1)
    .add("Ruby", [25, 38], 1)
    .add("Onyx bolt tips", [90, 135], 1)
    .add("Raw manta ray", [180, 270], 1)
    .add("Rune arrow", [54, 81], 8)
    .add("Smoke rune", [300, 450], 8)
    .add("Soul rune", [600, 900], 2)
    .add("Bronze arrow", [63, 94], 1)
    .add("Mithril arrow", [63, 94], 1)
    .add("Adamant arrow", [63, 94], 1)
    .add("Body rune", [180, 270], 1)
    .add("Earth rune", [180, 270], 1);
class TheLeviathanSingleton extends Monster_1.default {
    allItems = (0, e_1.uniqueArr)([
        ...ClueTable.allItems,
        ...SupplyTable.allItems,
        ...ResourceTable.allItems,
        ...TradeableUniqueTable.allItems,
        (0, itemID_1.default)("Awakener's orb"),
        (0, itemID_1.default)("Smoke quartz"),
        (0, itemID_1.default)("Lil'viathan"),
    ]);
    kill(quantity = 1, options = {}) {
        const loot = new Bank_1.default();
        for (let i = 0; i < quantity; i++) {
            const tradeableUniqueCap = options.isAwakened ? 3 : 1;
            if ((0, e_1.randInt)(1, 96) <= tradeableUniqueCap) {
                loot.add(TradeableUniqueTable.roll());
            }
            else if ((0, e_1.roll)(53)) {
                loot.add("Awakener's orb");
            }
            else if ((0, e_1.roll)(200)) {
                loot.add("Smoke quartz");
            }
            else if ((0, e_1.roll)(5)) {
                loot.add(SupplyTable.roll());
            }
            else {
                loot.add(ResourceTable.roll());
            }
            if ((0, e_1.roll)(40)) {
                loot.add(ClueTable.roll());
            }
            if ((0, e_1.roll)(2500)) {
                loot.add("Lil'viathan");
            }
        }
        return loot;
    }
}
exports.TheLeviathan = new TheLeviathanSingleton({
    id: 12_214,
    name: "The Leviathan",
    aliases: ["the leviathan"],
});
