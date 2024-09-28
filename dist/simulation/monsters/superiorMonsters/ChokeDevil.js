"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const DustDevil_1 = require("../low/a-f/DustDevil");
const ChokeDevilTable = new LootTable_1.default()
    .every("Bones")
    .every(DustDevil_1.DustDevilPreTable, 3)
    .tertiary(194, "Mist battlestaff")
    .tertiary(194, "Dust battlestaff")
    .tertiary(678, "Eternal gem")
    .tertiary(679, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7404,
    name: "Choke devil",
    table: ChokeDevilTable,
    aliases: ["choke devil"],
});
