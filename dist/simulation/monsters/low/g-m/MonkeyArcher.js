"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonkeyArcherTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.MonkeyArcherTable = new LootTable_1.default().every("Monkey bones").tertiary(35, "Ensouled monkey head");
exports.default = new SimpleMonster_1.default({
    id: 5272,
    name: "Monkey Archer",
    table: exports.MonkeyArcherTable,
    aliases: ["monkey archer"],
});
