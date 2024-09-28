"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BloodveldPreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const util_1 = require("../../../../util");
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.BloodveldPreTable = new LootTable_1.default()
    .add("Steel axe", 1, 4)
    .add("Steel full helm", 1, 4)
    .add("Steel scimitar", 1, 2)
    .add("Black boots", 1, 1)
    .add("Mithril sq shield", 1, 1)
    .add("Mithril chainbody", 1, 1)
    .add("Rune med helm", 1, 1)
    .add("Fire rune", 60, 8)
    .add("Blood rune", 10, 5)
    .add("Blood rune", 3, 3)
    .add("Blood rune", 30, 1)
    .add(HerbDropTable_1.default, 1, 1)
    .add("Coins", 120, 30)
    .add("Coins", 40, 29)
    .add("Coins", 200, 10)
    .add("Coins", 10, 7)
    .add("Coins", 450, 1)
    .add((0, util_1.itemTupleToTable)([
    ["Big bones", 1],
    ["Bones", 1],
]), 1, 7)
    .add((0, util_1.itemTupleToTable)([
    ["Big bones", 3],
    ["Bones", 1],
]), 1, 3)
    .add("Meat pizza", 1, 3)
    .add("Gold ore", 1, 2)
    .add(RareDropTable_1.GemTable, 1, 4);
const BloodveldTable = new LootTable_1.default()
    .every("Vile ashes")
    .every(exports.BloodveldPreTable)
    .tertiary(256, "Clue scroll (hard)")
    .tertiary(35, "Ensouled bloodveld head");
exports.default = new SimpleMonster_1.default({
    id: 484,
    name: "Bloodveld",
    table: BloodveldTable,
    aliases: ["bloodveld", "veld", "velds", "thicc boi jr"],
});
