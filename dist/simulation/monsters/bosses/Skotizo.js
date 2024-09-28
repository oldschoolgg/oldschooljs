"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const AncientShardTable = new LootTable_1.default({ limit: 100 })
    .add("Ancient shard", 1, 75)
    .add("Ancient shard", 2, 15)
    .add("Ancient shard", 3, 5)
    .add("Ancient shard", 4, 4)
    .add("Ancient shard", 5, 1);
const SkotizoTable = new LootTable_1.default()
    .every("Infernal ashes")
    .every("Clue scroll (hard)")
    .every(AncientShardTable)
    .add("Rune platebody", 3, 1)
    .add("Rune platelegs", 3, 1)
    .add("Rune plateskirt", 3, 1)
    .add("Death rune", 500, 1)
    .add("Soul rune", 450, 1)
    .add("Blood rune", 450, 1)
    .add("Grimy snapdragon", 20, 1)
    .add("Grimy torstol", 20, 1)
    .add("Battlestaff", 25, 1)
    .add("Onyx bolt tips", 40, 1)
    .add("Adamantite ore", 75, 1)
    .add("Runite bar", 20, 1)
    .add("Raw anglerfish", 60, 1)
    .add("Mahogany plank", 150, 1)
    .oneIn(100, "Uncut dragonstone", 10)
    .oneIn(1000, "Uncut onyx")
    .oneIn(100, "Shield left half")
    .tertiary(5, "Clue scroll (elite)")
    .tertiary(9, "Ensouled demon head")
    .tertiary(25, "Dark claw")
    .tertiary(65, "Skotos")
    .tertiary(128, "Dark totem base")
    .tertiary(128, "Dark totem base")
    .tertiary(128, "Dark totem base")
    .tertiary(128, "Dark totem")
    .tertiary(200, "Jar of darkness");
exports.default = new SimpleMonster_1.default({
    id: 7286,
    name: "Skotizo",
    table: SkotizoTable,
    aliases: ["skotizo"],
});
