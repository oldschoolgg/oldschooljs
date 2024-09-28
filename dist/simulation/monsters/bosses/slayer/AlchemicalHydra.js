"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const util_1 = require("../../../../util");
const RareDropTable_1 = __importDefault(require("../../../subtables/RareDropTable"));
const TreeHerbSeedTable_1 = __importDefault(require("../../../subtables/TreeHerbSeedTable"));
const AlchemicalHydraBrimstoneRingTable = new LootTable_1.default().add("Hydra's eye").add("Hydra's fang").add("Hydra's heart");
const RuneArmourTable = new LootTable_1.default().every("Rune platebody").add("Rune platelegs").add("Rune plateskirt");
const NotedHerbsTable = new LootTable_1.default()
    .add("Grimy avantoe", [10, 15], 4)
    .add("Grimy kwuarm", [25, 30], 4)
    .add("Grimy ranarr weed", [10, 15], 3)
    .add("Grimy snapdragon", [25, 30], 3)
    .add("Grimy cadantine", [25, 30], 3)
    .add("Grimy dwarf weed", [25, 30], 3)
    .add("Grimy lantadyme", [25, 30], 2)
    .add("Grimy torstol", [10, 15], 2);
const NormalTable = new LootTable_1.default()
    .every("Hydra bones")
    .add((0, util_1.itemTupleToTable)([
    ["Mystic fire staff", 1],
    ["Mystic water staff", 1],
]), 1, 8)
    .add(RuneArmourTable, 1, 6)
    .add("Battlestaff", [8, 12], 5)
    .add("Black d'hide body", 1, 5)
    .add("Dragon longsword", 1, 3)
    .add("Dragon med helm", 1, 3)
    .add("Dragon battleaxe", 1, 2)
    .add((0, util_1.itemTupleToTable)([
    ["Mystic robe top (light)", 1],
    ["Mystic robe bottom (light)", 1],
]), 1, 1)
    .add("Chaos rune", [150, 300], 6)
    .add("Death rune", [150, 300], 6)
    .add("Blood rune", [150, 300], 6)
    .add("Astral rune", [150, 300], 6)
    .add("Dragonstone bolts (e)", [100, 120], 2)
    .add("Onyx bolts (e)", [35, 50], 1)
    .add(NotedHerbsTable, 1, 10)
    .add(TreeHerbSeedTable_1.default, 1, 2)
    .add("Coins", [40_000, 60_000], 10)
    .add("Shark", [2, 4], 7)
    .add((0, util_1.itemTupleToTable)([
    ["Ranging potion(3)", 1],
    ["Super restore(3)", 2],
]), 1, 7)
    .add("Dragon bones", 30, 6)
    .add("Crystal key", 1, 1)
    .oneIn(202, "Coins", [5550, 25_550])
    .add(RareDropTable_1.default, 1, 1);
const NormalUniqueTable = new LootTable_1.default()
    .every(NormalTable)
    .oneIn(2000, "Dragon thrownaxe", [500, 1000])
    .oneIn(2000, "Dragon knife", [500, 1000])
    .oneIn(1000, "Hydra's claw")
    .oneIn(512, "Hydra tail")
    .oneIn(512, "Hydra leather")
    .oneIn(180, AlchemicalHydraBrimstoneRingTable);
const AlchemicalHydraTable = new LootTable_1.default()
    .every(NormalUniqueTable)
    .every(NormalTable)
    .tertiary(100, "Clue scroll (hard)")
    .tertiary(256, "Alchemical hydra heads")
    .tertiary(256, "Clue scroll (elite)")
    .tertiary(2000, "Jar of chemicals")
    .tertiary(3000, "Ikkle hydra");
exports.default = new SimpleMonster_1.default({
    id: 8615,
    name: "Alchemical Hydra",
    table: AlchemicalHydraTable,
    aliases: ["alchemical hydra", "hydra boss"],
});
