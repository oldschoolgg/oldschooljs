"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorporealBeastTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const SigilTable = new LootTable_1.default().add("Spectral sigil", 1, 3).add("Arcane sigil", 1, 3).add("Elysian sigil", 1, 1);
exports.CorporealBeastTable = new LootTable_1.default()
    .add("Spirit shield", 1, 8)
    .add("Holy elixir", 1, 3)
    .oneIn(585, SigilTable)
    .add(RareDropTable_1.GemTable, 10, 12)
    .add("Mystic robe top", 1, 18)
    .add("Mystic robe bottom", 1, 18)
    .add("Mystic air staff", 1, 12)
    .add("Mystic water staff", 1, 12)
    .add("Mystic earth staff", 1, 12)
    .add("Mystic fire staff", 1, 12)
    .add("Soul rune", 250, 32)
    .add("Runite bolts", 250, 24)
    .add("Death rune", 300, 22)
    .add("Onyx bolts (e)", 175, 20)
    .add("Cannonball", 2000, 17)
    .add("Adamant arrow", 750, 17)
    .add("Law rune", 250, 17)
    .add("Cosmic rune", 500, 17)
    .add("Raw shark", 70, 21)
    .add("Pure essence", 2500, 21)
    .add("Adamantite bar", 35, 18)
    .add("Green dragonhide", 100, 18)
    .add("Adamantite ore", 125, 17)
    .add("Runite ore", 20, 12)
    .add("Teak plank", 100, 12)
    .add("Mahogany logs", 150, 12)
    .add("Magic logs", 75, 12)
    .add("Tuna potato", 30, 20)
    .add("White berries", 120, 17)
    .add("Desert goat horn", 120, 17)
    .add("Watermelon seed", 24, 15)
    .add("Coins", [20_000, 50_000], 12)
    .add("Antidote++(4)", 40, 10)
    .add("Ranarr seed", 10, 5)
    .tertiary(200, "Clue scroll (elite)")
    .tertiary(1000, "Jar of spirits")
    .tertiary(5000, "Pet dark core");
exports.default = new SimpleMonster_1.default({
    id: 319,
    name: "Corporeal Beast",
    table: exports.CorporealBeastTable,
    aliases: ["corporeal beast", "corp"],
});
