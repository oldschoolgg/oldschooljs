"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const ShadowWarriorTable = new LootTable_1.default({ limit: 128 })
    .add("Adamant spear", 1, 1)
    .add("Black dagger(p)", 1, 1)
    .add("Black knife", 1, 1)
    .add("Black longsword", 1, 1)
    .add("Black robe", 1, 1)
    .add("Cosmic rune", 3, 9)
    .add("Blood rune", 2, 6)
    .add("Air rune", 45, 4)
    .add("Death rune", 2, 4)
    .add(HerbDropTable_1.default, 1, 18)
    .add("Coins", 8, 47)
    .add("Mithril bar", 1, 4)
    .add("Weapon poison", 1, 1)
    .add(RareDropTable_1.GemTable, 1, 8);
exports.default = new SimpleMonster_1.default({
    id: 2853,
    name: "Shadow warrior",
    table: ShadowWarriorTable,
    aliases: ["shadow warrior"],
});
