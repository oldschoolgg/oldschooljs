"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const InfernalMage_1 = require("../low/g-m/InfernalMage");
const MalevolentMageTable = new LootTable_1.default()
    .every("Bones")
    .every(InfernalMage_1.InfernalMagePreTable, 3)
    .tertiary(274, "Mist battlestaff")
    .tertiary(275, "Dust battlestaff")
    .tertiary(960, "Eternal gem")
    .tertiary(960, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7396,
    name: "Malevolent Mage",
    table: MalevolentMageTable,
    aliases: ["malevolent mage"],
});
