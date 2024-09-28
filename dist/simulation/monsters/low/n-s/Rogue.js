"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RogueTable = new LootTable_1.default()
    .add("Iron dagger(p)", 1, 1 / 128)
    .add("Coins", [25, 40], 1 / 1.185)
    .add("Air rune", 8, 1 / 16)
    .add("Jug of wine", 1, 1 / 21.33)
    .add("Lockpick", 1, 1 / 25.6)
    .tertiary(257_211, "Rocky");
exports.default = new SimpleMonster_1.default({
    id: 526,
    name: "Rogue",
    pickpocketTable: RogueTable,
    aliases: ["rogue"],
});
