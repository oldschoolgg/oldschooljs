"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IceWarriorTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const UncommonSeedDropTable_1 = __importDefault(require("../../../subtables/UncommonSeedDropTable"));
exports.IceWarriorTable = new LootTable_1.default({ limit: 128 })
    .add("Iron battleaxe", 1, 3)
    .add("Mithril mace", 1, 1)
    .add("Nature rune", 4, 10)
    .add("Chaos rune", 3, 8)
    .add("Law rune", 2, 7)
    .add("Cosmic rune", 2, 5)
    .add("Mithril arrow", 3, 5)
    .add("Adamant arrow", 2, 2)
    .add("Death rune", 2, 3)
    .add("Blood rune", 2, 1)
    .add(HerbDropTable_1.default, 1, 10)
    .add(UncommonSeedDropTable_1.default, 1, 18)
    .add("Coins", 15, 39)
    .add(RareDropTable_1.GemTable, 1, 3)
    .tertiary(128, "Clue scroll (medium)");
exports.default = new SimpleMonster_1.default({
    id: 2841,
    name: "Ice warrior",
    table: exports.IceWarriorTable,
    aliases: ["ice warrior"],
});
