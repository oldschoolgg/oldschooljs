"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaveBugTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
exports.CaveBugTable = new LootTable_1.default({ limit: 128 })
    .add("Water rune", 8, 5)
    .add("Nature rune", 1, 5)
    .add("Earth rune", 6, 2)
    .add("Nature rune", 2, 1)
    .add(HerbDropTable_1.default, 1, 24)
    .add("Unicorn horn dust", 1, 2)
    .add("Eye of newt", 1, 2)
    .add("Red spiders' eggs", 1, 2)
    .add("Limpwurt root", 1, 1)
    .add("Snape grass", 1, 1)
    .add("Coins", 3, 8)
    .add("Coins", 8, 3)
    .add("Candle", 1, 5)
    .add("Tinderbox", 1, 3)
    .add("Empty candle lantern", 1, 1);
exports.default = new SimpleMonster_1.default({
    id: 481,
    name: "Cave Bug",
    table: exports.CaveBugTable,
    aliases: ["cave bug"],
});
