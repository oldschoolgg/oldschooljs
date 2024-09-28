"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkeletonMageTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.SkeletonMageTable = new LootTable_1.default()
    .every("ashes")
    .add("Pink skirt", 1, 2)
    .add("Mind rune", [7, 9], 12)
    .add("Law rune", [2, 3], 12)
    .add("Nature rune", [1, 3], 11)
    .add("Chaos rune", [3, 4], 10)
    .add(HerbDropTable_1.default, 1, 12)
    .add("Uncut opal", 1, 10)
    .add("Pot of flour", 1, 10)
    .add("Iron bar", [1, 2], 5)
    .add("Coins", [25, 54], 33)
    .add("Big bones", [2, 4], 6)
    .add(RareDropTable_1.GemTable, 1, 5)
    .tertiary(128, "Clue scroll (medium)")
    .tertiary(5000, "Skeleton champion scroll");
exports.default = new SimpleMonster_1.default({
    id: 4319,
    name: "Skeleton Mage",
    table: exports.SkeletonMageTable,
    aliases: ["skeleton mage"],
});
