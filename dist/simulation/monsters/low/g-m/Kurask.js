"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KuraskPreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const RareSeedTable_1 = __importDefault(require("../../../subtables/RareSeedTable"));
exports.KuraskPreTable = new LootTable_1.default({ limit: 124 })
    .add("Mithril kiteshield", 1, 3)
    .add("Rune longsword", 1, 3)
    .add("Adamant platebody", 1, 3)
    .add("Rune axe", 1, 3)
    .oneIn(384, "Leaf-bladed sword")
    .oneIn(512, "Mystic robe top (light)")
    .oneIn(1026, "Leaf-bladed battleaxe")
    .add("Nature rune", 10, 10)
    .add("Nature rune", 15, 7)
    .add("Nature rune", 30, 4)
    .add(HerbDropTable_1.default, 3, 18)
    .add(RareSeedTable_1.default, 1, 15)
    .add("Coins", [2000, 3000], 16)
    .add("Flax", 100, 6)
    .add("White berries", 12, 6)
    .add("Coins", 10_000, 5)
    .add("Big bones", 20, 5)
    .add("Papaya fruit", 10, 4)
    .add("Coconut", 10, 4)
    .add(RareDropTable_1.GemTable, 1, 6);
const KuraskTable = new LootTable_1.default()
    .every("Bones")
    .every(exports.KuraskPreTable)
    .tertiary(128, "Clue scroll (hard)")
    .tertiary(3000, "Kurask head");
exports.default = new SimpleMonster_1.default({
    id: 410,
    name: "Kurask",
    table: KuraskTable,
    aliases: ["kurask"],
});
