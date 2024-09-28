"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TzHaarXil = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const TzHaarXilTable = new LootTable_1.default()
    .oneIn(512, "Toktz-xil-ul", [9, 29])
    .oneIn(512, "Toktz-xil-ak")
    .oneIn(512, "Toktz-xil-ek")
    .oneIn(512, "Obsidian cape")
    .add("Tokkul", [1, 59], 10)
    .add("Uncut sapphire", 2)
    .add("Uncut emerald", 2)
    .add("Uncut ruby", 2)
    .add("Uncut diamond");
exports.TzHaarXil = new SimpleMonster_1.default({
    id: 2168,
    name: "TzHaar-Xil",
    table: TzHaarXilTable,
    aliases: ["tzhaar-xil", "xil"],
});
