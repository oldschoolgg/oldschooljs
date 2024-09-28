"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const CaveHorror_1 = require("../low/a-f/CaveHorror");
const CaveAbominationTable = new LootTable_1.default()
    .every("Big bones")
    .every("Ensouled horror head")
    .every(CaveHorror_1.CaveHorrorPreTable, 3)
    .tertiary(13, "Clue scroll (hard)")
    .tertiary(400, "Long bone")
    .tertiary(5013, "Curved bone")
    .tertiary(224, "Mist battlestaff")
    .tertiary(223, "Dust battlestaff")
    .tertiary(783, "Eternal gem")
    .tertiary(783, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7401,
    name: "Cave abomination",
    table: CaveAbominationTable,
    aliases: ["cave abomination"],
});
