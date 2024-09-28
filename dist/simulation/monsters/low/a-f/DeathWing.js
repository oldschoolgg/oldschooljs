"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeathWingTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.DeathWingTable = new LootTable_1.default().tertiary(128, "Clue scroll (beginner)");
exports.default = new SimpleMonster_1.default({
    id: 509,
    name: "Death wing",
    table: exports.DeathWingTable,
    aliases: ["death wing"],
});
