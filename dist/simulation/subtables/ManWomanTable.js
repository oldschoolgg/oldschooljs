"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const HerbDropTable_1 = __importDefault(require("./HerbDropTable"));
exports.default = new LootTable_1.default({ limit: 128 })
    .every("Bones")
    .add("Bronze med helm", 1, 2)
    .add("Iron dagger", 1)
    .add("Bronze bolts", [2, 12], 22)
    .add("Bronze arrow", 7, 3)
    .add("Earth rune", 4, 2)
    .add("Fire rune", 6, 2)
    .add("Mind rune", 9, 2)
    .add("Chaos rune", 2, 1)
    .add(HerbDropTable_1.default, 1, 23)
    .add("Coins", 3, 38)
    .add("Coins", 5, 9)
    .add("Coins", 15, 4)
    .add("Coins", 25, 1)
    .add("Fishing bait", 1, 5)
    .add("Copper ore", 1, 2)
    .add("Earth talisman", 1, 2)
    .add("Cabbage", 1, 1)
    .tertiary(90, "Clue scroll (beginner)", 1)
    .tertiary(128, "Clue scroll (easy)", 1);
