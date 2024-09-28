"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const Drake_1 = require("../low/a-f/Drake");
const GuardianDrakeTable = new LootTable_1.default()
    .every("Drake bones")
    .every(Drake_1.DrakePreTable, 3)
    .tertiary(13, "Clue scroll (hard)")
    .tertiary(104, "Mist battlestaff")
    .tertiary(104, "Dust battlestaff")
    .tertiary(364, "Eternal gem")
    .tertiary(363, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 10_400,
    name: "Guardian Drake",
    table: GuardianDrakeTable,
    aliases: ["guardian drake"],
});
