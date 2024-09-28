"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const RedDragonTable = new LootTable_1.default()
    .every("Dragon bones")
    .every("Red dragonhide")
    .add("Mithril 2h sword", 1, 4)
    .add("Mithril axe", 1, 3)
    .add("Mithril battleaxe", 1, 3)
    .add("Rune dart", 8, 3)
    .add("Mithril javelin", 20, 1)
    .add("Mithril kiteshield", 1, 1)
    .add("Adamant platebody", 1, 1)
    .add("Rune longsword", 1, 1)
    .add("Rune arrow", 4, 8)
    .add("Law rune", 4, 5)
    .add("Blood rune", 2, 4)
    .add("Death rune", 5, 3)
    .add(HerbDropTable_1.default, 1, 2)
    .add("Coins", 196, 40)
    .add("Coins", 66, 29)
    .add("Coins", 330, 10)
    .add("Coins", 690, 1)
    .add("Dragon javelin heads", 10, 10)
    .add("Chocolate cake", 3, 3)
    .add("Adamantite bar", 1, 1)
    .add(RareDropTable_1.GemTable, 1, 5)
    .tertiary(40, "Ensouled dragon head")
    .tertiary(128, "Clue scroll (hard)");
exports.default = new SimpleMonster_1.default({
    id: 247,
    name: "Red Dragon",
    table: RedDragonTable,
    aliases: ["red dragon", "red drags"],
});
