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
    .add("Blighted entangle sack", [1, 10], 11100)
    .add("Blighted anglerfish", [1, 2], 8400)
    .add("Blighted manta ray", [1, 2], 8400)
    .add("Blighted karambwan", [1, 2], 5590)
    .add("Blighted teleport spell sack", [1, 10], 5590)
    .add("Blighted ancient ice sack", [1, 10], 5590)
    .add("Blighted vengeance sack", [1, 10], 5590)
    .add("Blighted super restore(4)", 1, 2790)
    .add("Revenant cave teleport", 1, 2790)
    .add("Dareeyak teleport", 1, 559)
    .add("Wilderness crabs teleport", 1, 559)
    .add("Carrallanger teleport", 1, 559)
    .add("Paddewwa teleport", 1, 559)
    .add("Annakarl teleport", 1, 559)
    .add("Lassar teleport", 1, 559)
    .add("Kharyrll teleport", 1, 559)
    .add("Senntisten teleport", 1, 559)
    .add("Ghorrock teleport", 1, 559)
    .add("Target teleport", 1, 559)
    .add("Magic shortbow scroll", 1, 223)
    .add("Ring of wealth scroll", 1, 223)
    .add("Trouver parchment", 2, 56)
    .add("Looting bag note", 1, 56);
const GreenDragonTable = new LootTable_1.default()
    .every("Dragon bones")
    .every("Green dragonhide")
    .add("Steel platelegs", 1, 4)
    .add("Steel battleaxe", 1, 3)
    .add("Mithril axe", 1, 3)
    .add("Mithril spear", 1, 2)
    .add("Mithril kiteshield", 1, 1)
    .add("Adamant full helm", 1, 1)
    .add("Rune dagger", 1, 1)
    .add("Water rune", 75, 8)
    .add("Nature rune", 15, 5)
    .add("Law rune", 3, 3)
    .add("Fire rune", 37, 1)
    .add(HerbDropTable_1.default, 1, 15)
    .add("Coins", 44, 29)
    .add("Coins", 132, 25)
    .add("Coins", 200, 10)
    .add("Coins", 11, 5)
    .add("Coins", 440, 1)
    .add("Bass", 1, 3)
    .add("Adamantite ore", 1, 3)
    .add(RareDropTable_1.GemTable, 1, 5)
    .tertiary(35, "Ensouled dragon head")
    .tertiary(128, "Clue scroll (hard)");
const GreenDragonWildyCaveTable = new LootTable_1.default()
    .every(GreenDragonTable)
    .add(WildySlayerCaveTable, 1, 62)
    .add(new LootTable_1.default(), 1, 38);
exports.default = new SimpleMonster_1.default({
    id: 260,
    name: "Green dragon",
    table: GreenDragonTable,
    wildyCaveTable: GreenDragonWildyCaveTable,
    aliases: ["green dragon", "green drags"],
});
