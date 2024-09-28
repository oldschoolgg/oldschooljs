"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const Rockslug_1 = require("../low/n-s/Rockslug");
const GiantRockslugTable = new LootTable_1.default()
    .every(Rockslug_1.RockslugTable, 3)
    .tertiary(354, "Mist battlestaff")
    .tertiary(354, "Dust battlestaff")
    .tertiary(1240, "Eternal gem")
    .tertiary(1240, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7392,
    name: "Giant rockslug",
    table: GiantRockslugTable,
    aliases: ["giant rockslug"],
});
