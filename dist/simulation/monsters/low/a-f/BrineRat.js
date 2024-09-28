"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const BrineRatTable = new LootTable_1.default({ limit: 128 })
    .every("Bones")
    .every("Raw rat meat")
    .oneIn(512, "Brine sabre")
    .add("Death rune", 7, 18)
    .add("Earth rune", 10, 6)
    .add("Earth rune", 36, 4)
    .add("Water rune", 10, 3)
    .add("Air rune", 18, 2)
    .add("Earth rune", 18, 2)
    .add("Water rune", 18, 2)
    .add("Blood rune", 4, 2)
    .add("Raw lobster", 10, 6)
    .add("Raw shark", 3, 6)
    .add("Raw rat meat", 18, 2)
    .add("Raw pike", 18, 2)
    .add("Raw shark", 8, 2)
    .add("Raw swordfish", 9, 2)
    .add("Raw shark", 1, 1)
    .add("Coins", 1, 21)
    .add("Coins", 2, 16)
    .add("Coins", 4, 9)
    .add("Coins", 29, 3)
    .add("Water talisman", 1, 3)
    .tertiary(128, "Clue scroll (medium)");
exports.default = new SimpleMonster_1.default({
    id: 4501,
    name: "Brine Rat",
    table: BrineRatTable,
    aliases: ["brine rat", "brine"],
});
