"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vardorvis = void 0;
const e_1 = require("e");
const Bank_1 = __importDefault(require("../../../structures/Bank"));
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const Monster_1 = __importDefault(require("../../../structures/Monster"));
const itemID_1 = __importDefault(require("../../../util/itemID"));
const VirtusTable_1 = require("../../subtables/VirtusTable");
const TradeableUniqueTable = new LootTable_1.default({ limit: 8 })
    .add(VirtusTable_1.VirtusTable, 1, 1)
    .add("Chromium ingot", 1, 3)
    .add("Executioner's axe head", 1, 1)
    .add("Ultor vestige", 1, 1);
const ClueTable = new LootTable_1.default()
    .add("Clue scroll (easy)")
    .add("Clue scroll (medium)")
    .add("Clue scroll (hard)")
    .add("Clue scroll (elite)");
const SupplyTable = new LootTable_1.default()
    .every("Tuna potato", [3, 4])
    .every("Prayer potion(3)")
    .every("Super combat potion(2)");
const ResourceTable = new LootTable_1.default()
    .add("Coal", [130, 195], 8)
    .add("Adamantite ore", [45, 67], 8)
    .add("Rune javelin heads", [36, 54], 8)
    .add("Dragon javelin heads", [36, 54], 8)
    .add("Uncut ruby", [25, 37], 5)
    .add("Uncut diamond", [25, 37], 5)
    .add("Runite ore", [18, 27], 2)
    .add("Dragon dart tip", [100, 150], 2)
    .add("Pure essence", [120, 180], 1)
    .add("Iron ore", [38, 57], 1)
    .add("Silver ore", [38, 57], 1)
    .add("Mithril ore", [38, 57], 1)
    .add("Sapphire", [17, 25], 1)
    .add("Emerald", [17, 25], 1)
    .add("Ruby", [17, 25], 1)
    .add("Raw shark", [200, 300], 1)
    .add("Onyx bolts (e)", [60, 90], 1)
    .add("Bronze javelin", [42, 63], 1)
    .add("Mithril javelin", [42, 63], 1)
    .add("Adamant javelin", [42, 63], 1)
    .add("Mind rune", [120, 180], 1)
    .add("Fire rune", [120, 180], 1)
    .add("Lava rune", [200, 300], 8)
    .add("Blood rune", [200, 300], 8)
    .add("Soul rune", [400, 600], 2);
class VardorvisSingleton extends Monster_1.default {
    allItems = (0, e_1.uniqueArr)([
        ...ClueTable.allItems,
        ...SupplyTable.allItems,
        ...ResourceTable.allItems,
        ...TradeableUniqueTable.allItems,
        (0, itemID_1.default)("Awakener's orb"),
        (0, itemID_1.default)("Blood quartz"),
        (0, itemID_1.default)("Butch"),
    ]);
    kill(quantity = 1, options = {}) {
        const loot = new Bank_1.default();
        for (let i = 0; i < quantity; i++) {
            const tradeableUniqueCap = options.isAwakened ? 3 : 1;
            if ((0, e_1.randInt)(1, 136) <= tradeableUniqueCap) {
                loot.add(TradeableUniqueTable.roll());
            }
            else if ((0, e_1.roll)(48)) {
                loot.add("Awakener's orb");
            }
            else if ((0, e_1.roll)(200)) {
                loot.add("Blood quartz");
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
            if ((0, e_1.roll)(3000)) {
                loot.add("Butch");
            }
        }
        return loot;
    }
}
exports.Vardorvis = new VardorvisSingleton({
    id: 12_223,
    name: "Vardorvis",
    aliases: ["vardorvis"],
});
