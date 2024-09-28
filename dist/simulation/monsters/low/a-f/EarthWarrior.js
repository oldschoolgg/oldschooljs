"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarthWarriorTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const CommonSeedDropTable_1 = __importDefault(require("../../../subtables/CommonSeedDropTable"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.EarthWarriorTable = new LootTable_1.default({ limit: 128 })
    .tertiary(5000, "Earth warrior champion scroll")
    .add("Steel spear", 1, 3)
    .add("Staff of earth", 1, 2)
    .add("Earth rune", 12, 13)
    .add("Nature rune", 3, 9)
    .add("Chaos rune", 3, 7)
    .add("Law rune", 2, 6)
    .add("Death rune", 2, 4)
    .add("Earth rune", 60, 3)
    .add("Blood rune", 2, 1)
    .add(HerbDropTable_1.default, 1, 14)
    .add(CommonSeedDropTable_1.default, 1, 18)
    .add(RareDropTable_1.GemTable, 1, 2)
    .add("Coins", 12, 18);
exports.default = new SimpleMonster_1.default({
    id: 2840,
    name: "Earth Warrior",
    table: exports.EarthWarriorTable,
    aliases: ["earth warrior"],
});
