"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const DarkBeast_1 = require("../low/a-f/DarkBeast");
const NightBeastTable = new LootTable_1.default()
    .every("Big bones")
    .every(DarkBeast_1.DarkBeastPreTable, 3)
    .tertiary(13, "Clue scroll (hard)")
    .tertiary(120, "Clue scroll (elite)")
    .tertiary(400, "Long bone")
    .tertiary(5013, "Curved bone")
    .tertiary(73, "Mist battlestaff")
    .tertiary(73, "Dust battlestaff")
    .tertiary(255, "Eternal gem")
    .tertiary(254, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7409,
    name: "Night beast",
    table: NightBeastTable,
    aliases: ["night beast"],
});
