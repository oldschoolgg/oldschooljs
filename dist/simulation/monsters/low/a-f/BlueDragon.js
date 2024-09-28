"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const BlueDragonTable = new LootTable_1.default()
    .every("Dragon bones")
    .every("Blue dragonhide")
    .add("Steel platelegs", 1, 4)
    .add("Mithril axe", 1, 3)
    .add("Steel battleaxe", 1, 3)
    .add("Mithril spear", 1, 2)
    .add("Adamant full helm", 1, 1)
    .add("Mithril kiteshield", 1, 1)
    .add("Rune dagger", 1, 1)
    .add("Water rune", 75, 8)
    .add("Nature rune", 15, 5)
    .add("Law rune", 3, 3)
    .add("Fire rune", 37, 1)
    .add(HerbDropTable_1.default, 1, 15)
    .add("Coins", 44, 29)
    .add("Coins", 132, 25)
    .add("Coins", 200, 10)
    .add("Coins", 11, 5)
    .add("Coins", 440, 1)
    .add("Adamantite ore", 1, 3)
    .add("Bass", 1, 3)
    .add(RareDropTable_1.GemTable, 1, 5)
    .tertiary(50, "Ensouled dragon head")
    .tertiary(50, "Scaly blue dragonhide")
    .tertiary(128, "Clue scroll (hard)");
exports.default = new SimpleMonster_1.default({
    id: 265,
    name: "Blue Dragon",
    table: BlueDragonTable,
    aliases: ["blue dragon", "blue drags"],
});
