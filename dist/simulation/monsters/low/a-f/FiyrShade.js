"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiyrShadeTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.FiyrShadeTable = new LootTable_1.default().every("Fiyr remains");
exports.default = new SimpleMonster_1.default({
    id: 1286,
    name: "Fiyr Shade",
    table: exports.FiyrShadeTable,
    aliases: ["fiyr shade"],
});
