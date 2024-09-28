"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const FixedAllotmentSeedTable_1 = __importDefault(require("../../../subtables/FixedAllotmentSeedTable"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const HillGiantTable = new LootTable_1.default({ limit: 128 })
    .every("Big Bones")
    .tertiary(25, "Ensouled giant head")
    .tertiary(50, "Clue scroll (beginner)")
    .tertiary(400, "Long bone")
    .tertiary(5000, "Giant champion scroll")
    .tertiary(5013, "Curved bone")
    .add("Iron full helm", 1, 5)
    .add("Iron dagger", 1, 4)
    .add("Iron kiteshield", 1, 3)
    .add("Steel longsword", 1, 2)
    .add("Iron arrow", 3, 6)
    .add("Fire rune", 15, 3)
    .add("Water rune", 7, 3)
    .add("Law rune", 2, 3)
    .add("Steel arrow", 10, 2)
    .add("Mind rune", 3, 2)
    .add("Cosmic rune", 2, 2)
    .add("Nature rune", 6, 2)
    .add("Chaos rune", 2, 1)
    .add("Death rune", 2, 1)
    .add("Coins", 38, 14)
    .add("Coins", 52, 10)
    .add("Coins", 15, 8)
    .add("Coins", 8, 6)
    .add("Coins", 88, 2)
    .add(FixedAllotmentSeedTable_1.default, 1, 18)
    .add(HerbDropTable_1.default, 1, 7)
    .add("Limpwurt root", 1, 11)
    .add("Beer", 1, 6)
    .add("Body talisman", 1, 2)
    .add("Giant key", 1, 1)
    .add(RareDropTable_1.GemTable, 1, 3);
exports.default = new SimpleMonster_1.default({
    id: 2098,
    name: "Hill Giant",
    table: HillGiantTable,
    aliases: ["hill giant"],
});
