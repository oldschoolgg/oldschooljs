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
exports.MutatedBloodveldPreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = __importStar(require("../../../subtables/RareDropTable"));
exports.MutatedBloodveldPreTable = new LootTable_1.default()
    .add("Mithril full helm", 1, 8)
    .add("Mithril battleaxe", 1, 6)
    .add("Black med helm", 1, 5)
    .add("Mithril axe", 1, 5)
    .add("Adamant knife", 2, 3)
    .add("Adamant chainbody", 1, 3)
    .add("Adamant scimitar", 1, 3)
    .add("Mithril platebody", 1, 2)
    .add("Rune med helm", 1, 2)
    .add("Black boots", 1, 1)
    .add("Adamant longsword", 1, 1)
    .add("Rune dagger", 1, 1)
    .add("Rune battleaxe", 1, 1)
    .add("Blood rune", 30, 13)
    .add("Blood rune", 7, 10)
    .add("Fire rune", 75, 9)
    .add("Air rune", 105, 7)
    .add("Soul rune", 4, 7)
    .add("Coins", 350, 10)
    .add("Gold ore", 1, 7)
    .add("Meat pizza", 1, 5)
    .add("Mithril bar", 1, 5)
    .add("Bow string", 1, 4)
    .add("Coins", 11, 3)
    .add("Ruby amulet", 1, 2)
    .add(RareDropTable_1.default, 1, 3)
    .add(RareDropTable_1.GemTable, 1, 2);
const MutatedBloodveldTable = new LootTable_1.default()
    .every("Vile ashes")
    .every(exports.MutatedBloodveldPreTable)
    .tertiary(128, "Clue scroll (hard)")
    .tertiary(20, "Ensouled bloodveld head");
exports.default = new SimpleMonster_1.default({
    id: 7276,
    name: "Mutated Bloodveld",
    table: MutatedBloodveldTable,
    aliases: ["mutated bloodveld", "thicc bois", "thicc boi", "mutated velds"],
});
