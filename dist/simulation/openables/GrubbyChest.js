"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const SimpleOpenable_1 = __importDefault(require("../../structures/SimpleOpenable"));
const util_1 = require("../../util");
const FoodTable = new LootTable_1.default()
    .add("Egg potato", 4, 12)
    .add("Shark", 4, 7)
    .add((0, util_1.itemTupleToTable)([
    ["Saradomin brew(2)", 3],
    ["Super restore(2)", 1],
]), 1, 1);
const PotionTable = new LootTable_1.default()
    .add((0, util_1.itemTupleToTable)([
    ["Super attack(2)", 1],
    ["Super strength(2)", 1],
    ["Super defence(2)", 1],
]), 1, 8)
    .add((0, util_1.itemTupleToTable)([
    ["Super defence(2)", 1],
    ["Ranging potion(2)", 1],
]), 1, 8)
    .add("Prayer potion(3)", 2, 3)
    .add("Super restore(3)", 2, 1);
const GrubbyChestTable = new LootTable_1.default()
    .every(FoodTable, 2)
    .every(PotionTable, 1)
    .add("Law rune", 200, 10)
    .add("Death rune", 200, 10)
    .add("Astral rune", 200, 10)
    .add("Blood rune", 200, 10)
    .add("Grimy toadflax", 10, 8)
    .add("Grimy ranarr weed", 10, 8)
    .add("Coins", 10_000, 8)
    .add("Grimy snapdragon", 10, 7)
    .add("Grimy torstol", 5, 7)
    .add("Crystal key", 1, 6)
    .add("Dragon bones", 10, 6)
    .add("Red dragonhide", 10, 6)
    .add("Dragon dart tip", 50, 2)
    .add("Dragon arrowtips", 100, 2)
    .tertiary(25, "Orange egg sac")
    .tertiary(25, "Blue egg sac");
exports.default = new SimpleOpenable_1.default({
    id: 23_499,
    name: "Grubby chest",
    aliases: ["grubby chest", "grubby"],
    table: GrubbyChestTable,
});
