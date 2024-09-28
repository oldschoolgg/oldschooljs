"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const AberrantSpectre_1 = require("../low/a-f/AberrantSpectre");
const AbhorrentSpectreTable = new LootTable_1.default()
    .every(AberrantSpectre_1.AberrantSpectrePreTable, 3)
    .tertiary(13, "Clue scroll (hard)")
    .tertiary(215, "Mist battlestaff")
    .tertiary(215, "Dust battlestaff")
    .tertiary(754, "Eternal gem")
    .tertiary(754, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7402,
    name: "Abhorrent spectre",
    table: AbhorrentSpectreTable,
    aliases: ["abhorrent spectre"],
});
