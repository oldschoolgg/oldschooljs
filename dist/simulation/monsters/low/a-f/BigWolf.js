"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigWolfTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.BigWolfTable = new LootTable_1.default().every("Wolf bones");
exports.default = new SimpleMonster_1.default({
    id: 115,
    name: "Big Wolf",
    table: exports.BigWolfTable,
    aliases: ["big wolf"],
});
