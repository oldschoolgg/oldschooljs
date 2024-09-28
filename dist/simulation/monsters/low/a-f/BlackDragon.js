"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = __importStar(require("../../../subtables/RareDropTable"));
const WildySlayerCaveTable = new LootTable_1.default()
    .add("Blighted entangle sack", [1, 10], 8200)
    .add("Blighted anglerfish", [1, 2], 6150)
    .add("Blighted manta ray", [1, 2], 6150)
    .add("Blighted karambwan", [1, 2], 4100)
    .add("Blighted teleport spell sack", [1, 10], 4100)
    .add("Blighted ancient ice sack", [1, 10], 4100)
    .add("Blighted vengeance sack", [1, 10], 4100)
    .add("Blighted super restore(4)", 1, 2050)
    .add("Revenant cave teleport", 1, 2050)
    .add("Dareeyak teleport", 1, 410)
    .add("Wilderness crabs teleport", 1, 410)
    .add("Carrallanger teleport", 1, 410)
    .add("Paddewwa teleport", 1, 410)
    .add("Annakarl teleport", 1, 410)
    .add("Lassar teleport", 1, 410)
    .add("Kharyrll teleport", 1, 410)
    .add("Senntisten teleport", 1, 410)
    .add("Ghorrock teleport", 1, 410)
    .add("Target teleport", 1, 410)
    .add("Magic shortbow scroll", 1, 164)
    .add("Ring of wealth scroll", 1, 164)
    .add("Trouver parchment", 2, 41)
    .add("Looting bag note", 1, 41);
const BlackDragonTable = new LootTable_1.default()
    .every("Dragon bones")
    .every("Black dragonhide")
    .add("Mithril 2h sword", 1, 4)
    .add("Mithril axe", 1, 3)
    .add("Mithril battleaxe", 1, 3)
    .add("Rune knife", 2, 3)
    .add("Mithril kiteshield", 1, 1)
    .add("Adamant platebody", 1, 1)
    .add("Rune longsword", 1, 1)
    .add("Adamant javelin", 30, 20)
    .add("Fire rune", 50, 8)
    .add("Adamant dart(p)", 16, 7)
    .add("Law rune", 10, 5)
    .add("Blood rune", 15, 3)
    .add("Air rune", 75, 1)
    .add("Coins", 196, 40)
    .add("Coins", 330, 10)
    .add("Coins", 690, 1)
    .add("Dragon javelin heads", 10, 6)
    .add("Adamantite bar", 1, 3)
    .add("Chocolate cake", 1, 3)
    .add(RareDropTable_1.default, 1, 2)
    .add(RareDropTable_1.GemTable, 1, 3)
    .tertiary(35, "Ensouled dragon head")
    .tertiary(128, "Clue scroll (hard)")
    .tertiary(500, "Clue scroll (elite)")
    .tertiary(10_000, "Draconic visage");
const BlackDragonWildyCaveTable = new LootTable_1.default()
    .every(BlackDragonTable)
    .add(WildySlayerCaveTable, 1, 91)
    .add(new LootTable_1.default(), 1, 9);
exports.default = new SimpleMonster_1.default({
    id: 252,
    name: "Black Dragon",
    table: BlackDragonTable,
    wildyCaveTable: BlackDragonWildyCaveTable,
    aliases: ["black dragon", "black drags"],
});
