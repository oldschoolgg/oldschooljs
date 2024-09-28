"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const ElfTable = new LootTable_1.default({ limit: 128 })
    .add("Coins", [280, 350], 105)
    .add("Death rune", [1, 2], 8)
    .add("Jug of wine", 1, 6)
    .add("Nature rune", [1, 3], 5)
    .add("Fire orb", 1, 2)
    .add("Diamond", 1, 1)
    .add("Gold ore", 1, 1)
    .tertiary(99_175, "Rocky");
exports.default = new SimpleMonster_1.default({
    id: 5299,
    name: "Elf",
    pickpocketTable: ElfTable,
    aliases: ["elf"],
});
