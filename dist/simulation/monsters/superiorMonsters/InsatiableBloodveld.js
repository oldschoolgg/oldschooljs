"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const Bloodveld_1 = require("../low/a-f/Bloodveld");
const InsatiableBloodveldTable = new LootTable_1.default()
    .every("Vile ashes")
    .every("Ensouled bloodveld head")
    .every(Bloodveld_1.BloodveldPreTable, 3)
    .tertiary(26, "Clue scroll (hard)")
    .tertiary(256, "Mist battlestaff")
    .tertiary(255, "Dust battlestaff")
    .tertiary(894, "Eternal gem")
    .tertiary(895, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7397,
    name: "Insatiable Bloodveld",
    table: InsatiableBloodveldTable,
    aliases: ["insatiable bloodveld"],
});
