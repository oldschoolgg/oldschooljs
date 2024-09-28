"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const SpiritualRangerTable = new LootTable_1.default({ limit: 128 })
    .add("Oak shortbow", 1, 5)
    .add("Maple longbow", 1, 4)
    .add("Steel crossbow", 1, 3)
    .add("Magic shortbow", [1, 2], 1)
    .add("Iron arrow", 12, 15)
    .add("Bronze arrow", 16, 13)
    .add("Mithril arrow(p+)", 1, 11)
    .add("Steel arrow", 12, 4)
    .add("Body rune", 12, 4)
    .add("Adamant arrow(p++)", 3, 3)
    .add("Rune arrow", 5, 2)
    .add("Adamant fire arrow", 4, 2)
    .add("Bronze arrow(p+)", 1, 1)
    .add("Adamant arrow", 12, 1)
    .add("Bow string", 7, 18)
    .add("Iron arrowtips", 5, 11)
    .add("Headless arrow", 12, 10)
    .add("Adamant arrowtips", 13, 9)
    .add("Oak longbow (u)", 12, 9)
    .add("Broken arrow", 1, 1)
    .tertiary(128, "Clue scroll (hard)");
exports.default = new SimpleMonster_1.default({
    id: 2211,
    name: "Spiritual Ranger",
    table: SpiritualRangerTable,
    aliases: ["spiritual ranger", "spiritual creatures"],
});
