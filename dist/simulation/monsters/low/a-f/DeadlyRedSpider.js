"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeadlyRedSpiderTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.DeadlyRedSpiderTable = new LootTable_1.default({ limit: 128 }).add("Clue scroll (beginner)");
exports.default = new SimpleMonster_1.default({
    id: 3021,
    name: "Deadly red spider",
    table: exports.DeadlyRedSpiderTable,
    aliases: ["deadly red spider"],
});
