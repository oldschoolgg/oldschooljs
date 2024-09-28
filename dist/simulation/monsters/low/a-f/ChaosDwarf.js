"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChaosDwarfTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.ChaosDwarfTable = new LootTable_1.default({ limit: 128 })
    .every("Bones")
    .add("Steel full helm", 1, 2)
    .add("Mithril longsword", 1, 1)
    .add("Mithril sq shield", 1, 1)
    .add("Law rune", 3, 4)
    .add("Air rune", 24, 3)
    .add("Chaos rune", 10, 3)
    .add("Mind rune", 37, 3)
    .add("Nature rune", 9, 3)
    .add("Cosmic rune", 3, 2)
    .add("Death rune", 3, 1)
    .add("Water rune", 10, 1)
    .add("Coins", 92, 40)
    .add("Coins", 47, 18)
    .add("Coins", 25, 11)
    .add("Coins", 150, 10)
    .add("Coins", 350, 2)
    .add("Coins", 15, 2)
    .add("Muddy key", 1, 7)
    .add("Mithril bar", 1, 6)
    .add("Coal", 1, 1)
    .add("Cheese", 1, 1)
    .add("Tomato", 1, 1)
    .add(RareDropTable_1.GemTable, 1, 5);
exports.default = new SimpleMonster_1.default({
    id: 291,
    name: "Chaos dwarf",
    table: exports.ChaosDwarfTable,
    aliases: ["chaos dwarf"],
});
