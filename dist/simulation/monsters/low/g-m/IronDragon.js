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
const IronDragonTable = new LootTable_1.default()
    .every("Dragon bones")
    .every("Iron bar", 5)
    .oneIn(1024, "Dragon plateskirt")
    .oneIn(1024, "Dragon platelegs")
    .add("Rune dart(p)", 9, 7)
    .add("Adamant 2h sword", 1, 4)
    .add("Adamant axe", 1, 3)
    .add("Adamant battleaxe", 1, 3)
    .add("Rune knife", 5, 3)
    .add("Adamant sq shield", 1, 1)
    .add("Rune med helm", 1, 1)
    .add("Rune battleaxe", 1, 1)
    .add("Rune javelin", 4, 20)
    .add("Blood rune", 15, 19)
    .add("Adamant bolts", [2, 12], 6)
    .add("Soul rune", 3, 5)
    .add("Coins", 270, 20)
    .add("Coins", 550, 10)
    .add("Coins", 990, 1)
    .add("Super strength(1)", 1, 8)
    .add("Runite limbs", 1, 5)
    .add("Adamantite bar", 2, 3)
    .add("Curry", 1, 3)
    .add(RareDropTable_1.default, 1, 2)
    .add(RareDropTable_1.GemTable, 1, 3)
    .tertiary(128, "Clue scroll (hard)")
    .tertiary(10_000, "Draconic visage");
exports.default = new SimpleMonster_1.default({
    id: 272,
    name: "Iron Dragon",
    table: IronDragonTable,
    aliases: ["iron dragon", "iron d"],
});
