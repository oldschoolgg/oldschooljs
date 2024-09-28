"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BirdTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.BirdTable = new LootTable_1.default();
exports.default = new SimpleMonster_1.default({
    id: 5240,
    name: "Bird",
    table: exports.BirdTable,
    aliases: ["bird"],
});
