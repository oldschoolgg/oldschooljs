"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriffRabbit = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.PriffRabbit = new LootTable_1.default().every("Crystal grail");
exports.default = new SimpleMonster_1.default({
    id: 9118,
    name: "Rabbit",
    table: exports.PriffRabbit,
    aliases: ["rabbit"],
});
