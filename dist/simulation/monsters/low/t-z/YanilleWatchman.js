"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const YanilleWatchmanTable = new LootTable_1.default().every("Coins", 60).every("Bread").tertiary(134_625, "Rocky");
exports.default = new SimpleMonster_1.default({
    id: 5420,
    name: "Watchman",
    pickpocketTable: YanilleWatchmanTable,
    aliases: ["yanille", "watchman", "yanille watchman"],
});
