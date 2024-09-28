"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const Banshee_1 = require("../low/a-f/Banshee");
const ScreamingBansheeTable = new LootTable_1.default()
    .every(Banshee_1.BansheePreTable, 3)
    .tertiary(13, "Clue scroll (easy)")
    .tertiary(368, "Mist battlestaff")
    .tertiary(367, "Dust battlestaff")
    .tertiary(1286, "Eternal gem")
    .tertiary(1286, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7390,
    name: "Screaming banshee",
    table: ScreamingBansheeTable,
    aliases: ["screaming banshee"],
});
