"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const Kurask_1 = require("../low/g-m/Kurask");
const KingKuraskTable = new LootTable_1.default()
    .every("Bones")
    .every(Kurask_1.KuraskPreTable, 3)
    .tertiary(13, "Clue scroll (hard)")
    .tertiary(3000, "Kurask head")
    .tertiary(171, "Mist battlestaff")
    .tertiary(172, "Dust battlestaff")
    .tertiary(600, "Eternal gem")
    .tertiary(600, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7405,
    name: "King kurask",
    table: KingKuraskTable,
    aliases: ["king kurask"],
});
