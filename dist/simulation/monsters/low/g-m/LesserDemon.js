"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const LesserDemonTable = new LootTable_1.default()
    .every("Vile ashes")
    .add("Steel full helm", 1, 4)
    .add("Steel axe", 1, 4)
    .add("Steel scimitar", 1, 3)
    .add("Mithril sq shield", 1, 1)
    .add("Mithril chainbody", 1, 1)
    .add("Rune med helm", 1, 1)
    .add("Fire rune", 60, 8)
    .add("Chaos rune", 12, 5)
    .add("Death rune", 3, 3)
    .add("Fire rune", 30, 1)
    .add(HerbDropTable_1.default, 1, 1)
    .add("Coins", 120, 40)
    .add("Coins", 40, 29)
    .add("Coins", 200, 10)
    .add("Coins", 10, 7)
    .add("Coins", 450, 1)
    .add("Jug of wine", 1, 3)
    .add("Gold ore", 1, 2)
    .add(RareDropTable_1.GemTable, 1, 4)
    .tertiary(50, "Ensouled demon head")
    .tertiary(5000, "Lesser demon champion scroll");
const LesserDemonWildyCaveTable = new LootTable_1.default()
    .every(LesserDemonTable)
    .add(WildySlayerCaveTable, 1, 64)
    .add(new LootTable_1.default(), 1, 36);
exports.default = new SimpleMonster_1.default({
    id: 2005,
    name: "Lesser demon",
    table: LesserDemonTable,
    wildyCaveTable: LesserDemonWildyCaveTable,
    aliases: ["lesser demon"],
});
