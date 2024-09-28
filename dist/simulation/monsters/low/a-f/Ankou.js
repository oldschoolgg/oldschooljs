"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const CommonSeedDropTable_1 = __importDefault(require("../../../subtables/CommonSeedDropTable"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const WildySlayerCaveTable = new LootTable_1.default()
    .add("Blighted entangle sack", [1, 10], 11900)
    .add("Blighted anglerfish", [1, 2], 8930)
    .add("Blighted manta ray", [1, 2], 8930)
    .add("Blighted karambwan", [1, 2], 5950)
    .add("Blighted teleport spell sack", [1, 10], 5950)
    .add("Blighted ancient ice sack", [1, 10], 5950)
    .add("Blighted vengeance sack", [1, 10], 5950)
    .add("Blighted super restore(4)", 1, 2980)
    .add("Revenant cave teleport", 1, 2980)
    .add("Dareeyak teleport", 1, 595)
    .add("Wilderness crabs teleport", 1, 595)
    .add("Carrallanger teleport", 1, 595)
    .add("Paddewwa teleport", 1, 595)
    .add("Annakarl teleport", 1, 595)
    .add("Lassar teleport", 1, 595)
    .add("Kharyrll teleport", 1, 595)
    .add("Senntisten teleport", 1, 595)
    .add("Ghorrock teleport", 1, 595)
    .add("Target teleport", 1, 595)
    .add("Magic shortbow scroll", 1, 238)
    .add("Ring of wealth scroll", 1, 238)
    .add("Trouver parchment", 2, 59)
    .add("Looting bag note", 1, 59);
const AnkouTable = new LootTable_1.default({ limit: 100 })
    .every("Bones")
    .oneIn(33, "Left skull half")
    .add("Black knife", 1, 1)
    .add("Black robe", 1, 1)
    .add("Death rune", 10, 10)
    .add("Blood rune", 11, 6)
    .add("Law rune", 2, 6)
    .add("Adamant arrow", [5, 14], 4)
    .add("Blood rune", 5, 3)
    .add(HerbDropTable_1.default, 1, 3)
    .add(CommonSeedDropTable_1.default, 1, 1)
    .add("Pure essence", 15, 5)
    .add("Mithril ore", [3, 7], 2)
    .add("Coins", 8, 33)
    .add("Coins", [5, 204], 10)
    .add("Bass", 1, 2)
    .add("Weapon poison", 1, 2)
    .add("Fried mushrooms", 1, 1)
    .add(RareDropTable_1.GemTable, 1, 2)
    .tertiary(512, "Clue scroll (hard)");
const AnkouWildyCaveTable = new LootTable_1.default()
    .every(AnkouTable)
    .add(WildySlayerCaveTable, 1, 66)
    .add(new LootTable_1.default(), 1, 34);
exports.default = new SimpleMonster_1.default({
    id: 2514,
    name: "Ankou",
    table: AnkouTable,
    wildyCaveTable: AnkouWildyCaveTable,
    aliases: ["ankou", "ank"],
});
