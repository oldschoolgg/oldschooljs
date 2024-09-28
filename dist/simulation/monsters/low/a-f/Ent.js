"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const LogTable = new LootTable_1.default()
    .add("Logs", 1, 10)
    .add("Oak logs", 2, 8)
    .add("Willow logs", 2, 6)
    .add("Maple logs", 2, 4)
    .add("Yew logs", 2, 2)
    .add("Magic logs", 2, 1);
exports.EntTable = new LootTable_1.default().tertiary(256, "Bird nest").add(LogTable, 1, 1).add(LogTable, 2, 1);
exports.default = new SimpleMonster_1.default({
    id: 6594,
    name: "Ent",
    table: exports.EntTable,
    aliases: ["ent"],
});
