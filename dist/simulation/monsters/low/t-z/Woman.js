"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const ManWomanTable_1 = __importDefault(require("../../../subtables/ManWomanTable"));
exports.default = new SimpleMonster_1.default({
    id: 1119,
    name: "Woman",
    table: ManWomanTable_1.default,
    pickpocketTable: new LootTable_1.default().add("Coins", 3).tertiary(257_211, "Rocky"),
    aliases: ["women", "woman"],
});
