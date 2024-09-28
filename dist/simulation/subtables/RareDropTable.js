"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GemTable = void 0;
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const MegaRareTable = new LootTable_1.default({ limit: 128 })
    .add("Rune spear", 1, 8)
    .add("Shield left half", 1, 4)
    .add("Dragon spear", 1, 3);
exports.GemTable = new LootTable_1.default({ limit: 128 })
    .add("Uncut sapphire", 1, 32)
    .add("Uncut emerald", 1, 16)
    .add("Uncut ruby", 1, 8)
    .add(new LootTable_1.default().add("Chaos talisman").add("Nature talisman"), 1, 3)
    .add("Uncut diamond", 1, 2)
    .add("Rune javelin", 5, 1)
    .add("Loop half of key")
    .add("Tooth half of key")
    .add(MegaRareTable);
const RareDropTable = new LootTable_1.default()
    .add("Nature rune", 67, 3)
    .add("Adamant javelin", 20, 2)
    .add("Death rune", 45, 2)
    .add("Law rune", 45, 2)
    .add("Rune arrow", 42, 2)
    .add("Steel arrow", 150, 2)
    .add("Rune 2h sword", 1, 3)
    .add("Rune battleaxe", 1, 3)
    .add("Rune sq shield", 1, 2)
    .add("Dragon med helm", 1, 1)
    .add("Rune kiteshield", 1, 1)
    .add("Coins", 3000, 21)
    .add("Loop half of key", 1, 20)
    .add("Tooth half of key", 1, 20)
    .add("Runite bar", 1, 5)
    .add("Dragonstone", 1, 2)
    .add("Silver ore", 100, 2)
    .add(exports.GemTable, 1, 20)
    .add(MegaRareTable, 1, 15);
exports.default = RareDropTable;
