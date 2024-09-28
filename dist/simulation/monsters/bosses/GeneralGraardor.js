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
const GWRareDropTable_1 = __importStar(require("../../subtables/GWRareDropTable"));
const GeneralGraardorArmorTable = new LootTable_1.default().add("Bandos chestplate").add("Bandos tassets").add("Bandos boots");
const MinionUniqueTable = new LootTable_1.default().add("Coins", [1400, 1500], 124).add(GeneralGraardorArmorTable, 1, 3);
const MinionShardTable = new LootTable_1.default().add("Coins", [1400, 1500], 9).add(GWRareDropTable_1.ShardTable, 1, 3);
const MinionTable = new LootTable_1.default()
    .every("Bones")
    .add(MinionUniqueTable, 1, 1)
    .add(MinionShardTable, 1, 1)
    .add("Steel dart", [95, 100], 8)
    .add("Nature rune", [15, 20], 8)
    .add("Cosmic rune", [25, 30], 8)
    .add("Shark", 2, 8)
    .add("Chilli potato", 3, 8)
    .add("Steel arrow", [95, 100], 7)
    .add("Coins", [1400, 1500], 66)
    .add("Limpwurt root", 5, 8)
    .add("Combat potion(3)", 1, 2)
    .add("Super strength(3)", 1, 2)
    .tertiary(128, "Clue scroll (hard)")
    .tertiary(5000, "Goblin champion scroll");
const StrongsackMinionTable = new LootTable_1.default({ limit: 6 }).every(MinionTable).add("Kebab", 1, 1);
const SteelwillMinionTable = new LootTable_1.default({ limit: 6 }).every(MinionTable).add("Beer", 1, 1);
const GrimspikeMinionTable = new LootTable_1.default({ limit: 6 }).every(MinionTable).add("Right eye patch", 1, 1);
const UniqueTable = new LootTable_1.default()
    .add(GeneralGraardorArmorTable, 1, 4)
    .add(GWRareDropTable_1.ShardTable, 1, 2)
    .add("Bandos hilt")
    .add("Coins", [20_100, 20_600], 5);
const GeneralGraardorTable = new LootTable_1.default()
    .every("Big bones")
    .every(StrongsackMinionTable)
    .every(SteelwillMinionTable)
    .every(GrimspikeMinionTable)
    .add(UniqueTable, 1, 3)
    .tertiary(250, "Clue scroll (elite)")
    .tertiary(400, "Long bone")
    .tertiary(5000, "Pet general graardor")
    .tertiary(5013, "Curved bone")
    .add("Rune longsword", 1, 8)
    .add("Rune 2h sword", 1, 8)
    .add("Rune platebody", 1, 8)
    .add("Rune pickaxe", 1, 6)
    .add("Coins", [19_500, 20_000], 28)
    .add("Grimy snapdragon", 3, 8)
    .add("Snapdragon seed", 1, 8)
    .add("Super restore(4)", 3, 8)
    .add("Adamantite ore", [15, 20], 8)
    .add("Coal", [115, 120], 8)
    .add("Magic logs", [15, 20], 8)
    .add("Nature rune", [65, 70], 8)
    .add(GWRareDropTable_1.default, 1, 8)
    .add(GWRareDropTable_1.GWGemTable, 1, 2);
exports.default = new SimpleMonster_1.default({
    id: 2215,
    name: "General Graardor",
    table: GeneralGraardorTable,
    aliases: ["graardor", "bandos", "general graardor"],
});
