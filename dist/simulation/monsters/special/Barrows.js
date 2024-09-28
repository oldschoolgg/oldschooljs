"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Barrows = void 0;
const e_1 = require("e");
const Bank_1 = __importDefault(require("../../../structures/Bank"));
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const Monster_1 = __importDefault(require("../../../structures/Monster"));
const BarrowsTable = new LootTable_1.default();
[
    "Ahrim's hood",
    "Ahrim's robetop",
    "Ahrim's robeskirt",
    "Ahrim's staff",
    "Dharok's helm",
    "Dharok's platebody",
    "Dharok's platelegs",
    "Dharok's greataxe",
    "Guthan's helm",
    "Guthan's platebody",
    "Guthan's chainskirt",
    "Guthan's warspear",
    "Karil's coif",
    "Karil's leathertop",
    "Karil's leatherskirt",
    "Karil's crossbow",
    "Torag's helm",
    "Torag's platebody",
    "Torag's platelegs",
    "Torag's hammers",
    "Verac's helm",
    "Verac's brassard",
    "Verac's plateskirt",
    "Verac's flail",
].map(item => BarrowsTable.add(item));
const OtherTable = new LootTable_1.default()
    .add("Coins", [2, 760], 380)
    .add("Mind rune", [381, 504], 125)
    .add("Chaos rune", [168, 210], 125)
    .add("Death rune", [105, 124], 125)
    .add("Bolt rack", [35, 40], 125)
    .add("Blood rune", [55, 66], 125)
    .add(new LootTable_1.default().add("Loop half of key").add("Tooth half of key"), 1, 6)
    .add("Dragon med helm");
const ClueTable = new LootTable_1.default().tertiary(34, "Clue scroll (elite)");
const NUMBER_OF_BROTHERS = 6;
class Barrows extends Monster_1.default {
    kill(quantity = 1) {
        const loot = new Bank_1.default();
        for (let i = 0; i < quantity; i++) {
            ClueTable.roll(1, { targetBank: loot });
            const barrowsItemsThisKill = new Set();
            for (let x = 0; x < NUMBER_OF_BROTHERS + 1; x++) {
                if ((0, e_1.roll)(450 - 58 * NUMBER_OF_BROTHERS)) {
                    let [barrowsItem] = BarrowsTable.roll().items()[0];
                    while (barrowsItemsThisKill.has(barrowsItem.id)) {
                        [[barrowsItem]] = BarrowsTable.roll().items();
                    }
                    barrowsItemsThisKill.add(barrowsItem.id);
                    loot.add(barrowsItem.id);
                }
                else {
                    OtherTable.roll(1, { targetBank: loot });
                }
            }
        }
        return loot;
    }
}
exports.Barrows = Barrows;
exports.default = new Barrows({
    id: 1673,
    name: "Barrows",
    aliases: ["barrows"],
    allItems: [...BarrowsTable.allItems, ...OtherTable.allItems],
});
