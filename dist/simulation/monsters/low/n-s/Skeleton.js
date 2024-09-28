"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkeletonTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.SkeletonTable = new LootTable_1.default({ limit: 128 })
    .every("Bones")
    .tertiary(5000, "Skeleton champion scroll")
    .tertiary(100, "Clue scroll (beginner)")
    .add("Bronze arrow", 2, 7)
    .add("Bronze arrow", 5, 4)
    .add("Iron arrow", 1, 4)
    .add("Air rune", 12, 2)
    .add("Earth rune", 3, 2)
    .add("Fire rune", 2, 2)
    .add("Chaos rune", 3, 2)
    .add("Nature rune", 3, 1)
    .add("Steel arrow", 1, 1)
    .add(HerbDropTable_1.default, 1, 21)
    .add("Coins", 2, 18)
    .add("Coins", 12, 15)
    .add("Coins", 4, 7)
    .add("Coins", 16, 4)
    .add("Coins", 25, 4)
    .add("Coins", 33, 4)
    .add("Coins", 48, 1)
    .add("Iron dagger", 1, 6)
    .add("Fire talisman", 1, 2)
    .add("Grain", 1, 1)
    .add("Iron ore", 1, 1)
    .add(RareDropTable_1.GemTable);
exports.default = new SimpleMonster_1.default({
    id: 70,
    name: "Skeleton",
    table: exports.SkeletonTable,
    aliases: ["skeleton"],
});
