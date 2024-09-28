"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const BanditTable = new LootTable_1.default({ limit: 128 })
    .every("Bones")
    .tertiary(128, "Clue scroll (hard)")
    .add("Adamant scimitar", 1, 4)
    .add("Mithril sq shield", 1, 2)
    .add("Mithril axe", 1, 1)
    .add("Chaos rune", 10, 3)
    .add("Water rune", 11, 3)
    .add("Air rune", 25, 2)
    .add("Death rune", 4, 2)
    .add("Law rune", 6, 2)
    .add("Mind rune", 12, 1)
    .add("Blood rune", 6, 1)
    .add("Nature rune", 3, 1)
    .add(new LootTable_1.default()
    .add("Grimy guam leaf", 1, 8)
    .add("Grimy marrentill", 1, 6)
    .add("Grimy tarromin", 1, 5)
    .add("Grimy harralander", 1, 3)
    .add("Grimy ranarr weed", 1, 3)
    .add("Grimy irit leaf", 1, 2)
    .add("Grimy avantoe", 1, 2)
    .add("Grimy kwuarm", 1, 1)
    .add("Grimy cadantine")
    .add("Grimy lantadyme")
    .add("Grimy dwarf weed"), 1, 41)
    .add("Coins", 35, 26)
    .add("Coins", 120, 13)
    .add("Coins", 53, 10)
    .add("Coins", 250, 2)
    .add("Coins", 10, 1)
    .add("Coal", 5, 6)
    .add("Dark fishing bait", [10, 24], 2)
    .add(RareDropTable_1.GemTable, 1, 3);
exports.default = new SimpleMonster_1.default({
    id: 6605,
    name: "Bandit",
    table: BanditTable,
    aliases: ["bandit"],
});
