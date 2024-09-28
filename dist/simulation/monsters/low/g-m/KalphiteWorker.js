"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const KalphiteWorkerTable = new LootTable_1.default()
    .add("Iron sword", 1, 3)
    .add("Steel dagger", 1, 3)
    .add("Hardleather body", 1, 2)
    .add("Iron javelin", 5, 1)
    .add("Steel longsword", 1, 1)
    .add("Law rune", 2, 3)
    .add("Body rune", 6, 2)
    .add("Chaos rune", 3, 2)
    .add("Fire rune", 7, 2)
    .add("Water rune", 2, 2)
    .add("Nature rune", 4, 2)
    .add("Cosmic rune", 2, 1)
    .add(HerbDropTable_1.default, 1, 7)
    .add("Coins", 15, 34)
    .add("Coins", 5, 12)
    .add("Coins", 28, 12)
    .add("Coins", 1, 8)
    .add("Coins", 62, 4)
    .add("Coins", 42, 3)
    .add("Waterskin(4)", 1, 21)
    .add(RareDropTable_1.GemTable, 1, 2)
    .tertiary(250, "Ensouled kalphite head");
exports.default = new SimpleMonster_1.default({
    id: 955,
    name: "Kalphite Worker",
    table: KalphiteWorkerTable,
    aliases: ["kalphite worker", "kalphite"],
});
