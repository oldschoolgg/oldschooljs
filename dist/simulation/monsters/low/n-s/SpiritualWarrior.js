"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const SpiritualWarriorTable = new LootTable_1.default({ limit: 127 })
    .add("Steel longsword", 1, 15)
    .add("Mithril spear(p)", 1, 9)
    .add("Iron scimitar", 1, 8)
    .add("Mithril axe", 1, 8)
    .add("Steel sword", 1, 7)
    .add("Mithril mace", 1, 7)
    .add("Black warhammer", 1, 5)
    .add("Iron sword", 1, 3)
    .add("Black dagger", 1, 2)
    .add("Adamant battleaxe", 1, 2)
    .add("Adamant 2h sword", 1, 1)
    .add("Rune longsword", 1, 1)
    .add("Rune halberd", 1, 1)
    .add("Steel chainbody", 1, 18)
    .add("Mithril platelegs", 1, 11)
    .add("Leather gloves", 1, 9)
    .add("Adamant full helm", 1, 8)
    .add("Iron plateskirt", 1, 4)
    .add("Black kiteshield", 1, 3)
    .add("Rune kiteshield", 1, 1)
    .add(RareDropTable_1.GemTable, 1, 4)
    .tertiary(128, "Clue scroll (hard)");
exports.default = new SimpleMonster_1.default({
    id: 2210,
    name: "Spiritual Warrior",
    table: SpiritualWarriorTable,
    aliases: ["spiritual warrior"],
});
