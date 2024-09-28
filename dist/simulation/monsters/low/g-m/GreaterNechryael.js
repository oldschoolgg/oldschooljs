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
const WildySlayerCaveTable = new LootTable_1.default()
    .add("Blighted entangle sack", [1, 10], 16700)
    .add("Blighted anglerfish", [1, 2], 12500)
    .add("Blighted manta ray", [1, 2], 12500)
    .add("Blighted karambwan", [1, 2], 8260)
    .add("Blighted teleport spell sack", [1, 10], 8260)
    .add("Blighted ancient ice sack", [1, 10], 8260)
    .add("Blighted vengeance sack", [1, 10], 8260)
    .add("Blighted super restore(4)", 1, 4150)
    .add("Revenant cave teleport", 1, 4150)
    .add("Dareeyak teleport", 1, 829)
    .add("Wilderness crabs teleport", 1, 829)
    .add("Carrallanger teleport", 1, 829)
    .add("Paddewwa teleport", 1, 829)
    .add("Annakarl teleport", 1, 829)
    .add("Lassar teleport", 1, 829)
    .add("Kharyrll teleport", 1, 829)
    .add("Senntisten teleport", 1, 829)
    .add("Ghorrock teleport", 1, 829)
    .add("Target teleport", 1, 829)
    .add("Magic shortbow scroll", 1, 332)
    .add("Ring of wealth scroll", 1, 332)
    .add("Trouver parchment", 2, 83)
    .add("Looting bag note", 1, 83);
const GreaterNechryaelTable = new LootTable_1.default()
    .every("Malicious ashes")
    .add("Adamant kiteshield", 1, 7)
    .add("Rune axe", 1, 7)
    .add("Rune sq shield", 1, 7)
    .add("Adamant battleaxe", 1, 5)
    .add("Rune med helm", 1, 4)
    .add("Rune full helm", 1, 3)
    .add("Mystic air staff", 1, 2)
    .add("Rune boots", 1, 1)
    .add("Rune chainbody", 1, 1)
    .add("Death rune", 23, 12)
    .add("Blood rune", 20, 10)
    .add("Chaos rune", 50, 10)
    .add("Air rune", 150, 6)
    .add("Soul rune", 25, 5)
    .add(HerbDropTable_1.default, 1, 7)
    .add(RareSeedTable_1.default, 2, 5)
    .add("Lobster", 1, 10)
    .add("Coins", [2000, 2500], 8)
    .add("Gold bar", 5, 7)
    .add("Tuna", 2, 6)
    .add("Wine of zamorak", 3, 2)
    .add(RareDropTable_1.GemTable, 1, 3)
    .tertiary(128, "Clue scroll (hard)");
const GreaterNechryaelWildyCaveTable = new LootTable_1.default()
    .every(GreaterNechryaelTable)
    .add(WildySlayerCaveTable, 1, 92)
    .add(new LootTable_1.default(), 1, 8);
exports.default = new SimpleMonster_1.default({
    id: 7278,
    name: "Greater Nechryael",
    table: GreaterNechryaelTable,
    wildyCaveTable: GreaterNechryaelWildyCaveTable,
    aliases: ["greater nechryael", "greater nech", "greater nechs", "g nechs"],
});
