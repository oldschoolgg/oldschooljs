"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const SpiritualRangerZarosTable = new LootTable_1.default()
    .add("Ancient ceremonial mask", 1, 1)
    .add("Ancient ceremonial top", 1, 1)
    .add("Ancient ceremonial legs", 1, 1)
    .add("Ancient ceremonial gloves", 1, 1)
    .add("Ancient ceremonial boots", 1, 1)
    .add("Adamant bolts", 15, 35)
    .add("Nature rune", 1, 20)
    .add("Chaos rune", 1, 15)
    .add("Rune arrow", 12, 10)
    .add("Rune arrow", 50, 10)
    .add("Grimy avantoe", 1, 15.625)
    .add("Grimy ranarr weed", 1, 12.5)
    .add("Grimy snapdragon", 1, 12.5)
    .add("Grimy torstol", 1, 9.375)
    .add("Coins", 500, 45)
    .add("Coins", [1300, 1337], 30)
    .add("Coins", 1, 10)
    .add("Ranging potion(2)", 1, 55)
    .add("Prayer potion(2)", 1, 45)
    .add("Super defence(1)", 1, 10)
    .add("Mithril longsword", 1, 75)
    .add("Adamantite bar", [1, 4], 40)
    .add("Coal", [1, 10], 40)
    .add("Pure essence", 23, 40)
    .add("Blue dragon scale", 2, 35)
    .add("Green d'hide body", 1, 35)
    .add("Uncut diamond", 1, 20)
    .add("Nihil shard", [2, 7], 5)
    .add("Shark", 1, 5)
    .add(RareDropTable_1.GemTable, 1, 5)
    .tertiary(128, "Clue scroll (hard)");
exports.default = new SimpleMonster_1.default({
    id: 11291,
    name: "Spiritual Ranger (Zaros)",
    table: SpiritualRangerZarosTable,
    aliases: ["spiritual ranger zaros"],
});
