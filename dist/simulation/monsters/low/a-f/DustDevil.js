"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DustDevilPreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const WildySlayerCaveTable = new LootTable_1.default()
    .add("Blighted entangle sack", [1, 10], 11500)
    .add("Blighted anglerfish", [1, 2], 8620)
    .add("Blighted manta ray", [1, 2], 8620)
    .add("Blighted karambwan", [1, 2], 5780)
    .add("Blighted teleport spell sack", [1, 10], 5780)
    .add("Blighted ancient ice sack", [1, 10], 5780)
    .add("Blighted vengeance sack", [1, 10], 5780)
    .add("Blighted super restore(4)", 1, 2880)
    .add("Revenant cave teleport", 1, 2880)
    .add("Dareeyak teleport", 1, 577)
    .add("Wilderness crabs teleport", 1, 577)
    .add("Carrallanger teleport", 1, 577)
    .add("Paddewwa teleport", 1, 577)
    .add("Annakarl teleport", 1, 577)
    .add("Lassar teleport", 1, 577)
    .add("Kharyrll teleport", 1, 577)
    .add("Senntisten teleport", 1, 577)
    .add("Ghorrock teleport", 1, 577)
    .add("Target teleport", 1, 577)
    .add("Magic shortbow scroll", 1, 231)
    .add("Ring of wealth scroll", 1, 231)
    .add("Trouver parchment", 2, 58)
    .add("Looting bag note", 1, 58);
exports.DustDevilPreTable = new LootTable_1.default()
    .add("Adamant axe", 1, 3)
    .add("Rune dagger", 1, 2)
    .add("Red d'hide vambraces", 1, 2)
    .add("Air battlestaff", 1, 2)
    .add("Earth battlestaff", 1, 2)
    .add("Black d'hide vambraces", 1, 1)
    .add("Mystic air staff", 1, 1)
    .add("Mystic earth staff", 1, 1)
    .add("Dragon dagger", 1, 1)
    .oneIn(4000, "Dust battlestaff")
    .oneIn(32_768, "Dragon chainbody")
    .add("Dust rune", 200, 10)
    .add("Earth rune", 300, 10)
    .add("Fire rune", 300, 10)
    .add("Chaos rune", 80, 7)
    .add("Rune arrow", 12, 5)
    .add("Soul rune", 20, 4)
    .add("Fire rune", 50, 1)
    .add("Soul rune", 50, 1)
    .add(HerbDropTable_1.default, 1, 8)
    .add("Coins", [2000, 4000], 32)
    .add("Mithril bar", 10, 3)
    .add("Ugthanki kebab", 4, 2)
    .add("Adamantite bar", 4, 1)
    .add(RareDropTable_1.GemTable, 1, 8);
const DustDevilTable = new LootTable_1.default().every("Bones").every(exports.DustDevilPreTable);
const DustDevilWildyCaveTable = new LootTable_1.default()
    .every(DustDevilTable)
    .add(WildySlayerCaveTable, 1, 64)
    .add(new LootTable_1.default(), 1, 36);
exports.default = new SimpleMonster_1.default({
    id: 423,
    name: "Dust Devil",
    table: DustDevilTable,
    wildyCaveTable: DustDevilWildyCaveTable,
    aliases: ["dust devil", "dusty", "dusties"],
});
