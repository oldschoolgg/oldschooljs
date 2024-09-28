"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const Jelly_1 = require("../low/g-m/Jelly");
const VitreousJellyTable = new LootTable_1.default()
    .every(Jelly_1.JellyPreTable, 3)
    .tertiary(13, "Clue scroll (hard)")
    .tertiary(248, "Mist battlestaff")
    .tertiary(248, "Dust battlestaff")
    .tertiary(867, "Eternal gem")
    .tertiary(867, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7399,
    name: "Vitreous Jelly",
    table: VitreousJellyTable,
    aliases: ["vitreous jelly"],
});
