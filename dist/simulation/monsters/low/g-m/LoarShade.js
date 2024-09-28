"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoarShadeTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.LoarShadeTable = new LootTable_1.default().every("Loar remains");
exports.default = new SimpleMonster_1.default({
    id: 1277,
    name: "Loar Shade",
    table: exports.LoarShadeTable,
    aliases: ["loar shade"],
});
