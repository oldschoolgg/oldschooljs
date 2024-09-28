"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotedHerbTable = void 0;
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
exports.NotedHerbTable = new LootTable_1.default()
    .add("Grimy kwuarm", 1, 5)
    .add("Grimy cadantine", 1, 4)
    .add("Grimy dwarf weed", 1, 4)
    .add("Grimy lantadyme", 1, 3);
