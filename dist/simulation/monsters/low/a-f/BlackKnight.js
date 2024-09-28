"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackKnightTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.BlackKnightTable = new LootTable_1.default({ limit: 128 })
    .every("Bones")
    .add("Iron sword", 1, 4)
    .add("Iron full helm", 1, 2)
    .add("Steel mace", 1, 1)
    .add("Mithril arrow", 3, 4)
    .add("Body rune", 9, 3)
    .add("Chaos rune", 6, 3)
    .add("Earth rune", 10, 3)
    .add("Death rune", 2, 2)
    .add("Law rune", 3, 2)
    .add("Cosmic rune", 7, 1)
    .add("Mind rune", 2, 1)
    .add(HerbDropTable_1.default, 1, 3)
    .add("Steel bar", 1, 6)
    .add("Tin ore", 1, 1)
    .add("Steel bar", 1, 1)
    .add("Coins", 35, 21)
    .add("Coins", 6, 11)
    .add("Coins", 58, 10)
    .add("Coins", 12, 9)
    .add("Coins", 80, 2)
    .add("Coins", 1, 1)
    .add("Coins", 13, 1)
    .add("Bread", 1, 1)
    .add(RareDropTable_1.GemTable, 1, 3);
exports.default = new SimpleMonster_1.default({
    id: 516,
    name: "Black Knight",
    table: exports.BlackKnightTable,
    aliases: ["black knight"],
});
