"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GhostTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.GhostTable = new LootTable_1.default().tertiary(90, "Clue scroll (beginner)", 1);
exports.default = new SimpleMonster_1.default({
    id: 85,
    name: "Ghost",
    table: exports.GhostTable,
    aliases: ["ghost"],
});
