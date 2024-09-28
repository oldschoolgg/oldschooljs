"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const BasiliskKnight_1 = require("../low/a-f/BasiliskKnight");
const BasiliskSentinelTable = new LootTable_1.default()
    .every("Big bones")
    .every(BasiliskKnight_1.BasiliskKnightPreTable, 3)
    .tertiary(19, "Clue scroll (hard)")
    .tertiary(256, "Mystic hat (light)")
    .tertiary(400, "Long bone")
    .tertiary(1000, "Basilisk head")
    .tertiary(1000, "Basilisk jaw")
    .tertiary(5013, "Curved bone")
    .tertiary(215, "Mist battlestaff")
    .tertiary(215, "Dust battlestaff")
    .tertiary(754, "Eternal gem")
    .tertiary(754, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 9258,
    name: "Basilisk Sentinel",
    table: BasiliskSentinelTable,
    aliases: ["basilisk sentinel"],
});
