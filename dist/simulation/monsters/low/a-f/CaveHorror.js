"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaveHorrorPreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const RareSeedTable_1 = __importDefault(require("../../../subtables/RareSeedTable"));
const VariableAllotmentSeedTable_1 = __importDefault(require("../../../subtables/VariableAllotmentSeedTable"));
exports.CaveHorrorPreTable = new LootTable_1.default()
    .add("Mithril axe", 1, 3)
    .add("Rune dagger", 1, 1)
    .add("Adamant full helm", 1, 1)
    .add("Mithril kiteshield", 1, 1)
    .oneIn(512, "Black mask (10)")
    .add("Nature rune", 6, 6)
    .add("Nature rune", 4, 5)
    .add("Nature rune", 3, 1)
    .add(HerbDropTable_1.default, 1, 13)
    .add(RareSeedTable_1.default, 1, 18)
    .add(VariableAllotmentSeedTable_1.default, 1, 15)
    .add("Coins", 44, 28)
    .add("Coins", 132, 12)
    .add("Coins", 440, 1)
    .add("Limpwurt root", 1, 7)
    .add("Teak logs", 4, 7)
    .add("Mahogany logs", 2, 3)
    .add(RareDropTable_1.GemTable, 1, 5);
const CaveHorrorTable = new LootTable_1.default()
    .every("Big bones")
    .every(exports.CaveHorrorPreTable)
    .tertiary(30, "Ensouled horror head")
    .tertiary(128, "Clue scroll (hard)")
    .tertiary(400, "Long bone")
    .tertiary(5013, "Curved bone");
exports.default = new SimpleMonster_1.default({
    id: 1047,
    name: "Cave Horror",
    table: CaveHorrorTable,
    aliases: ["cave horror", "cave h"],
});
