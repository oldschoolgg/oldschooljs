"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HobgoblinTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const CommonSeedDropTable_1 = __importDefault(require("../../../subtables/CommonSeedDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const HerbTable = new LootTable_1.default()
    .add("Grimy guam leaf", 1, 10)
    .add("Grimy marrentill", 1, 10)
    .add("Grimy tarromin", 1, 5)
    .add("Grimy ranarr weed", 1, 2)
    .add("Grimy irit leaf", 1, 140)
    .add("Grimy avantoe", 1, 2)
    .add("Grimy kwuarm", 1, 1)
    .add("Grimy cadantine", 1, 1)
    .add("Grimy lantadyme", 1, 3)
    .add("Grimy dwarf weed", 1, 3);
exports.HobgoblinTable = new LootTable_1.default()
    .tertiary(5000, "Hobgoblin champion scroll")
    .tertiary(70, "Clue scroll (beginner)")
    .every("Bones")
    .add("Iron sword", 1, 3)
    .add("Steel dagger", 1, 3)
    .add("Steel longsword", 1, 1)
    .add("Law rune", 2, 3)
    .add("Water rune", 2, 2)
    .add("Fire rune", 7, 2)
    .add("Body rune", 6, 2)
    .add("Chaos rune", 3, 2)
    .add("Nature rune", 4, 2)
    .add("Cosmic rune", 2, 1)
    .add("Iron javelin", 5, 1)
    .add(HerbTable, 1, 7)
    .add(CommonSeedDropTable_1.default, 1, 12)
    .add("Coins", 15, 34)
    .add("Coins", 5, 12)
    .add("Coins", 28, 4)
    .add("Coins", 62, 4)
    .add("Coins", 42, 3)
    .add("Coins", 1, 3)
    .add("Coins", 1, 1)
    .add("Limpwurt root", 1, 21)
    .add("Goblin mail", 1, 2)
    .add(RareDropTable_1.GemTable, 1, 2);
exports.default = new SimpleMonster_1.default({
    id: 3049,
    name: "Hobgoblin",
    table: exports.HobgoblinTable,
    aliases: ["hobgoblin"],
});
