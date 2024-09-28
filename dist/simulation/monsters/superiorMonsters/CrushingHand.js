"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const CrawlingHand_1 = require("../low/a-f/CrawlingHand");
const CrushingHandTable = new LootTable_1.default()
    .every("Bones")
    .tertiary(500, "Crawling hand", 1)
    .every(CrawlingHand_1.CrawlingHandPreTable, 3)
    .tertiary(391, "Mist battlestaff")
    .tertiary(391, "Dust battlestaff")
    .tertiary(1370, "Eternal gem")
    .tertiary(1370, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7388,
    name: "Crushing hand",
    table: CrushingHandTable,
    aliases: ["crushing hand"],
});
