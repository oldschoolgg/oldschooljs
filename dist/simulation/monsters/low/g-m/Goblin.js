"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const GoblinTable = new LootTable_1.default({ limit: 128 })
    .every("Bones")
    .tertiary(35, "Ensouled goblin head")
    .tertiary(64, "Clue scroll (beginner)")
    .tertiary(128, "Clue scroll (easy)")
    .tertiary(5000, "Goblin champion scroll")
    .add("Bronze spear", 1, 4)
    .add("Bronze sq shield", 1, 3)
    .add("Water rune", 6, 6)
    .add("Body rune", 7, 5)
    .add("Earth rune", 4, 3)
    .add("Bronze bolts", 8, 3)
    .add("Coins", 5, 28)
    .add("Coins", 9, 3)
    .add("Coins", 15, 3)
    .add("Coins", 20, 2)
    .add("Coins", 1, 1)
    .add("Hammer", 1, 15)
    .add("Goblin mail", 1, 5)
    .add("Chef's hat", 1, 3)
    .add("Goblin book", 1, 2)
    .add("Beer", 1, 2)
    .add("Brass necklace", 1, 1)
    .add("Air talisman", 1, 1);
exports.default = new SimpleMonster_1.default({
    id: 655,
    name: "Goblin",
    table: GoblinTable,
    aliases: ["goblin"],
});
