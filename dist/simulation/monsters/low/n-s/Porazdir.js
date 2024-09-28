"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PorazdirTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.PorazdirTable = new LootTable_1.default().every("Demon's heart");
exports.default = new SimpleMonster_1.default({
    id: 7860,
    name: "Porazdir",
    table: exports.PorazdirTable,
    aliases: ["porazdir"],
});
