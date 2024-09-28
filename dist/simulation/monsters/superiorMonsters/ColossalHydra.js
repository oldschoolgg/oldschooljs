"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const Hydra_1 = require("../low/g-m/Hydra");
const ColossalHydraTable = new LootTable_1.default()
    .every("Hydra bones")
    .every(Hydra_1.HydraPreTable, 3)
    .tertiary(13, "Clue scroll (hard)")
    .tertiary(51, "Clue scroll (elite)")
    .tertiary(46, "Mist battlestaff")
    .tertiary(46, "Dust battlestaff")
    .tertiary(160, "Eternal gem")
    .tertiary(160, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 10_402,
    name: "Colossal Hydra",
    table: ColossalHydraTable,
    aliases: ["colossal hydra"],
});
