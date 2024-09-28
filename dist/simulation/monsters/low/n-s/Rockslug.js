"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RockslugTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.RockslugTable = new LootTable_1.default()
    .oneIn(512, "Mystic gloves (light)")
    .add("Earth rune", 5, 30)
    .add("Earth rune", 42, 4)
    .add("Chaos rune", 2, 4)
    .add("Iron ore", 1, 22)
    .add("Coal", 1, 13)
    .add("Tin ore", 1, 8)
    .add("Iron bar", 1, 3)
    .add("Copper ore", 1, 3)
    .add("Bronze bar", 1, 2)
    .add("Mithril ore", 1, 1)
    .add("Dwarven stout", 1, 13)
    .add("Hammer", 4, 10)
    .add(RareDropTable_1.GemTable, 1, 6);
exports.default = new SimpleMonster_1.default({
    id: 421,
    name: "Rockslug",
    table: exports.RockslugTable,
    aliases: ["rockslug"],
});
