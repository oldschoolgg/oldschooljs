"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GargoylePreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.GargoylePreTable = new LootTable_1.default()
    .oneIn(256, "Granite maul")
    .oneIn(512, "Mystic robe top (dark)")
    .add("Adamant platelegs", 1, 4)
    .add("Rune full helm", 1, 3)
    .add("Rune 2h sword", 1, 2)
    .add("Adamant boots", 1, 1)
    .add("Rune battleaxe", 1, 1)
    .add("Rune platelegs", 1, 1)
    .add("Fire rune", 75, 10)
    .add("Chaos rune", 30, 8)
    .add("Fire rune", 150, 6)
    .add("Death rune", 15, 5)
    .add("Gold ore", [10, 20], 10)
    .add("Pure essence", 150, 6)
    .add("Steel bar", 15, 6)
    .add("Gold bar", [10, 15], 3)
    .add("Mithril bar", 15, 2)
    .add("Runite ore", 1, 2)
    .add("Coins", [400, 800], 28)
    .add("Coins", [500, 1000], 20)
    .add("Coins", 10_000, 5)
    .add(RareDropTable_1.GemTable, 1, 5);
const GargoyleTable = new LootTable_1.default()
    .every(exports.GargoylePreTable)
    .tertiary(128, "Clue scroll (hard)");
const GargoyleOnTaskTable = new LootTable_1.default()
    .every(GargoyleTable)
    .tertiary(150, "Brittle key");
exports.default = new SimpleMonster_1.default({
    id: 412,
    name: "Gargoyle",
    table: GargoyleTable,
    onTaskTable: GargoyleOnTaskTable,
    aliases: ["gargoyle", "garg", "gargs"],
});
