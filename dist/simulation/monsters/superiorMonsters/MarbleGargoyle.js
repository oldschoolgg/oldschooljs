"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const Gargoyle_1 = require("../low/g-m/Gargoyle");
const MarbleGargoyleTable = new LootTable_1.default()
    .every(Gargoyle_1.GargoylePreTable, 3)
    .tertiary(13, "Clue scroll (hard)")
    .tertiary(148, "Mist battlestaff")
    .tertiary(148, "Dust battlestaff")
    .tertiary(519, "Eternal gem")
    .tertiary(518, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7407,
    name: "Marble gargoyle",
    table: MarbleGargoyleTable,
    aliases: ["marble gargoyle"],
});
