"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DukeSucellus = void 0;
const e_1 = require("e");
const Bank_1 = __importDefault(require("../../../structures/Bank"));
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const Monster_1 = __importDefault(require("../../../structures/Monster"));
const itemID_1 = __importDefault(require("../../../util/itemID"));
const VirtusTable_1 = require("../../subtables/VirtusTable");
const TradeableUniqueTable = new LootTable_1.default({ limit: 8 })
    .add(VirtusTable_1.VirtusTable, 1, 1)
    .add("Chromium ingot", 1, 3)
    .add("Eye of the duke", 1, 1)
    .add("Magus vestige", 1, 1);
const ClueTable = new LootTable_1.default()
    .add("Clue scroll (easy)")
    .add("Clue scroll (medium)")
    .add("Clue scroll (hard)")
    .add("Clue scroll (elite)");
const SupplyTable = new LootTable_1.default()
    .every("Pineapple pizza", [3, 4])
    .every("Prayer potion(3)")
    .every("Super combat potion(2)");
const ResourceTable = new LootTable_1.default()
    .add("Bronze chainbody", [11, 17], 1)
    .add("Mithril chainbody", [5, 7], 1)
    .add("Adamant chainbody", [6, 10], 1)
    .add("Dragon platelegs", [5, 7], 1)
    .add("Pure essence", [200, 300], 1)
    .add("Iron ore", [63, 95], 1)
    .add("Coal", [216, 325], 8)
    .add("Mithril ore", [33, 50], 1)
    .add("Adamantite ore", [75, 112], 8)
    .add("Runite ore", [30, 45], 2)
    .add("Sapphire", [28, 42], 1)
    .add("Emerald", [28, 42], 1)
    .add("Ruby", [28, 42], 1)
    .add("Uncut ruby", [41, 62], 5)
    .add("Uncut diamond", [41, 62], 5)
    .add("Bronze bar", [41, 62], 1)
    .add("Dragon arrowtips", [166, 255], 1)
    .add("Rune javelin heads", [60, 90], 8)
    .add("Dragon javelin heads", [60, 90], 8)
    .add("Raw sea turtle", [200, 300], 1)
    .add("Air rune", [200, 300], 1)
    .add("Mist rune", [100, 150], 8)
    .add("Chaos rune", [100, 150], 9)
    .add("Soul rune", [666, 1000], 2);
class DukeSucellusSingleton extends Monster_1.default {
    allItems = (0, e_1.uniqueArr)([
        ...ClueTable.allItems,
        ...SupplyTable.allItems,
        ...ResourceTable.allItems,
        ...TradeableUniqueTable.allItems,
        (0, itemID_1.default)("Awakener's orb"),
        (0, itemID_1.default)("Ice quartz"),
        (0, itemID_1.default)("Baron"),
    ]);
    kill(quantity = 1, options = {}) {
        const loot = new Bank_1.default();
        for (let i = 0; i < quantity; i++) {
            const tradeableUniqueCap = options.isAwakened ? 3 : 1;
            if ((0, e_1.randInt)(1, 90) <= tradeableUniqueCap) {
                loot.add(TradeableUniqueTable.roll());
            }
            else if ((0, e_1.roll)(48)) {
                loot.add("Awakener's orb");
            }
            else if ((0, e_1.roll)(200)) {
                loot.add("Ice quartz");
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
                loot.add("Baron");
            }
        }
        return loot;
    }
}
exports.DukeSucellus = new DukeSucellusSingleton({
    id: 12_191,
    name: "Duke Sucellus",
    aliases: ["duke sucellus"],
});
