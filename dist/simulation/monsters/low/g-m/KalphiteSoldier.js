"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const KalphiteSoldierTable = new LootTable_1.default({ limit: 128 })
    .add("Steel full helm", 1, 4)
    .add("Steel axe", 1, 4)
    .add("Steel scimitar", 1, 3)
    .add("Mithril chainbody", 1, 1)
    .add("Mithril sq shield", 1, 1)
    .add("Adamant med helm", 1, 1)
    .add("Fire rune", 60, 8)
    .add("Chaos rune", 12, 5)
    .add("Death rune", 3, 3)
    .add("Nature rune", 1, 2)
    .add("Fire rune", 30, 1)
    .add(HerbDropTable_1.default, 1, 1)
    .add("Coins", 120, 40)
    .add("Coins", 40, 29)
    .add("Coins", 200, 10)
    .add("Coins", 10, 7)
    .add("Coins", 450, 1)
    .add("Waterskin(4)", 1, 3)
    .add(RareDropTable_1.GemTable, 1, 4)
    .tertiary(90, "Ensouled kalphite head");
exports.default = new SimpleMonster_1.default({
    id: 957,
    name: "Kalphite Soldier",
    table: KalphiteSoldierTable,
    aliases: ["kalphite soldier"],
});
