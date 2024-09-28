"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const FarmerTable = new LootTable_1.default().add("Coins", 9, 98).add("Potato seed", 1, 2).tertiary(257_211, "Rocky");
exports.default = new SimpleMonster_1.default({
    id: 3114,
    name: "Farmer",
    pickpocketTable: FarmerTable,
    aliases: ["farmer"],
});
