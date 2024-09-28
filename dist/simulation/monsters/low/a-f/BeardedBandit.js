"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.default = new SimpleMonster_1.default({
    id: 736,
    name: "Bearded Pollnivnian Bandit",
    table: new LootTable_1.default({ limit: 5 }).every("Bones").add("Coins", [10, 300]),
    pickpocketTable: new LootTable_1.default().add("Coins", 40).tertiary(257_211, "Rocky"),
    aliases: ["bearded pollnivnian bandit", "pollnivnian bandit", "bearded bandit"],
});
