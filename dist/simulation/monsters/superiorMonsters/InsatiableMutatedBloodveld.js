"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const MutatedBloodveld_1 = require("../low/g-m/MutatedBloodveld");
const InsatiableMutatedBloodveldTable = new LootTable_1.default()
    .every("Vile ashes")
    .every("Ensouled bloodveld head")
    .every(MutatedBloodveld_1.MutatedBloodveldPreTable, 3)
    .tertiary(13, "Clue scroll (hard)")
    .tertiary(255, "Mist battlestaff")
    .tertiary(256, "Dust battlestaff")
    .tertiary(895, "Eternal gem")
    .tertiary(894, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7398,
    name: "Insatiable mutated Bloodveld",
    table: InsatiableMutatedBloodveldTable,
    aliases: ["insatiable mutated bloodveld"],
});
