"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const Turoth_1 = require("../low/t-z/Turoth");
const SpikedTurothTable = new LootTable_1.default()
    .every("Bones")
    .every(Turoth_1.TurothPreTable, 3)
    .tertiary(13, "Clue scroll (hard)")
    .tertiary(236, "Mist battlestaff")
    .tertiary(236, "Dust battlestaff")
    .tertiary(825, "Eternal gem")
    .tertiary(826, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 10_397,
    name: "Spiked Turoth",
    table: SpikedTurothTable,
    aliases: ["spiked turoth"],
});
