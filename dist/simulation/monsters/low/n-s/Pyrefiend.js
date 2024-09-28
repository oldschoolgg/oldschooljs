"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PyrefiendPreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.PyrefiendPreTable = new LootTable_1.default()
    .add("Steel axe", 1, 4)
    .add("Steel full helm", 1, 4)
    .add("Staff of fire", 1, 3)
    .add("Mithril chainbody", 1, 2)
    .add("Steel boots", 1, 1)
    .add("Adamant med helm", 1, 1)
    .add("Fire rune", 30, 21)
    .add("Fire rune", 60, 8)
    .add("Chaos rune", 12, 5)
    .add("Death rune", 3, 3)
    .add("Coins", 40, 24)
    .add("Coins", 120, 20)
    .add("Coins", 200, 10)
    .add("Coins", 10, 7)
    .add("Coins", 450, 2)
    .add("Gold ore", 1, 8)
    .add("Jug of wine", 1, 2)
    .add(RareDropTable_1.GemTable, 1, 3);
const PyrefiendTable = new LootTable_1.default()
    .every("Fiendish ashes")
    .every(exports.PyrefiendPreTable)
    .tertiary(128, "Clue scroll (medium)");
exports.default = new SimpleMonster_1.default({
    id: 433,
    name: "Pyrefiend",
    table: PyrefiendTable,
    aliases: ["pyrefiend"],
});
