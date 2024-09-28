"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const TreeHerbSeedTable_1 = __importDefault(require("../../../subtables/TreeHerbSeedTable"));
const WyvernHerbTable_1 = __importDefault(require("../../../subtables/WyvernHerbTable"));
const TalonedWyvernTable = new LootTable_1.default()
    .every("Wyvern bones")
    .oneIn(512, "Granite longsword")
    .oneIn(2560, "Granite boots")
    .add("Air battlestaff", 1, 4)
    .add("Battlestaff", [3, 5], 3)
    .add("Adamant battleaxe", 1, 2)
    .add("Adamant full helm", 1, 2)
    .add("Rune pickaxe", 1, 2)
    .add("Adamant platebody", 1, 2)
    .add("Adamant arrow", [38, 42], 6)
    .add("Water rune", 50, 4)
    .add("Chaos rune", 15, 4)
    .add("Law rune", 15, 4)
    .add("Death rune", 15, 4)
    .add("Blood rune", 15, 4)
    .add("Soul rune", 10, 1)
    .add("Runite bolts", [12, 30], 1)
    .add(WyvernHerbTable_1.default, 1, 13)
    .add(TreeHerbSeedTable_1.default, 1, 1)
    .add("Seaweed spore", 12, 2)
    .add("Ranarr seed", 1, 2)
    .add("Pure essence", 150, 8)
    .add("Adamantite bar", [2, 4], 6)
    .add("Teak logs", 35, 6)
    .add("Snape grass", [10, 15], 3)
    .add("Runite ore", [1, 2], 3)
    .add("Coins", 3000, 11)
    .add("Lobster", 2, 8)
    .add("Prayer potion(4)", 1, 7)
    .add("Adamant crossbow (u)", 1, 2)
    .add("Calcite", 2, 2)
    .add("Pyrophosphite", 2, 2)
    .add("Volcanic ash", [20, 60], 2)
    .tertiary(2, "Numulite", [5, 95])
    .tertiary(35, "Unidentified small fossil")
    .tertiary(70, "Unidentified medium fossil")
    .tertiary(88, "Unidentified large fossil")
    .tertiary(118, "Clue scroll (hard)")
    .tertiary(350, "Unidentified rare fossil")
    .tertiary(12_000, "Wyvern visage");
exports.default = new SimpleMonster_1.default({
    id: 7793,
    name: "Taloned Wyvern",
    table: TalonedWyvernTable,
    aliases: ["taloned wyvern", "taloned"],
});
