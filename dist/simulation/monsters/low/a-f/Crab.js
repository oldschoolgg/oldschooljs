"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrabTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const freshCrabTable = new LootTable_1.default().add("Fresh crab claw", 1, 1).add("Fresh crab shell", 1, 1);
exports.CrabTable = new LootTable_1.default()
    .every("Crab meat")
    .add(new LootTable_1.default(), 5, 1)
    .add(freshCrabTable, 4, 1)
    .add("Oyster", 1, 1);
exports.default = new SimpleMonster_1.default({
    id: 4819,
    name: "Crab",
    table: exports.CrabTable,
    aliases: ["crab"],
});
