"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoisonScorpionTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.PoisonScorpionTable = new LootTable_1.default()
    .tertiary(25, "Ensouled scorpion head")
    .tertiary(100, "Clue scroll (beginner)");
exports.default = new SimpleMonster_1.default({
    id: 3025,
    name: "Poison Scorpion",
    table: exports.PoisonScorpionTable,
    aliases: ["poison scorpion"],
});
