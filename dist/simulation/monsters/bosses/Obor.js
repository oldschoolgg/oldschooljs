"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const util_1 = require("../../../util");
const OborTable = new LootTable_1.default({ limit: 118 })
    .every("Big Bones")
    .every("Clue scroll (beginner)")
    .every("Ensouled giant head")
    .tertiary(16, "Giant key")
    .tertiary(400, "Long bone")
    .tertiary(5000, "Giant champion scroll")
    .tertiary(5013, "Curved bone")
    .add("Rune med helm", 1, 6)
    .add("Rune full helm", 1, 5)
    .add("Rune longsword", 1, 5)
    .add("Rune battleaxe", 1, 4)
    .add("Rune kiteshield", 1, 3)
    .add("Rune chainbody", 1, 3)
    .add("Rune platelegs", 1, 3)
    .add("Rune plateskirt", 1, 3)
    .add("Rune 2h sword", 1, 3)
    .add("Hill giant club", 1, 1)
    .add("Law rune", [50, 99], 12)
    .add("Cosmic rune", [60, 119], 12)
    .add("Chaos rune", [100, 199], 10)
    .add("Death rune", [40, 79], 10)
    .add("Nature rune", [40, 79], 7)
    .add("Coins", [10_000, 20_000], 10)
    .add("Limpwurt root", 20, 8)
    .add("Big bones", 50, 8)
    .add((0, util_1.itemTupleToTable)([
    ["Uncut diamond", 5],
    ["Uncut ruby", 5],
]), 1, 5);
exports.default = new SimpleMonster_1.default({
    id: 7416,
    name: "Obor",
    table: OborTable,
    aliases: ["obor"],
});
