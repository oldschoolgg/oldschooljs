"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const RareSeedTable_1 = __importDefault(require("../../../subtables/RareSeedTable"));
const CaveKrakenTable = new LootTable_1.default({ limit: 400 })
    .add("Rune med helm", 1, 13)
    .add("Staff of water", 1, 8)
    .add("Adamant spear", 1, 8)
    .add("Rune warhammer", 1, 8)
    .add("Battlestaff", 1, 8)
    .add("Water battlestaff", 1, 8)
    .add("Mystic water staff", 1, 4)
    .oneIn(200, "Uncharged trident")
    .add("Death rune", 30, 32)
    .add("Chaos rune", 50, 32)
    .add("Water rune", 15, 20)
    .add("Water rune", 30, 20)
    .add("Water rune", 75, 20)
    .add("Fire rune", 30, 20)
    .add("Blood rune", 5, 16)
    .add("Steam rune", 7, 12)
    .add(HerbDropTable_1.default, 1, 12)
    .add(RareSeedTable_1.default, 1, 12)
    .add("Coins", [120, 300], 20)
    .add("Seaweed", 30, 12)
    .add("Swordfish", 2, 12)
    .add("Shark", 1, 12)
    .add("Antidote++(4)", 1, 12)
    .add("Old boot", 1, 8)
    .add("Swamp tar", 60, 8)
    .add("Raw lobster", 3, 8)
    .add("Water orb", 2, 8)
    .add("Oyster", 1, 8)
    .add("Vial of water", 50, 8)
    .add("Water talisman", 1, 8)
    .add("Bucket", 1, 2)
    .oneIn(1200, "Kraken tentacle")
    .add(RareDropTable_1.GemTable, 1, 12)
    .tertiary(100, "Clue scroll (hard)")
    .tertiary(1200, "Clue scroll (elite)");
exports.default = new SimpleMonster_1.default({
    id: 492,
    name: "Cave Kraken",
    table: CaveKrakenTable,
    aliases: ["cave kraken", "cave k"],
});
