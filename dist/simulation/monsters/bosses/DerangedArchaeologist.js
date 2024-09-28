"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const RareDropTable_1 = __importDefault(require("../../subtables/RareDropTable"));
const TreeHerbSeedTable_1 = __importDefault(require("../../subtables/TreeHerbSeedTable"));
const RareDropTable_2 = require("./../../subtables/RareDropTable");
const DerangedArchaeologistTable = new LootTable_1.default()
    .every("Bones")
    .add("Black d'hide body", 1, 6)
    .add("Rune sword", 1, 4)
    .add("Rune 2h sword", 1, 3)
    .add("Water rune", 100, 6)
    .add("Mud rune", 40, 6)
    .add("Rune knife", 25, 6)
    .add("Cannonball", 80, 4)
    .add("Dragon arrow", 60, 1)
    .add(TreeHerbSeedTable_1.default, 1, 1)
    .add("Grimy dwarf weed", 4, 8)
    .add("White berries", 10, 7)
    .add("Black dragonhide", 8, 6)
    .add("Gold ore", 10, 6)
    .add("Onyx bolt tips", 6, 6)
    .add("Runite limbs", 1, 5)
    .add("Uncut diamond", 5, 5)
    .add("Prayer potion(3)", 1, 8)
    .add("Potato with cheese", 3, 8)
    .add("Shark", 2, 8)
    .add("Anchovy pizza", 2, 4)
    .add("Crystal key", 1, 7)
    .add("Long bone", 1, 2)
    .add(RareDropTable_1.default, 1, 6)
    .add(RareDropTable_2.GemTable, 1, 6)
    .tertiary(2, "Numulite", [5, 32])
    .tertiary(15, "Unidentified large fossil")
    .tertiary(29, "Unidentified small fossil")
    .tertiary(58, "Unidentified medium fossil")
    .tertiary(200, "Clue scroll (elite)")
    .tertiary(292, "Unidentified rare fossil");
exports.default = new SimpleMonster_1.default({
    id: 7806,
    name: "Deranged Archaeologist",
    table: DerangedArchaeologistTable,
    aliases: ["deranged arch", "deranged archaeologist"],
});
