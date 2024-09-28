"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CockatricePreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.CockatricePreTable = new LootTable_1.default({ limit: 128 })
    .add("Iron sword", 1, 3)
    .add("Steel dagger", 1, 3)
    .add("Iron boots", 1, 1)
    .add("Iron javelin", 1, 1)
    .add("Steel longsword", 1, 1)
    .oneIn(512, "Mystic boots (light)")
    .add("Nature rune", 2, 6)
    .add("Nature rune", 4, 4)
    .add("Law rune", 2, 3)
    .add("Nature rune", 6, 2)
    .add("Water rune", 2, 2)
    .add("Fire rune", 7, 2)
    .add(HerbDropTable_1.default, 1, 10)
    .add("Coins", 15, 16)
    .add("Coins", 5, 12)
    .add("Coins", 28, 12)
    .add("Coins", 62, 4)
    .add("Coins", 42, 3)
    .add("Coins", 1, 1)
    .add("Limpwurt root", 1, 1)
    .add(RareDropTable_1.GemTable, 1, 2);
const CockatriceTable = new LootTable_1.default()
    .every("Bones")
    .every(exports.CockatricePreTable)
    .oneIn(128, "Clue scroll (medium)")
    .oneIn(1000, "Cockatrice head");
exports.default = new SimpleMonster_1.default({
    id: 420,
    name: "Cockatrice",
    table: CockatriceTable,
    aliases: ["cockatrice"],
});
