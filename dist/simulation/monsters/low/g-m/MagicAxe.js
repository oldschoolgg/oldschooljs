"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagicAxeTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.MagicAxeTable = new LootTable_1.default().every("Iron battleaxe").tertiary(256, "Clue scroll (medium)");
exports.default = new SimpleMonster_1.default({
    id: 2844,
    name: "Magic axe",
    table: exports.MagicAxeTable,
    aliases: ["magic axe"],
});
