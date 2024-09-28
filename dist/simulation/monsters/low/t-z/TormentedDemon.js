"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const TreeHerbSeedTable_1 = __importDefault(require("../../../subtables/TreeHerbSeedTable"));
const TormentedDemonUniqueTable = new LootTable_1.default().add("Tormented synapse").add("Burning claw");
const TormentedDemonHerbTable = new LootTable_1.default()
    .add("Grimy kwuarm", 1, 10)
    .add("Grimy dwarf weed", 1, 8)
    .add("Grimy cadantine", 1, 8)
    .add("Grimy lantadyme", 1, 6)
    .add("Grimy avantoe", 1, 5)
    .add("Grimy ranarr weed", 1, 4)
    .add("Grimy snapdragon", 1, 4)
    .add("Grimy torstol", 1, 3);
const TormentedDemonBowTable = new LootTable_1.default().add("Magic shortbow (u)", 1, 29).add("Magic longbow (u)", 1, 1);
const TormentedDemonTable = new LootTable_1.default()
    .every("Infernal ashes")
    .oneIn(500, TormentedDemonUniqueTable)
    .add("Rune platebody", 1, 4)
    .add("Dragon dagger", 1, 3)
    .add("Battlestaff", 1, 3)
    .add("Rune kiteshield", 1, 2)
    .add("Chaos rune", [25, 100], 4)
    .add("Rune arrow", [65, 125], 4)
    .add("Soul rune", [50, 75], 2)
    .add("Manta ray", [1, 2], 4)
    .add("Prayer potion(4)", 1, 1)
    .add("Prayer potion(2)", 2, 1)
    .add(new LootTable_1.default(), 1, 5)
    .add(TormentedDemonBowTable, 1, 6)
    .add("Malicious ashes", [2, 3], 2)
    .add("Fire orb", [5, 7], 2)
    .add("Dragon arrowtips", [30, 40], 1)
    .add(TormentedDemonHerbTable, 1, 6)
    .add(TreeHerbSeedTable_1.default, 1, 1)
    .tertiary(12, "Guthixian temple teleport", 2)
    .tertiary(128, "Clue scroll (elite)");
exports.default = new SimpleMonster_1.default({
    id: 13600,
    name: "Tormented Demon",
    table: TormentedDemonTable,
    aliases: ["tormented demon", "td", "tds", "torm", "torm demon"],
});
