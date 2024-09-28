"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const TzHaarHurTable = new LootTable_1.default({ limit: 195 })
    .add("Tokkul", [3, 7], 182)
    .add("Uncut sapphire", 1, 5)
    .add("Uncut emerald", 1, 4)
    .add("Uncut ruby", 1, 3)
    .add("Uncut diamond", 1, 1)
    .tertiary(176_743, "Rocky");
exports.default = new SimpleMonster_1.default({
    id: 2161,
    name: "TzHaar-Hur",
    pickpocketTable: TzHaarHurTable,
    aliases: ["tzhaarhur", "tzhaar hur", "tzhaar-hur"],
});
