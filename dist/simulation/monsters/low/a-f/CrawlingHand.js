"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrawlingHandPreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.CrawlingHandPreTable = new LootTable_1.default()
    .add("Leather gloves", 1, 21)
    .add("Purple gloves", 1, 2)
    .add("Yellow gloves", 1, 2)
    .add("Red gloves", 1, 2)
    .add("Teal gloves", 1, 2)
    .add("Gold ring", 1, 3)
    .add("Sapphire ring", 1, 2)
    .add("Emerald ring", 1, 2)
    .add("Coins", 8, 23)
    .add("Coins", 5, 21)
    .add(RareDropTable_1.GemTable, 2);
const CrawlingHandTable = new LootTable_1.default()
    .every("Bones")
    .tertiary(500, 7975, 1)
    .every(exports.CrawlingHandPreTable);
exports.default = new SimpleMonster_1.default({
    id: 448,
    name: "Crawling Hand",
    table: CrawlingHandTable,
    aliases: ["crawling hand"],
});
