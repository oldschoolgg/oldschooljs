"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const CaveCrawler_1 = require("../low/a-f/CaveCrawler");
const ChasmCrawlerTable = new LootTable_1.default()
    .every(CaveCrawler_1.CaveCrawlerTable, 3)
    .tertiary(380, "Mist battlestaff")
    .tertiary(380, "Dust battlestaff")
    .tertiary(1330, "Eternal gem")
    .tertiary(1330, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7389,
    name: "Chasm Crawler",
    table: ChasmCrawlerTable,
    aliases: ["chasm crawler"],
});
