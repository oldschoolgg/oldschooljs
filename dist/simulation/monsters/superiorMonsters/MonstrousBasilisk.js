"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const Basilisk_1 = require("../low/a-f/Basilisk");
const MonstrousBasiliskTable = new LootTable_1.default()
    .every("Bones")
    .every(Basilisk_1.BasiliskPreTable, 3)
    .tertiary(2000, "Basilisk head")
    .tertiary(292, "Mist battlestaff")
    .tertiary(292, "Dust battlestaff")
    .tertiary(1022, "Eternal gem")
    .tertiary(1022, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7395,
    name: "Monstrous basilisk",
    table: MonstrousBasiliskTable,
    aliases: ["monstrous basilisk"],
});
