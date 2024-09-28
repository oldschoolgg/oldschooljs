"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const WyvernHerbTable = new LootTable_1.default()
    .add("Grimy kwuarm", 2, 260)
    .add("Grimy cadantine", 2, 208)
    .add("Grimy dwarf weed", 2, 208)
    .add("Grimy ranarr weed", 1, 185)
    .add("Grimy torstol", 1, 185)
    .add("Grimy lantadyme", 2, 155);
exports.default = WyvernHerbTable;
