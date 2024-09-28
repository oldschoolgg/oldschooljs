"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChickenTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.ChickenTable = new LootTable_1.default({ limit: 4 })
    .every("Bones")
    .every("Raw chicken")
    .add("Feather", 5, 2)
    .add("Feather", 15, 1)
    .tertiary(300, "Clue scroll (beginner)");
exports.default = new SimpleMonster_1.default({
    id: 3316,
    name: "Chicken",
    table: exports.ChickenTable,
    aliases: ["chicken"],
});
