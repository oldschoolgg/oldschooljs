"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const util_1 = require("../../../../util");
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const VariableAllotmentSeedTable_1 = __importDefault(require("../../../subtables/VariableAllotmentSeedTable"));
const JungleHorrorTable = new LootTable_1.default({ limit: 129 })
    .every("Bones")
    .add("Iron warhammer", 1, 17)
    .add("Iron kiteshield", 1, 5)
    .add("Iron spear", 1, 4)
    .add("Iron javelin", 5, 2)
    .add("Nature rune", 4, 10)
    .add("Nature rune", 2, 7)
    .add("Death rune", 1, 5)
    .add(HerbDropTable_1.default, 1, 6)
    .add(VariableAllotmentSeedTable_1.default, 1, 15)
    .add("Iron ore", 1, 27)
    .add("Teak logs", 3, 9)
    .add("Mahogany logs", 1, 3)
    .add("Pineapple", 1, 8)
    .add((0, util_1.itemTupleToTable)([
    ["Big bones", 1],
    ["Bones", 1],
]), 1, 3)
    .add((0, util_1.itemTupleToTable)([
    ["Big bones", 3],
    ["Bones", 1],
]), 1, 2)
    .add(RareDropTable_1.GemTable, 1, 1)
    .tertiary(40, "Ensouled horror head")
    .tertiary(128, "Clue scroll (medium)");
exports.default = new SimpleMonster_1.default({
    id: 1042,
    name: "Jungle horror",
    table: JungleHorrorTable,
    aliases: ["jungle horror", "jungle h"],
});
