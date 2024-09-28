"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const Pyrefiend_1 = require("../low/n-s/Pyrefiend");
const FlamingPyrelordTable = new LootTable_1.default()
    .every("Fiendish ashes")
    .every(Pyrefiend_1.PyrefiendPreTable, 3)
    .tertiary(13, "Clue scroll (medium)")
    .tertiary(325, "Mist battlestaff")
    .tertiary(325, "Dust battlestaff")
    .tertiary(1138, "Eternal gem")
    .tertiary(1138, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7394,
    name: "Flaming pyrelord",
    table: FlamingPyrelordTable,
    aliases: ["flaming pyrelord"],
});
