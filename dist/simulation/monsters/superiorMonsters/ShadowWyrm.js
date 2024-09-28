"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const Wyrm_1 = require("../low/t-z/Wyrm");
const ShadowWyrmTable = new LootTable_1.default()
    .every("Wyrm bones")
    .every(Wyrm_1.WyrmPreTable, 3)
    .tertiary(26, "Clue scroll (hard)")
    .tertiary(207, "Mist battlestaff")
    .tertiary(207, "Dust battlestaff")
    .tertiary(724, "Eternal gem")
    .tertiary(724, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 10_398,
    name: "Shadow Wyrm",
    table: ShadowWyrmTable,
    aliases: ["shadow wyrm"],
});
