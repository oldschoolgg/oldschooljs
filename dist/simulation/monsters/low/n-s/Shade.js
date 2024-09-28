"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadeTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.ShadeTable = new LootTable_1.default({ limit: 4 }).add("Shade robe top", 1, 1).add("Shade robe", 1, 1);
exports.default = new SimpleMonster_1.default({
    id: 5633,
    name: "Shade",
    table: exports.ShadeTable,
    aliases: ["shade"],
});
