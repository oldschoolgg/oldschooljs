"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesertWolfTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.DesertWolfTable = new LootTable_1.default().every("Wolf bones");
exports.default = new SimpleMonster_1.default({
    id: 4649,
    name: "Desert Wolf",
    table: exports.DesertWolfTable,
    aliases: ["desert wolf"],
});
