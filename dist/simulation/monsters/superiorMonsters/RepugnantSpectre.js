"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const DeviantSpectre_1 = require("../low/a-f/DeviantSpectre");
const RepugnantSpectreTable = new LootTable_1.default()
    .every(DeviantSpectre_1.DeviantSpectrePreTable, 3)
    .tertiary(13, "Clue scroll (hard)")
    .tertiary(512, "Mystic robe bottom (dark)")
    .tertiary(215, "Mist battlestaff")
    .tertiary(215, "Dust battlestaff")
    .tertiary(754, "Eternal gem")
    .tertiary(754, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7403,
    name: "Repugnant spectre",
    table: RepugnantSpectreTable,
    aliases: ["repugnant spectre"],
});
