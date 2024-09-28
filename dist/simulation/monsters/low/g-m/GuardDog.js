"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardDogTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.GuardDogTable = new LootTable_1.default().every("Bones").tertiary(25, "Ensouled dog head", 1);
exports.default = new SimpleMonster_1.default({
    id: 114,
    name: "Guard dog",
    table: exports.GuardDogTable,
    aliases: ["guard dog", "dog", "dogs"],
});
