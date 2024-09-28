"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZombieTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
exports.ZombieTable = new LootTable_1.default({ limit: 128 })
    .every("Bones")
    .tertiary(5000, "Zombie champion scroll")
    .add("Bronze med helm", 1, 4)
    .add("Bronze longsword")
    .add("Iron axe")
    .add("Iron arrow", 5, 7)
    .add("Body rune", 6, 5)
    .add("Mind rune", 5, 5)
    .add("Air rune", 13, 4)
    .add("Iron arrow", 8, 4)
    .add("Steel arrow", 5, 2)
    .add("Nature rune", 6, 1)
    .add("Coins", 10, 11)
    .add("Coins", 4, 4)
    .add("Coins", 18, 3)
    .add("Coins", 13, 2)
    .add("Coins", 28, 2)
    .add("Fishing bait", 5, 37)
    .add("Copper ore", 1, 2)
    .add(HerbDropTable_1.default, 1, 25);
exports.default = new SimpleMonster_1.default({
    id: 26,
    name: "Zombie",
    table: exports.ZombieTable,
    aliases: ["zombie"],
});
