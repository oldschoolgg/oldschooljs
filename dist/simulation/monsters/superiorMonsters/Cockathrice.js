"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const Cockatrice_1 = require("../low/a-f/Cockatrice");
const CockathriceTable = new LootTable_1.default()
    .every("Bones")
    .every(Cockatrice_1.CockatricePreTable, 3)
    .tertiary(13, "Clue scroll (medium)")
    .tertiary(1000, "Cockatrice head")
    .tertiary(340, "Mist battlestaff")
    .tertiary(340, "Dust battlestaff")
    .tertiary(1190, "Eternal gem")
    .tertiary(1190, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7393,
    name: "Cockathrice",
    table: CockathriceTable,
    aliases: ["cockathrice"],
});
