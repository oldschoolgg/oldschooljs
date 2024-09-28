"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const VyreTable = new LootTable_1.default({ limit: 132 })
    .add("Coins", [250, 315], 109)
    .add("Death rune", 2, 8)
    .add("Blood pint", 1, 6)
    .add("Uncut ruby", 1, 5)
    .add("Blood rune", 4, 2)
    .add("Diamond")
    .add("Cooked mystery meat")
    .oneIn(5000, "Blood shard")
    .tertiary(99_175, "Rocky");
exports.default = new SimpleMonster_1.default({
    id: 9710,
    name: "Vyre",
    pickpocketTable: VyreTable,
    aliases: ["vyre"],
});
