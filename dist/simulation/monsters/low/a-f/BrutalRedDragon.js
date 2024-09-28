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
const BrutalRedDragonTable = new LootTable_1.default()
    .every("Dragon bones")
    .every("Red dragonhide", 2)
    .add("Rune hasta", 1, 10)
    .add("Adamant platelegs", 1, 7)
    .add("Adamant full helm", 1, 5)
    .add("Rune longsword", 1, 5)
    .add("Red d'hide body", 1, 2)
    .add("Rune full helm", 2, 2)
    .add("Red d'hide vambraces", 1, 1)
    .add("Dragon dagger", 1, 1)
    .add("Dragon longsword", 1, 1)
    .add("Dragon med helm", 1, 1)
    .add("Rune platebody", 1, 1)
    .add("Death rune", 25, 8)
    .add("Rune javelin", 30, 8)
    .add("Air rune", 105, 7)
    .add("Blood rune", 12, 7)
    .add("Law rune", 25, 7)
    .add("Rune arrow", 25, 7)
    .add("Adamant dart", 20, 5)
    .add("Rune knife", 10, 2)
    .add("Rune thrownaxe", 15, 2)
    .add("White berries", 5, 4)
    .add("Dragon dart tip", 8, 3)
    .add("Dragon arrowtips", 8, 2)
    .add("Runite ore", 2, 2)
    .add("Dragon javelin heads", 25, 1)
    .add("Coins", 670, 11)
    .add("Coins", 621, 1)
    .add("Curry", 3, 8)
    .add(RareDropTable_1.default, 1, 2)
    .add(RareDropTable_1.GemTable, 1, 3)
    .tertiary(20, "Ensouled dragon head")
    .tertiary(128, "Clue scroll (hard)")
    .tertiary(500, "Clue scroll (elite)")
    .tertiary(10_000, "Draconic visage");
exports.default = new SimpleMonster_1.default({
    id: 7274,
    name: "Brutal red Dragon",
    table: BrutalRedDragonTable,
    aliases: ["brutal red dragon", "brutal reds", "brutal red"],
});
