"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const OtherworldlybeingTable = new LootTable_1.default({ limit: 128 })
    .add("Nature rune", 5, 9)
    .add("Chaos rune", 4, 8)
    .add("Law rune", 2, 7)
    .add("Cosmic rune", 2, 5)
    .add("Death rune", 2, 4)
    .add("Blood rune", 2, 1)
    .add(HerbDropTable_1.default, 1, 10)
    .add("Coins", 15, 59)
    .add("Ruby ring", 1, 2)
    .add("Mithril mace", 1, 1)
    .add("Mackerel", 1, 1)
    .add(RareDropTable_1.GemTable, 1, 3);
exports.default = new SimpleMonster_1.default({
    id: 2843,
    name: "Otherworldly being",
    table: OtherworldlybeingTable,
    aliases: ["otherworldly being"],
});
