"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const FixedAllotmentSeedTable_1 = __importDefault(require("../../../subtables/FixedAllotmentSeedTable"));
const GuardTable = new LootTable_1.default({ limit: 128 })
    .every("Bones")
    .tertiary(106, "Clue scroll (medium)")
    .add("Iron bolts", [2, 12], 10)
    .add("Steel arrow", 1, 4)
    .add("Bronze arrow", 1, 3)
    .add("Air rune", 6, 2)
    .add("Earth rune", 3, 2)
    .add("Fire rune", 2, 2)
    .add("Blood rune", 1, 1)
    .add("Chaos rune", 1, 1)
    .add("Nature rune", 1, 1)
    .add("Steel arrow", 5, 1)
    .add("Coins", 1, 19)
    .add("Coins", 7, 16)
    .add("Coins", 12, 9)
    .add("Coins", 4, 8)
    .add("Coins", 25, 4)
    .add("Coins", 17, 4)
    .add("Coins", 30, 2)
    .add(FixedAllotmentSeedTable_1.default, 1, 18)
    .add("Iron dagger", 1, 6)
    .add("Body talisman", 1, 4)
    .add("Grain", 1, 1)
    .add("Iron ore", 1, 1);
exports.default = new SimpleMonster_1.default({
    id: 995,
    name: "Guard",
    table: GuardTable,
    pickpocketTable: new LootTable_1.default().add("Coins", 30).tertiary(257_211, "Rocky"),
    aliases: ["guard"],
});
