"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaveCrawlerTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const VariableAllotmentSeedTable_1 = __importDefault(require("../../../subtables/VariableAllotmentSeedTable"));
exports.CaveCrawlerTable = new LootTable_1.default({ limit: 128 })
    .add("Bronze boots")
    .add("Nature rune", [3, 4], 6)
    .add("Fire rune", 12, 5)
    .add("Earth rune", 9, 2)
    .add(VariableAllotmentSeedTable_1.default, 1, 26)
    .add(HerbDropTable_1.default, 1, 22)
    .add(RareDropTable_1.GemTable)
    .add("Coins", 3, 5)
    .add("Coins", 8, 3)
    .add("Coins", 29, 3)
    .add("Coins", 10, 1)
    .add("Vial of water", 1, 13)
    .add("White berries", 1, 5)
    .add("Unicorn horn dust", 1, 2)
    .add("Eye of newt")
    .add("Red spiders' eggs")
    .add("Limpwurt root")
    .add("Snape grass");
exports.default = new SimpleMonster_1.default({
    id: 406,
    name: "Cave Crawler",
    table: exports.CaveCrawlerTable,
    aliases: ["cave crawler"],
});
