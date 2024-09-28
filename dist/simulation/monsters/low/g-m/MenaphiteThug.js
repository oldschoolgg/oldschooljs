"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.default = new SimpleMonster_1.default({
    id: 3549,
    name: "Menaphite Thug",
    pickpocketTable: new LootTable_1.default().add("Coins", 60).tertiary(257_211, "Rocky"),
    aliases: ["menaphite thug", "menaphite", "thug"],
});
