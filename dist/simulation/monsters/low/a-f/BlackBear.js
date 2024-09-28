"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackBearTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.BlackBearTable = new LootTable_1.default()
    .every("Bones")
    .every("Bear fur")
    .every("Raw bear meat")
    .tertiary(25, "Ensouled bear head", 1)
    .tertiary(90, "Clue scroll (beginner)", 1);
exports.default = new SimpleMonster_1.default({
    id: 2839,
    name: "Black bear",
    table: exports.BlackBearTable,
    aliases: ["bear", "black bear", "bears"],
});
