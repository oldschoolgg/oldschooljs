"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const GnomeTable = new LootTable_1.default({ limit: 128 })
    .add("King worm", 1, 55)
    .add("Coins", [1, 300], 30)
    .add("Swamp toad", 1, 28)
    .add("Gold ore", 1, 8)
    .add("Earth rune", 1, 5)
    .add("Fire orb", 1, 2)
    .tertiary(108_718, "Rocky");
exports.default = new SimpleMonster_1.default({
    id: 5969,
    name: "Gnome",
    pickpocketTable: GnomeTable,
    aliases: ["gnome"],
});
