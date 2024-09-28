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
const BrutalBlueDragonTable = new LootTable_1.default()
    .every("Dragon bones")
    .every("Blue dragonhide", 2)
    .add("Adamant hasta", 1, 10)
    .add("Adamant platelegs", 1, 7)
    .add("Mithril full helm", 1, 5)
    .add("Rune longsword", 1, 5)
    .add("Blue d'hide body", 1, 2)
    .add("Blue d'hide vambraces", 1, 1)
    .add("Dragon dagger", 1, 1)
    .add("Dragon longsword", 1, 1)
    .add("Dragon med helm", 1, 1)
    .add("Rune full helm", 1, 1)
    .add("Rune platebody", 1, 1)
    .add("Chaos rune", 18, 8)
    .add("Death rune", 11, 8)
    .add("Rune javelin", 20, 8)
    .add("Air rune", 50, 7)
    .add("Law rune", 15, 7)
    .add("Rune arrow", 15, 7)
    .add("Adamant dart", 10, 5)
    .add("Rune knife", 5, 2)
    .add("Rune thrownaxe", 10, 2)
    .add("Blue dragon scale", 5, 4)
    .add("Dragon dart tip", 5, 3)
    .add("Dragon arrowtips", 5, 2)
    .add("Runite ore", 1, 2)
    .add("Dragon javelin heads", 12, 1)
    .add("Coins", 370, 11)
    .add("Curry", 2, 8)
    .add("Coins", 621, 1)
    .add("Adamantite ore", 1, 3)
    .add("Bass", 1, 3)
    .add(RareDropTable_1.default, 1, 2)
    .add(RareDropTable_1.GemTable, 1, 3)
    .tertiary(20, "Ensouled dragon head")
    .tertiary(33, "Scaly blue dragonhide")
    .tertiary(128, "Clue scroll (hard)")
    .tertiary(750, "Clue scroll (elite)")
    .tertiary(10_000, "Draconic visage");
exports.default = new SimpleMonster_1.default({
    id: 7273,
    name: "Brutal blue Dragon",
    table: BrutalBlueDragonTable,
    aliases: ["brutal blue dragon", "brutal blues", "brutal blue"],
});
