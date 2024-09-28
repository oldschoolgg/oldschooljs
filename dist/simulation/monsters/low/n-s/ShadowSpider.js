"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowSpiderTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.ShadowSpiderTable = new LootTable_1.default().tertiary(128, "Clue scroll (beginner)");
exports.default = new SimpleMonster_1.default({
    id: 3016,
    name: "Shadow spider",
    table: exports.ShadowSpiderTable,
    aliases: ["shadow spider"],
});
