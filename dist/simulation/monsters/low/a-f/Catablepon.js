"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatableponTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const FixedAllotmentSeedTable_1 = __importDefault(require("../../../subtables/FixedAllotmentSeedTable"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.CatableponTable = new LootTable_1.default()
    .every("Bones")
    .add("Adamant med helm", 1, 1)
    .add("Fire rune", 15, 7)
    .add("Water rune", 7, 6)
    .add("Law rune", 2, 4)
    .add("Mithril arrow", [5, 14], 4)
    .add("Cosmic rune", 2, 3)
    .add("Chaos rune", 7, 1)
    .add(HerbDropTable_1.default, 1, 3)
    .add(FixedAllotmentSeedTable_1.default, 1, 1)
    .add("Eye of newt", 1, 7)
    .add("Pure essence", 15, 5)
    .add("Coal", [3, 7], 2)
    .add("Coins", 44, 12)
    .add("Coins", [5, 104], 10)
    .add("Coins", 15, 6)
    .add("Unlit torch", 1, 9)
    .add("Top of sceptre", 1, 3)
    .add("Trout", 1, 2)
    .add(RareDropTable_1.GemTable, 1, 2)
    .tertiary(101, "Clue scroll (medium)");
exports.default = new SimpleMonster_1.default({
    id: 2475,
    name: "Catablepon",
    table: exports.CatableponTable,
    aliases: ["catablepon"],
});
