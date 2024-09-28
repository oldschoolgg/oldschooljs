"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const WildySlayerCaveTable = new LootTable_1.default()
    .add("Blighted entangle sack", [1, 10], 7700)
    .add("Blighted anglerfish", [1, 2], 5750)
    .add("Blighted manta ray", [1, 2], 5750)
    .add("Blighted karambwan", [1, 2], 3815)
    .add("Blighted teleport spell sack", [1, 10], 3815)
    .add("Blighted ancient ice sack", [1, 10], 3815)
    .add("Blighted vengeance sack", [1, 10], 3815)
    .add("Blighted super restore(4)", 1, 1915)
    .add("Revenant cave teleport", 1, 1915)
    .add("Dareeyak teleport", 1, 383)
    .add("Wilderness crabs teleport", 1, 383)
    .add("Carrallanger teleport", 1, 383)
    .add("Paddewwa teleport", 1, 383)
    .add("Annakarl teleport", 1, 383)
    .add("Lassar teleport", 1, 383)
    .add("Kharyrll teleport", 1, 383)
    .add("Senntisten teleport", 1, 383)
    .add("Ghorrock teleport", 1, 383)
    .add("Target teleport", 1, 383)
    .add("Magic shortbow scroll", 1, 153)
    .add("Ring of wealth scroll", 1, 153)
    .add("Trouver parchment", 2, 38)
    .add("Looting bag note", 1, 38);
const HellhoundTable = new LootTable_1.default()
    .every("Vile ashes")
    .oneIn(32_768, "Smouldering stone")
    .tertiary(40, "Ensouled hellhound head")
    .tertiary(64, "Clue scroll (hard)");
const HellhoundWildyCaveTable = new LootTable_1.default()
    .every(HellhoundTable)
    .add(WildySlayerCaveTable, 1, 85)
    .add(new LootTable_1.default(), 1, 15);
exports.default = new SimpleMonster_1.default({
    id: 104,
    name: "Hellhound",
    table: HellhoundTable,
    wildyCaveTable: HellhoundWildyCaveTable,
    aliases: ["hellhound", "hellh"],
});
