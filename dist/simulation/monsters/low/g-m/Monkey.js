"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonkeyTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.MonkeyTable = new LootTable_1.default().every("Monkey bones").tertiary(35, "Ensouled monkey head");
exports.default = new SimpleMonster_1.default({
    id: 2848,
    name: "Monkey",
    table: exports.MonkeyTable,
    aliases: ["monkey"],
});
