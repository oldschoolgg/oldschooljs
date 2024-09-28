"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BansheePreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.BansheePreTable = new LootTable_1.default({ limit: 128 })
    .oneIn(512, "Mystic gloves (dark)", 1)
    .add("Iron mace", 1, 2)
    .add("Iron dagger", 1, 2)
    .add("Iron kiteshield", 1, 1)
    .add("Air rune", 3, 3)
    .add("Cosmic rune", 2, 3)
    .add("Chaos rune", 3, 2)
    .add("Fire rune", 7, 1)
    .add("Chaos rune", 7, 1)
    .add("Pure essence", 13, 22)
    .add("Iron ore", 1, 1)
    .add("Coins", 13, 10)
    .add("Coins", 26, 8)
    .add("Coins", 35, 8)
    .add("Fishing bait", 15, 22)
    .add("Fishing bait", 7, 5)
    .add("Eye of newt", 1, 1)
    .add(HerbDropTable_1.default, 1, 34)
    .add(RareDropTable_1.GemTable, 1, 2);
const BansheeTable = new LootTable_1.default().tertiary(128, "Clue scroll (easy)", 1).every(exports.BansheePreTable);
exports.default = new SimpleMonster_1.default({
    id: 414,
    name: "Banshee",
    table: BansheeTable,
    aliases: ["banshee"],
});
