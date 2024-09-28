"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinotaurTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.MinotaurTable = new LootTable_1.default({ limit: 101 })
    .every("Bones")
    .oneIn(33, "Right skull half")
    .tertiary(50, "Ensouled minotaur head")
    .tertiary(60, "Clue scroll (beginner)")
    .tertiary(101, "Clue scroll (easy)")
    .add("Iron arrow", [5, 14], 10)
    .add("Bronze spear", 1, 10)
    .add("Bronze full helm", 1, 10)
    .add("Bronze dagger", 1, 4)
    .add("Bronze arrow", 3, 3)
    .add("Mind rune", 1, 1)
    .add("Coins", 7, 20)
    .add("Coins", 2, 11)
    .add("Coins", [5, 84], 7)
    .add("Tin ore", 1, 6)
    .add("Copper ore", 1, 6)
    .add("Cooked meat", 1, 3)
    .add("Pure essence", 15, 5)
    .add(RareDropTable_1.GemTable, 1, 1);
exports.default = new SimpleMonster_1.default({
    id: 2481,
    name: "Minotaur",
    table: exports.MinotaurTable,
    aliases: ["minotaur"],
});
