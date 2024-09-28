"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChaosDruidTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.ChaosDruidTable = new LootTable_1.default({ limit: 128 })
    .every("Bones")
    .add("Law rune", 2, 7)
    .add("Mithril bolts", [2, 12], 4)
    .add("Air rune", 36, 3)
    .add("Body rune", 9, 2)
    .add("Earth rune", 9, 2)
    .add("Mind rune", 12, 2)
    .add("Nature rune", 3, 1)
    .add(HerbDropTable_1.default, 1, 35)
    .add(HerbDropTable_1.default, 2, 11)
    .add("Coins", 3, 5)
    .add("Coins", 8, 5)
    .add("Coins", 29, 3)
    .add("Coins", 35, 1)
    .add("Vial of water", 1, 10)
    .add("Bronze longsword", 1, 1)
    .add("Snape grass", 1, 1)
    .add("Unholy mould", 1, 1)
    .add(RareDropTable_1.GemTable, 1, 1)
    .tertiary(35, "Ensouled chaos druid head");
exports.default = new SimpleMonster_1.default({
    id: 520,
    name: "Chaos druid",
    table: exports.ChaosDruidTable,
    aliases: ["chaos druid"],
});
