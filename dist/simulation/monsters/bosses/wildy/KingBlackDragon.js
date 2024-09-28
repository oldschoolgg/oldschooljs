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
const KingBlackDragonTable = new LootTable_1.default()
    .every("Dragon bones")
    .every("Black dragonhide", 2)
    .tertiary(450, "Clue scroll (elite)")
    .tertiary(129, "Kbd heads")
    .tertiary(3000, "Prince black dragon")
    .tertiary(5000, "Draconic visage")
    .oneIn(1000, "Dragon pickaxe")
    .add("Rune longsword", 1, 10)
    .add("Adamant platebody", 1, 9)
    .add("Adamant kiteshield", 1, 3)
    .add("Dragon med helm", 1, 1)
    .add("Air rune", 300, 10)
    .add("Iron arrow", 690, 10)
    .add("Runite bolts", [10, 20], 10)
    .add("Fire rune", 300, 5)
    .add("Law rune", 30, 5)
    .add("Blood rune", 30, 5)
    .add("Yew logs", 150, 10)
    .add("Adamantite bar", 3, 5)
    .add("Runite bar", 1, 3)
    .add("Gold ore", 100, 2)
    .add("Amulet of power", 1, 7)
    .add("Dragon arrowtips", [5, 14], 5)
    .add("Dragon dart tip", [5, 14], 5)
    .add("Dragon javelin heads", 15, 5)
    .add("Runite limbs", 1, 4)
    .add("Shark", 4, 4)
    .add(RareDropTable_1.default, 1, 8)
    .add(RareDropTable_1.GemTable, 1, 2);
exports.default = new SimpleMonster_1.default({
    id: 6502,
    name: "King Black Dragon",
    table: KingBlackDragonTable,
    aliases: ["kbd", "king black dragon"],
});
