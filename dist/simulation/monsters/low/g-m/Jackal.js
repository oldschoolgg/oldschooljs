"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JackalTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.JackalTable = new LootTable_1.default().every("Bones");
exports.default = new SimpleMonster_1.default({
    id: 4185,
    name: "Jackal",
    table: exports.JackalTable,
    aliases: ["jackal"],
});
