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
exports.AbyssalDemonPreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = __importStar(require("../../../subtables/RareDropTable"));
const WildySlayerCaveTable = new LootTable_1.default()
    .add("Blighted entangle sack", [1, 10], 14500)
    .add("Blighted anglerfish", [1, 2], 10800)
    .add("Blighted manta ray", [1, 2], 7190)
    .add("Blighted karambwan", [1, 2], 7190)
    .add("Blighted teleport spell sack", [1, 10], 7190)
    .add("Blighted ancient ice sack", [1, 10], 7190)
    .add("Blighted vengeance sack", [1, 10], 7190)
    .add("Blighted super restore(4)", 1, 3600)
    .add("Revenant cave teleport", 1, 3600)
    .add("Dareeyak teleport", 1, 720)
    .add("Wilderness crabs teleport", 1, 720)
    .add("Carrallanger teleport", 1, 720)
    .add("Paddewwa teleport", 1, 720)
    .add("Annakarl teleport", 1, 720)
    .add("Lassar teleport", 1, 720)
    .add("Kharyrll teleport", 1, 720)
    .add("Senntisten teleport", 1, 720)
    .add("Ghorrock teleport", 1, 720)
    .add("Target teleport", 1, 720)
    .add("Magic shortbow scroll", 1, 288)
    .add("Ring of wealth scroll", 1, 288)
    .add("Trouver parchment", 2, 72)
    .add("Looting bag note", 1, 72);
exports.AbyssalDemonPreTable = new LootTable_1.default()
    .add("Black sword", 1, 4)
    .add("Steel battleaxe", 1, 3)
    .add("Black axe", 1, 2)
    .add("Mithril kiteshield", 1, 1)
    .add("Rune chainbody", 1, 1)
    .add("Rune med helm", 1, 1)
    .oneIn(512, "Abyssal whip")
    .oneIn(32_768, "Abyssal dagger")
    .add("Air rune", 50, 8)
    .add("Chaos rune", 10, 6)
    .add("Blood rune", 7, 4)
    .add("Law rune", 3, 1)
    .add(HerbDropTable_1.default, 1, 19)
    .add("Pure essence", 60, 5)
    .add("Adamantite bar", 1, 2)
    .add("Coins", 132, 35)
    .add("Coins", 220, 9)
    .add("Coins", 30, 7)
    .add("Coins", 44, 6)
    .add("Coins", 460, 1)
    .add("Lobster", 1, 2)
    .add("Cosmic talisman", 1, 1)
    .add("Chaos talisman", 1, 1)
    .add("Defence potion(3)", 1, 1)
    .add(RareDropTable_1.default, 1, 2)
    .add(RareDropTable_1.GemTable, 1, 5);
const AbyssalDemonTable = new LootTable_1.default()
    .every("Abyssal ashes")
    .every(exports.AbyssalDemonPreTable)
    .tertiary(25, "Ensouled abyssal head")
    .tertiary(128, "Clue scroll (hard)")
    .tertiary(1200, "Clue scroll (elite)")
    .tertiary(6000, "Abyssal head");
const AbyssalDemonWildyCaveTable = new LootTable_1.default()
    .every(AbyssalDemonTable)
    .add(WildySlayerCaveTable, 1, 80)
    .add(new LootTable_1.default(), 1, 20);
exports.default = new SimpleMonster_1.default({
    id: 415,
    name: "Abyssal Demon",
    table: AbyssalDemonTable,
    wildyCaveTable: AbyssalDemonWildyCaveTable,
    aliases: ["abbys", "abby demon", "abby demons", "abyssal demons", "abyssal demon"],
});
