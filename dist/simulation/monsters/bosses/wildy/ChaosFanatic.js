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
const util_1 = require("../../../../util");
const RareDropTable_1 = __importStar(require("../../../subtables/RareDropTable"));
const ChaosFanaticUniqueTable = new LootTable_1.default().add("Odium shard 1").add("Malediction shard 1");
const ChaosFanaticTable = new LootTable_1.default()
    .every("Bones")
    .tertiary(128, "Clue scroll (hard)")
    .tertiary(1000, "Pet chaos elemental")
    .add(ChaosFanaticUniqueTable, 1, 1)
    .add("Battlestaff", 5, 5)
    .add("Splitbark body", 1, 5)
    .add("Splitbark legs", 1, 5)
    .add((0, util_1.itemTupleToTable)([
    ["Zamorak monk top", 1],
    ["Zamorak monk bottom", 1],
]), 1, 4)
    .add("Ancient staff", 1, 1)
    .add("Fire rune", 250, 4)
    .add("Smoke rune", 30, 4)
    .add("Chaos rune", 175, 4)
    .add("Blood rune", 50, 4)
    .add("Monkfish", 3, 8)
    .add("Shark", 1, 8)
    .add("Prayer potion(4)", 1, 8)
    .add("Anchovy pizza", 8, 4)
    .add("Coins", [499, 3998], 18)
    .add("Grimy lantadyme", 4, 8)
    .add("Ring of life", 1, 7)
    .add("Chaos talisman", 1, 6)
    .add("Wine of zamorak", 10, 6)
    .add((0, util_1.itemTupleToTable)([
    ["Uncut emerald", 6],
    ["Uncut sapphire", 4],
]), 1, 5)
    .add("Sinister key", 1, 4)
    .add("Pure essence", 250, 2)
    .add(RareDropTable_1.default, 1, 4)
    .add(RareDropTable_1.GemTable, 1, 4);
exports.default = new SimpleMonster_1.default({
    id: 6619,
    name: "Chaos Fanatic",
    table: ChaosFanaticTable,
    aliases: ["chaos fanatic", "fanatic"],
});
