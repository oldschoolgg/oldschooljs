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
const MinionUniqueTable = new LootTable_1.default().add("Coins", [1400, 1500], 124).add("Saradomin sword", 1, 3);
const MinionShardTable = new LootTable_1.default().add("Coins", [1300, 1400], 9).add(GWRareDropTable_1.ShardTable, 1, 3);
const MinionTable = new LootTable_1.default()
    .every("Bones")
    .add(MinionUniqueTable, 1, 1)
    .add(MinionShardTable, 1, 1)
    .add("Steel arrow", [95, 100], 8)
    .add("Steel dart", [95, 100], 8)
    .add("Law rune", [5, 10], 8)
    .add("Monkfish", 3, 8)
    .add("Summer pie", 1, 8)
    .add("Coins", [1300, 1400], 62)
    .add("Grimy ranarr weed", 1, 8)
    .add("Unicorn horn", 6, 8)
    .add("Snape grass", 5, 7)
    .tertiary(128, "Clue scroll (hard)");
const UniqueTable = new LootTable_1.default()
    .add("Saradomin sword", 1, 4)
    .add("Saradomin's light", 1, 2)
    .add("Armadyl crossbow")
    .add("Saradomin hilt")
    .add(GWRareDropTable_1.ShardTable, 1, 2)
    .add("Coins", [19_500, 20_000], 2);
const CommanderZilyanaTable = new LootTable_1.default()
    .every("Bones")
    .every(MinionTable, 3)
    .add(UniqueTable, 1, 3)
    .tertiary(250, "Clue scroll (elite)")
    .tertiary(5000, "Pet zilyana")
    .add("Adamant platebody", 1, 8)
    .add("Rune dart", [35, 40], 8)
    .add("Rune kiteshield", 1, 8)
    .add("Rune plateskirt", 1, 8)
    .add("Prayer potion(4)", 3, 8)
    .add((0, util_1.itemTupleToTable)([
    ["Super defence(3)", 3],
    ["Magic potion(3)", 3],
]), 1, 8)
    .add((0, util_1.itemTupleToTable)([
    ["Saradomin brew(3)", 3],
    ["Super restore(4)", 3],
]), 1, 6)
    .add("Coins", [19_500, 20_000], 27)
    .add("Diamond", 6, 8)
    .add("Law rune", [95, 100], 8)
    .add("Grimy ranarr weed", 5, 8)
    .add("Ranarr seed", 2, 8)
    .add("Magic seed", 1, 1)
    .add(GWRareDropTable_1.default, 1, 8)
    .add(GWRareDropTable_1.GWGemTable, 1, 2);
exports.default = new SimpleMonster_1.default({
    id: 2205,
    name: "Commander Zilyana",
    table: CommanderZilyanaTable,
    aliases: ["sara", "zily", "saradomin", "zilyana", "commander zilyana"],
});
