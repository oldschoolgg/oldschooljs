"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.BatTable = new LootTable_1.default().every("Bat bones");
exports.default = new SimpleMonster_1.default({
    id: 2827,
    name: "Bat",
    table: exports.BatTable,
    aliases: ["bat"],
});
