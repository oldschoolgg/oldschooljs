"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const PaladinTable = new LootTable_1.default().every("Coins", 80).every("Chaos rune", 2).tertiary(127_056, "Rocky");
exports.default = new SimpleMonster_1.default({
    id: 1144,
    name: "Paladin",
    pickpocketTable: PaladinTable,
    aliases: ["paladin"],
});
