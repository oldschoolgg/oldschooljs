"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const OnyxBoltTipTable = new LootTable_1.default().add("Onyx bolt tips", [1, 4], 1).add("Onyx bolt tips", 20, 1);
const TzHaarKetTable = new LootTable_1.default()
    .oneIn(512, "Tzhaar-ket-om")
    .oneIn(512, "Toktz-ket-xil")
    .oneIn(512, "Obsidian cape")
    .oneIn(2000, "Obsidian helmet")
    .oneIn(2000, "Obsidian platebody")
    .oneIn(2000, "Obsidian platelegs")
    .add("Uncut sapphire", 1, 4)
    .add("Uncut emerald", 1, 3)
    .add("Uncut ruby", 1, 3)
    .add("Uncut diamond", 1, 1)
    .add(OnyxBoltTipTable, 1, 1)
    .add("Tokkul", [1, 103], 15)
    .tertiary(35, "Ensouled tzhaar head");
exports.default = new SimpleMonster_1.default({
    id: 2173,
    name: "TzHaar-Ket",
    table: TzHaarKetTable,
    aliases: ["tzhaar-ket", "tzhaar"],
});
