"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmouredZombieTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.ArmouredZombieTable = new LootTable_1.default({ limit: 128 })
    .every("bones")
    .add("Pure essence", [20, 50], 12)
    .add("Adamant arrow", 12, 8)
    .add("Blood rune", [4, 10], 4)
    .add("Cosmic rune", [10, 20], 3)
    .add("Nature rune", [4, 10], 2)
    .add("Chaos rune", [10, 20], 1)
    .add("Death rune", [4, 10], 1)
    .add(HerbDropTable_1.default, 1, 43)
    .add("Coins", [50, 400], 31)
    .add("Oak plank", 5, 6)
    .add("Plank", 10, 5)
    .add("Adamant mace", 1, 3)
    .add("Coins", [10, 20], 3)
    .add("Teak plank", 2, 2)
    .add("Adamant kiteshield", 1, 1)
    .add("Eye of newt", [2, 6], 1)
    .add("Fishing bait", 6, 1)
    .add(RareDropTable_1.GemTable, 1, 1)
    .tertiary(128, "Clue scroll (hard)")
    .tertiary(800, "Broken zombie axe")
    .tertiary(5000, "Zombie champion scroll");
exports.default = new SimpleMonster_1.default({
    id: 12_720,
    name: "Armoured Zombie",
    table: exports.ArmouredZombieTable,
    aliases: ["armoured zombie"],
});
