"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleshCrawlerTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.FleshCrawlerTable = new LootTable_1.default()
    .add("Body rune", [3, 12], 17)
    .add("Dust rune", [3, 9], 4)
    .add("Fire rune", 42, 2)
    .add("Nature rune", 5, 2)
    .add(HerbDropTable_1.default, 1, 17)
    .add("Coins", [5, 84], 7)
    .add("Iron ore", 1, 5)
    .add("Iron ore", [3, 10], 5)
    .add("Ashes", 1, 4)
    .add("Bottom of sceptre", 1, 3)
    .add("Silver bar", 1, 1)
    .add(RareDropTable_1.GemTable, 1, 2);
exports.default = new SimpleMonster_1.default({
    id: 2498,
    name: "Flesh Crawler",
    table: exports.FleshCrawlerTable,
    aliases: ["flesh crawler"],
});
