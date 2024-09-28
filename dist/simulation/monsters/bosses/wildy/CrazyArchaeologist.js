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
const CrazyArchaeologistUniqueTable = new LootTable_1.default().add("Odium shard 2").add("Malediction shard 2");
const CrazyArchaeologistTable = new LootTable_1.default()
    .every("Bones")
    .tertiary(128, "Clue scroll (hard)")
    .add(CrazyArchaeologistUniqueTable, 1, 1)
    .add("Amulet of power", 1, 7)
    .add("Rune crossbow", 2, 5)
    .add("Red d'hide body", 1, 4)
    .add("Rune knife", 10, 4)
    .add("Mud rune", 30, 4)
    .add("Cannonball", 150, 4)
    .add("Dragon arrow", 75, 1)
    .add("Shark", 1, 8)
    .add("Potato with cheese", 3, 8)
    .add("Prayer potion(4)", 1, 8)
    .add("Anchovy pizza", 8, 4)
    .add("Coins", [499, 3998], 18)
    .add("Grimy dwarf weed", 4, 8)
    .add("White berries", 10, 6)
    .add("Silver ore", 40, 6)
    .add((0, util_1.itemTupleToTable)([
    ["Uncut emerald", 6],
    ["Uncut sapphire", 4],
]), 1, 5)
    .add("Red dragonhide", 10, 5)
    .add("Rusty sword", 1, 4)
    .add("Muddy key", 1, 4)
    .add("Onyx bolt tips", 12, 4)
    .add("Long bone", 1, 2)
    .add("Fedora", 1, 1)
    .add(RareDropTable_1.default, 1, 4)
    .add(RareDropTable_1.GemTable, 1, 4);
exports.default = new SimpleMonster_1.default({
    id: 6618,
    name: "Crazy Archaeologist",
    table: CrazyArchaeologistTable,
    aliases: ["crazy arch", "crazy archaeologist"],
});
