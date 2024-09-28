"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const UsefulHerbTable = new LootTable_1.default()
    .add("Grimy avantoe", 1, 5)
    .add("Grimy snapdragon", 1, 4)
    .add("Grimy ranarr weed", 1, 4)
    .add("Grimy torstol", 1, 3);
exports.default = UsefulHerbTable;
