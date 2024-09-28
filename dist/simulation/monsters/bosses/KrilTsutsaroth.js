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
const MinionUniqueTable = new LootTable_1.default().add("Coins", [1300, 1400], 124).add("Zamorakian spear", 1, 3);
const MinionShardTable = new LootTable_1.default().add("Coins", [1300, 1400], 9).add(GWRareDropTable_1.ShardTable, 1, 3);
const MinionTable = new LootTable_1.default()
    .every("Malicious ashes")
    .add(MinionUniqueTable, 1, 1)
    .add(MinionShardTable, 1, 1)
    .add("Steel dart", [95, 100], 8)
    .add("Death rune", [5, 10], 8)
    .add("Blood rune", [5, 10], 8)
    .add("Steel arrow", [95, 100], 7)
    .add("Coins", [1300, 1400], 66)
    .add("Shark", 3, 8)
    .add("Tuna potato", 2, 8)
    .add("Wine of zamorak", [5, 10], 8)
    .add("Super attack(3)", 1, 2)
    .add("Super strength(3)", 1, 2)
    .tertiary(128, "Clue scroll (hard)");
const ZaklnGritchMinionTable = new LootTable_1.default({ limit: 5000 })
    .every(MinionTable)
    .add("Lesser demon champion scroll", 1, 1);
const UniqueTable = new LootTable_1.default()
    .add("Steam battlestaff", 1, 4)
    .add("Zamorakian spear", 1, 4)
    .add("Staff of the dead")
    .add("Zamorak hilt")
    .add(GWRareDropTable_1.ShardTable, 1, 2);
const KrilTsutsarothTable = new LootTable_1.default()
    .every("Infernal ashes")
    .every(MinionTable, 2)
    .every(ZaklnGritchMinionTable)
    .add(UniqueTable, 1, 3)
    .tertiary(250, "Clue scroll (elite)")
    .tertiary(5000, "Pet k'ril tsutsaroth")
    .add("Adamant arrow(p++)", [295, 300], 8)
    .add("Rune scimitar", 1, 8)
    .add("Adamant platebody", 1, 8)
    .add("Rune platelegs", 1, 7)
    .add("Dragon dagger(p++)", 1, 2)
    .add((0, util_1.itemTupleToTable)([
    ["Super attack(3)", 3],
    ["Super strength(3)", 3],
]), 1, 8)
    .add((0, util_1.itemTupleToTable)([
    ["Super restore(3)", 3],
    ["Zamorak brew(3)", 3],
]), 1, 8)
    .add("Coins", [19_500, 20_000], 33)
    .add("Grimy lantadyme", 10, 8)
    .add("Lantadyme seed", 3, 8)
    .add("Death rune", [120, 125], 8)
    .add("Blood rune", [80, 85], 8)
    .add(GWRareDropTable_1.default, 1, 8)
    .add(GWRareDropTable_1.GWGemTable, 1, 2);
exports.default = new SimpleMonster_1.default({
    id: 3129,
    name: "K'ril Tsutsaroth",
    table: KrilTsutsarothTable,
    aliases: ["kril", "zammy", "zamorak", "k'ril tsutsaroth"],
});
