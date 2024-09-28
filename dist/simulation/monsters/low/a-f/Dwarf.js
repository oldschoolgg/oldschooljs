"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DwarfTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.DwarfTable = new LootTable_1.default({ limit: 128 })
    .every("Bones")
    .tertiary(100, "Clue scroll (beginner)")
    .add("Bronze pickaxe", 1, 13)
    .add("Bronze med helm", 1, 4)
    .add("Bronze battleaxe", 1, 2)
    .add("Iron battleaxe")
    .add("Bronze bolts", [2, 12], 7)
    .add("Chaos rune", 2, 4)
    .add("Nature rune", 2, 4)
    .add("Coins", 4, 20)
    .add("Coins", 10, 15)
    .add("Coins", 30, 2)
    .add("Hammer", 1, 10)
    .add("Bronze bar", 1, 7)
    .add("Iron ore", 1, 4)
    .add("Tin ore", 1, 3)
    .add("Copper ore", 1, 3)
    .add("Iron bar", 1, 3)
    .add("Coal", 1, 2)
    .add(RareDropTable_1.GemTable);
exports.default = new SimpleMonster_1.default({
    id: 290,
    name: "Dwarf",
    table: exports.DwarfTable,
    aliases: ["dwarf"],
});
