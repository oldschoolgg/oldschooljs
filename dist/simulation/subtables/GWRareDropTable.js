"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GWGemTable = exports.ShardTable = void 0;
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const GWMegaRareTable = new LootTable_1.default()
    .add("Coins", [19_500, 20_000], 113)
    .add("Rune spear", 1, 8)
    .add("Shield left half", 1, 4)
    .add("Dragon spear", 1, 3);
exports.ShardTable = new LootTable_1.default().add("Godsword shard 1").add("Godsword shard 2").add("Godsword shard 3");
exports.GWGemTable = new LootTable_1.default()
    .add("Coins", [19_500, 20_000], 63)
    .add("Uncut sapphire", 1, 32)
    .add("Uncut emerald", 1, 16)
    .add("Uncut ruby", 1, 8)
    .add("Chaos Talisman", 1, 3)
    .add("Uncut diamond", 1, 2)
    .add("Rune javelin", 5, 1)
    .add("Loop half of key")
    .add("Tooth half of key")
    .add(GWMegaRareTable);
const GWRareDropTable = new LootTable_1.default()
    .add("Nature rune", [62, 67], 3)
    .add("Adamant javelin", [15, 20], 2)
    .add("Death rune", [40, 45], 2)
    .add("Law rune", [40, 45], 2)
    .add("Rune arrow", [38, 43], 2)
    .add("Steel arrow", [145, 150], 2)
    .add("Rune 2h sword", 1, 3)
    .add("Rune battleaxe", 1, 3)
    .add("Rune sq shield", 1, 2)
    .add("Dragon med helm", 1, 1)
    .add("Rune kiteshield", 1, 1)
    .add("Rune sword", 1, 5)
    .add("Coins", [19_500, 20_000], 20)
    .add("Loop half of key", 1, 21)
    .add("Tooth half of key", 1, 20)
    .add("Dragonstone", 1, 2)
    .add("Silver ore", 100, 2)
    .add(exports.GWGemTable, 1, 20)
    .add(GWMegaRareTable, 1, 15);
exports.default = GWRareDropTable;
