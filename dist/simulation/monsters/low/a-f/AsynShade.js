"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsynShadeTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.AsynShadeTable = new LootTable_1.default().every("Asyn remains");
exports.default = new SimpleMonster_1.default({
    id: 1284,
    name: "Asyn Shade",
    table: exports.AsynShadeTable,
    aliases: ["asyn shade"],
});
