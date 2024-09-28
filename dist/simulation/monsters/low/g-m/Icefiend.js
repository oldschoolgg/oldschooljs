"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IcefiendTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.IcefiendTable = new LootTable_1.default({ limit: 128 })
    .tertiary(128, "Clue scroll (easy)")
    .add("Water rune", [1, 5], 4)
    .add("Air rune", [1, 5], 1)
    .add("Coins", [1, 30], 4)
    .add("Coins", [1, 20], 4)
    .add(RareDropTable_1.GemTable, 1, 3);
exports.default = new SimpleMonster_1.default({
    id: 3140,
    name: "Icefiend",
    table: exports.IcefiendTable,
    aliases: ["icefiend"],
});
