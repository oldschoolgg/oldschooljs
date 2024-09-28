"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackGuardTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.BlackGuardTable = new LootTable_1.default()
    .every("Bones")
    .tertiary(128, "Clue scroll (medium)")
    .add("Bronze med helm", 1, 11)
    .add("Bronze battleaxe", 1, 4)
    .add("Bronze bolts", 6, 4)
    .add("Bronze warhammer", 1, 4)
    .add("Bronze pickaxe", 1, 4)
    .add("Iron battleaxe", 1, 3)
    .add("Black warhammer", 1, 2)
    .add("Chaos rune", 2, 4)
    .add("Nature rune", 2, 4)
    .add("Coal", 1, 2)
    .add("Copper ore", 1, 3)
    .add("Bronze bar", 1, 4)
    .add("Iron bar", 1, 3)
    .add("Coins", [4, 42], 22)
    .add("Hammer", 1, 8)
    .add("Keg of beer", 1, 2)
    .add("Bucket of water", 1, 4)
    .add("Ring mould", 1, 4)
    .add(RareDropTable_1.GemTable);
exports.default = new SimpleMonster_1.default({
    id: 6046,
    name: "Black Guard",
    table: exports.BlackGuardTable,
    aliases: ["black guard"],
});
