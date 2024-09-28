"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const FeverSpiderTable = new LootTable_1.default({ limit: 120 }).add("Grimy kwuarm", 10);
exports.default = new SimpleMonster_1.default({
    id: 626,
    name: "Fever spider",
    table: FeverSpiderTable,
    aliases: ["fever spider"],
});
