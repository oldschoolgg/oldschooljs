"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const SmokeDevil_1 = require("../low/n-s/SmokeDevil");
const NuclearSmokeDevilTable = new LootTable_1.default()
    .every("Ashes")
    .every(SmokeDevil_1.SmokeDevilPreTable, 3)
    .tertiary(13, "Clue scroll (hard)")
    .tertiary(75, "Clue scroll (elite)")
    .tertiary(57, "Mist battlestaff")
    .tertiary(57, "Dust battlestaff")
    .tertiary(198, "Eternal gem")
    .tertiary(198, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7406,
    name: "Nuclear smoke devil",
    table: NuclearSmokeDevilTable,
    aliases: ["nuclear smoke devil"],
});
