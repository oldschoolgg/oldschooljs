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
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const util_1 = require("../../../util");
const GWRareDropTable_1 = __importStar(require("../../subtables/GWRareDropTable"));
const KreearraArmorTable = new LootTable_1.default().add("Armadyl helmet").add("Armadyl chestplate").add("Armadyl chainskirt");
const MinionUniqueTable = new LootTable_1.default().add("Coins", [1000, 1100], 124).add(KreearraArmorTable, 1, 3);
const MinionShardTable = new LootTable_1.default().add("Coins", [1000, 1100], 9).add(GWRareDropTable_1.ShardTable, 1, 3);
const MinionTable = new LootTable_1.default()
    .every("Bones")
    .every("Feather", [1, 11])
    .add(MinionUniqueTable, 1, 1)
    .add(MinionShardTable, 1, 1)
    .add("Steel dart", [91, 101], 8)
    .add("Smoke rune", [10, 15], 8)
    .add("Manta ray", 2, 8)
    .add("Mushroom potato", 3, 8)
    .add("Steel arrow", [91, 101], 7)
    .add("Coins", [1000, 1100], 70)
    .add("Crushed nest", 2, 8)
    .add("Grimy kwuarm", 1, 8)
    .tertiary(128, "Clue scroll (hard)");
const UniqueTable = new LootTable_1.default()
    .add(KreearraArmorTable, 1, 4)
    .add(GWRareDropTable_1.ShardTable, 1, 2)
    .add("Armadyl hilt")
    .add("Coins", [20_500, 21_000], 5);
const KreearraTable = new LootTable_1.default()
    .every("Big bones")
    .every(MinionTable, 3)
    .every("Feather", [1, 16])
    .add(UniqueTable, 1, 3)
    .tertiary(250, "Clue scroll (elite)")
    .tertiary(400, "Long bone")
    .tertiary(5000, "Pet kree'arra")
    .tertiary(5013, "Curved bone")
    .add("Black d'hide body", 1, 8)
    .add("Rune crossbow", 1, 8)
    .add("Mind rune", [586, 601], 8)
    .add("Rune arrow", [100, 105], 8)
    .add("Runite bolts", [20, 25], 8)
    .add("Dragonstone bolts (e)", [5, 10], 8)
    .add("Coins", [19_500, 20_000], 40)
    .add((0, util_1.itemTupleToTable)([
    ["Ranging potion(3)", 3],
    ["Super defence(3)", 3],
]), 1, 8)
    .add("Grimy dwarf weed", [8, 13], 8)
    .add("Dwarf weed seed", 3, 8)
    .add("Crystal key", 1, 1)
    .add("Yew seed", 1, 1)
    .add(GWRareDropTable_1.default, 1, 8)
    .add(GWRareDropTable_1.GWGemTable, 1, 2);
exports.default = new SimpleMonster_1.default({
    id: 3162,
    name: "Kree'arra",
    table: KreearraTable,
    aliases: ["arma", "armadyl", "kree", "kree'arra", "bird person"],
});
