"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const SimpleOpenable_1 = __importDefault(require("../../structures/SimpleOpenable"));
const util_1 = require("../../util");
const runeArmorTable = new LootTable_1.default().add("Rune platelegs", 1, 1).add("Rune plateskirt", 1, 1);
const coinsKeyHalfTable = new LootTable_1.default()
    .every("Coins", 750)
    .add("Tooth half of key", 1, 1)
    .add("Loop half of key", 1, 1);
const CrystalChestTable = new LootTable_1.default({ limit: 128 })
    .every("Uncut dragonstone")
    .add((0, util_1.itemTupleToTable)([
    ["Spinach roll", 1],
    ["Coins", 2000],
]), 1, 34)
    .add((0, util_1.itemTupleToTable)([
    ["Air rune", 50],
    ["Water rune", 50],
    ["Earth rune", 50],
    ["Fire rune", 50],
    ["Body rune", 50],
    ["Mind rune", 50],
    ["Chaos rune", 10],
    ["Death rune", 10],
    ["Cosmic rune", 10],
    ["Nature rune", 10],
    ["Law rune", 10],
]), 1, 12)
    .add((0, util_1.itemTupleToTable)([
    ["Ruby", 2],
    ["Diamond", 2],
]), 1, 12)
    .add("Runite bar", 3, 12)
    .add(coinsKeyHalfTable, 1, 10)
    .add("Iron ore", 150, 10)
    .add("Coal", 100, 10)
    .add((0, util_1.itemTupleToTable)([
    ["Raw swordfish", 5],
    ["Coins", 1000],
]), 1, 8)
    .add("Adamant sq shield", 1, 2)
    .add(runeArmorTable, 1);
exports.default = new SimpleOpenable_1.default({
    id: 989,
    name: "Crystal chest",
    aliases: ["crystal chest"],
    table: CrystalChestTable,
});
