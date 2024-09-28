"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeralVampyreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const UncommonSeedDropTable_1 = __importDefault(require("../../../subtables/UncommonSeedDropTable"));
exports.FeralVampyreTable = new LootTable_1.default({ limit: 128 })
    .every("Vampyre dust")
    .add("Earth rune", 4, 10)
    .add("Death rune", 2, 10)
    .add("Chaos rune", 3, 8)
    .add("Blood rune", 1, 5)
    .add("Blood rune", 2, 1)
    .add(HerbDropTable_1.default, 1, 10)
    .add(UncommonSeedDropTable_1.default, 1, 19)
    .add("Coins", 15, 40)
    .add("Black axe", 1, 3)
    .add("Earth talisman", 1, 2)
    .add(RareDropTable_1.GemTable, 1, 4)
    .tertiary(128, "Clue scroll (medium)");
exports.default = new SimpleMonster_1.default({
    id: 3234,
    name: "Feral Vampyre",
    table: exports.FeralVampyreTable,
    aliases: ["feral vampyre", "vampyres", "vampyre"],
});
