"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const AbyssalDemon_1 = require("../low/a-f/AbyssalDemon");
const GreaterAbyssalDemonTable = new LootTable_1.default()
    .every("Abyssal ashes")
    .every("Ensouled abyssal head")
    .every(AbyssalDemon_1.AbyssalDemonPreTable, 3)
    .tertiary(13, "Clue scroll (hard)")
    .tertiary(120, "Clue scroll (elite)")
    .tertiary(6000, "Abyssal head")
    .tertiary(99, "Mist battlestaff")
    .tertiary(99, "Dust battlestaff")
    .tertiary(346, "Eternal gem")
    .tertiary(345, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7410,
    name: "Greater abyssal demon",
    table: GreaterAbyssalDemonTable,
    aliases: ["greater abyssal demon"],
});
