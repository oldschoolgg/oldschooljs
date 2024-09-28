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
exports.SmokeDevilPreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = __importStar(require("../../../subtables/RareDropTable"));
const SmokeDevilHerbTable = new LootTable_1.default().add(HerbDropTable_1.default, 1, 2).add(HerbDropTable_1.default, 2, 1);
exports.SmokeDevilPreTable = new LootTable_1.default({ limit: 128 })
    .add("Adamant battleaxe", 1, 3)
    .add("Rune dagger", 1, 3)
    .add("Air battlestaff", 1, 3)
    .add("Black d'hide vambraces", 1, 3)
    .add("Fire battlestaff", 1, 3)
    .add("Mithril plateskirt", 1, 2)
    .add("Rune full helm", 1, 2)
    .add("Rune chainbody", 1, 2)
    .add("Red d'hide body", 1, 1)
    .oneIn(512, "Occult necklace")
    .oneIn(32_768, "Dragon chainbody")
    .add("Smoke rune", 15, 11)
    .add("Smoke rune", 40, 5)
    .add("Runite bolts", 15, 5)
    .add("Fire rune", 37, 4)
    .add("Air rune", 37, 4)
    .add("Soul rune", 10, 4)
    .add("Fire rune", 150, 2)
    .add("Rune arrow", 24, 2)
    .add(SmokeDevilHerbTable, 1, 18)
    .add("Coins", 750, 12)
    .add("Coins", 80, 7)
    .add("Coins", 300, 3)
    .add("Shark", 1, 6)
    .add("Steel bar", 2, 3)
    .add("Magic logs", 5, 3)
    .add("Coal", 15, 3)
    .add("Adamantite bar", 1, 2)
    .add("Crossbow string", 1, 2)
    .add("Ugthanki kebab", 3, 2)
    .add(RareDropTable_1.default, 1, 4)
    .add(RareDropTable_1.GemTable, 1, 4);
const SmokeDevilTable = new LootTable_1.default()
    .every("Ashes")
    .every(exports.SmokeDevilPreTable)
    .tertiary(128, "Clue scroll (hard)")
    .tertiary(750, "Clue scroll (elite)");
exports.default = new SimpleMonster_1.default({
    id: 498,
    name: "Smoke Devil",
    table: SmokeDevilTable,
    aliases: ["smoke devil", "smokeys", "smokies", "smoke devils"],
});
