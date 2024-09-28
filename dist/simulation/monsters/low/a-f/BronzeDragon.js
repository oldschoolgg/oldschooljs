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
const BronzeDragonTable = new LootTable_1.default()
    .every("Dragon bones")
    .every("Bronze bar", 5)
    .oneIn(2048, "Dragon plateskirt")
    .oneIn(2048, "Dragon platelegs")
    .add("Adamant dart(p)", 1, 7)
    .add("Mithril 2h sword", 1, 4)
    .add("Mithril axe", 1, 3)
    .add("Mithril battleaxe", 1, 3)
    .add("Rune knife", 1, 3)
    .add("Mithril kiteshield", 1, 1)
    .add("Adamant platebody", 1, 1)
    .add("Rune longsword", 1, 1)
    .add("Adamant javelin", 20, 20)
    .add("Fire rune", 50, 8)
    .add("Mithril bolts", [2, 12], 6)
    .add("Law rune", 10, 5)
    .add("Blood rune", 15, 3)
    .add("Death rune", 25, 1)
    .add("Coins", 196, 40)
    .add("Coins", 330, 10)
    .add("Coins", 690, 1)
    .add("Adamantite bar", 1, 3)
    .add("Swordfish", 2, 2)
    .add("Swordfish", 1, 1)
    .add(RareDropTable_1.default, 1, 1)
    .add(RareDropTable_1.GemTable, 1, 4)
    .tertiary(128, "Clue scroll (hard)");
exports.default = new SimpleMonster_1.default({
    id: 270,
    name: "Bronze Dragon",
    table: BronzeDragonTable,
    aliases: ["bronze dragon"],
});
