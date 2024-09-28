"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SulphurLizardTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const FixedAllotmentSeedTable_1 = __importDefault(require("../../../subtables/FixedAllotmentSeedTable"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.SulphurLizardTable = new LootTable_1.default()
    .every("Bones")
    .oneIn(512, "Mystic gloves (light)")
    .tertiary(128, "Clue scroll (medium)")
    .add("Fire rune", [10, 25], 26)
    .add("Fire rune", [40, 60], 4)
    .add("Nature rune", [5, 10], 4)
    .add("Iron ore", [5, 10], 22)
    .add("Coal", [5, 10], 13)
    .add("Iron bar", [6, 10], 4)
    .add("Steel bar", [3, 5], 4)
    .add("Tin ore", [10, 15], 4)
    .add("Copper ore", [10, 15], 3)
    .add("Silver ore", [5, 10], 3)
    .add("Silver bar", [3, 5], 2)
    .add("Mithril ore", [3, 5], 1)
    .add(HerbDropTable_1.default, 1, 10)
    .add(FixedAllotmentSeedTable_1.default, 1, 9)
    .add("Rainbow fish", 1, 13)
    .add(RareDropTable_1.GemTable, 1, 4)
    .add(RareDropTable_1.GemTable, 2, 2);
exports.default = new SimpleMonster_1.default({
    id: 8614,
    name: "Sulphur Lizard",
    table: exports.SulphurLizardTable,
    aliases: ["sulphur lizard"],
});
