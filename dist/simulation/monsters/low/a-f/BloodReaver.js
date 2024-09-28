"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const HerbTable = new LootTable_1.default()
    .add("Grimy avantoe", 1, 5)
    .add("Grimy ranarr weed", 1, 4)
    .add("Grimy snapdragon", 1, 4)
    .add("Grimy torstol", 1, 3);
const BloodReaverTable = new LootTable_1.default()
    .every("Malicious ashes")
    .add("Ancient ceremonial mask", 1, 1)
    .add("Ancient ceremonial top", 1, 1)
    .add("Ancient ceremonial legs", 1, 1)
    .add("Ancient ceremonial gloves", 1, 1)
    .add("Ancient ceremonial boots", 1, 1)
    .add("Astral rune", 25, 75)
    .add("Air rune", 250, 35)
    .add("Mud rune", 15, 35)
    .add("Mind rune", 20, 20)
    .add("Nature rune", 15, 20)
    .add("Chaos rune", 15, 15)
    .add("Air rune", 150, 10)
    .add("Blood rune", 15, 10)
    .add(HerbTable, 1, 50)
    .add("Coins", 500, 45)
    .add("Coins", [1300, 1337], 30)
    .add("Coins", 1, 10)
    .add("Magic potion(1)", 1, 55)
    .add("Prayer potion(2)", 1, 45)
    .add("Super defence(1)", 1, 10)
    .add("Adamantite bar", [1, 4], 40)
    .add("Coal", [1, 10], 40)
    .add("Pure essence", 23, 40)
    .add("Potato cactus", 1, 35)
    .add("Blood essence", 1, 5)
    .add("Nihil shard", [2, 7], 5)
    .add(RareDropTable_1.GemTable, 1, 5)
    .tertiary(112, "Clue scroll (hard)");
exports.default = new SimpleMonster_1.default({
    id: 11_293,
    name: "Blood Reaver",
    table: BloodReaverTable,
    aliases: ["blood reaver"],
});
