"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const DagannothSpawnTable = new LootTable_1.default()
    .every("Bones")
    .add("Water rune", 3, 10)
    .add("Raw tuna", 1, 10)
    .add("Raw sardine", 1, 10)
    .add("Raw herring", 1, 5)
    .add("Coins", 16, 10)
    .add("Coins", 25, 10)
    .add("Feather", 2, 38)
    .add("Seaweed", 1, 10)
    .add("Fishing bait", 3, 10)
    .add("Water talisman", 1, 10)
    .add("Oyster pearl", 1, 4)
    .add(RareDropTable_1.GemTable, 1, 1)
    .tertiary(128, "Clue scroll (easy)");
exports.default = new SimpleMonster_1.default({
    id: 3184,
    name: "Dagannoth spawn",
    table: DagannothSpawnTable,
    aliases: ["dagannoth spawn"],
});
