"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = __importDefault(require("../../../subtables/RareDropTable"));
const TreeHerbSeedTable_1 = __importDefault(require("../../../subtables/TreeHerbSeedTable"));
const AncientZygomiteTable = new LootTable_1.default()
    .every("Mort myre fungus", [1, 2])
    .add("Rune axe", 1, 2)
    .add("Earth rune", 100, 10)
    .add("Law rune", 15, 4)
    .add("Cosmic rune", 15, 4)
    .add("Nature rune", 15, 4)
    .add("Grimy kwuarm", [1, 2], 4)
    .add("Grimy torstol", 1, 4)
    .add("Grimy cadantine", [1, 2], 3)
    .add("Grimy dwarf weed", [1, 2], 2)
    .add("Grimy lantadyme", [1, 2], 2)
    .add("Mushroom spore", 1, 8)
    .add(TreeHerbSeedTable_1.default, 1, 3)
    .add("Numulite", [7, 19], 29)
    .add("Unidentified small fossil", 1, 2)
    .oneIn(100, "Unidentified medium fossil")
    .oneIn(125, "Unidentified large fossil")
    .oneIn(500, "Unidentified rare fossil")
    .add("Pyrophosphite", 1, 13)
    .add("Calcite", 1, 12)
    .add("Supercompost", 2, 8)
    .add("Volcanic ash", 2, 2)
    .add("Mort myre fungus", 5, 2)
    .add(RareDropTable_1.default, 1, 4)
    .tertiary(128, "Clue scroll (medium)");
exports.default = new SimpleMonster_1.default({
    id: 7797,
    name: "Ancient Zygomite",
    table: AncientZygomiteTable,
    aliases: ["ancient zygomite"],
});
