"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonkeyGuardTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.MonkeyGuardTable = new LootTable_1.default().every("Monkey bones").tertiary(35, "Ensouled monkey head");
exports.default = new SimpleMonster_1.default({
    id: 5271,
    name: "Monkey Guard",
    table: exports.MonkeyGuardTable,
    aliases: ["monkey guard"],
});
