"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobstrosityTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const NotedHerbTable_1 = require("../../../subtables/NotedHerbTable");
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const RareSeedTable_1 = __importDefault(require("../../../subtables/RareSeedTable"));
const UncommonSeedDropTable_1 = __importDefault(require("../../../subtables/UncommonSeedDropTable"));
exports.LobstrosityTable = new LootTable_1.default()
    .every("Raw lobster")
    .add("Water rune", 100, 8)
    .add("Chaos rune", 20, 8)
    .add("Nature rune", 10, 6)
    .add("Death rune", 10, 5)
    .add(NotedHerbTable_1.NotedHerbTable, 2, 11)
    .add(HerbDropTable_1.default, 2, 14)
    .add(UncommonSeedDropTable_1.default, 2, 4)
    .add(RareSeedTable_1.default, 1, 5)
    .add("Seaweed spore", 5, 6)
    .add("Coins", 1000, 9)
    .add("Pufferfish", 1, 8)
    .add("Giant seaweed", 6, 8)
    .add("Seaweed", 6, 8)
    .add("Toad's legs", 2, 6)
    .add("Caviar", 2, 5)
    .add("Oyster pearls", 1, 4)
    .add(RareDropTable_1.GemTable, 1, 3)
    .tertiary(4, "Numulite", [5, 14])
    .tertiary(70, "Unidentified small fossil")
    .tertiary(128, "Clue scroll (easy)")
    .tertiary(140, "Unidentified medium fossil")
    .tertiary(175, "Unidentified large fossil")
    .tertiary(700, "Unidentified rare fossil");
exports.default = new SimpleMonster_1.default({
    id: 7796,
    name: "Lobstrosity",
    table: exports.LobstrosityTable,
    aliases: ["lobstrosity"],
});
