"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const DesertBanditTable = new LootTable_1.default()
    .add("Coins", 30, 70)
    .add("Antipoison(1)", 1, 15)
    .add("Lockpick", 1, 15)
    .tertiary(257_211, "Rocky");
exports.default = new SimpleMonster_1.default({
    id: 690,
    name: "Desert Bandit",
    pickpocketTable: DesertBanditTable,
    aliases: ["desert bandit"],
});
