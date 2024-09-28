"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const TwistedBanshee_1 = require("../low/t-z/TwistedBanshee");
const ScreamingTwistedBansheeTable = new LootTable_1.default()
    .every(TwistedBanshee_1.TwistedBansheePreTable, 3)
    .tertiary(13, "Clue scroll (hard)")
    .tertiary(367, "Mist battlestaff")
    .tertiary(368, "Dust battlestaff")
    .tertiary(1286, "Eternal gem")
    .tertiary(1286, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7391,
    name: "Screaming twisted banshee",
    table: ScreamingTwistedBansheeTable,
    aliases: ["screaming twisted banshee"],
});
