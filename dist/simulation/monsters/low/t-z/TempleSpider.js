"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TempleSpiderTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const UncommonSeedDropTable_1 = __importDefault(require("../../../subtables/UncommonSeedDropTable"));
const TatteredPageTable = new LootTable_1.default()
    .add("Tattered moon page")
    .add("Tattered sun page")
    .add("Tattered temple page");
exports.TempleSpiderTable = new LootTable_1.default()
    .tertiary(30, TatteredPageTable)
    .tertiary(100, "Grubby key")
    .tertiary(200, "Clue scroll (hard)")
    .add("Adamant longsword", 1, 4)
    .add("Adamant med helm", 1, 4)
    .add("Rune dagger", 1, 1)
    .add("Rune med helm", 1, 1)
    .add("Air rune", [30, 50], 5)
    .add("Earth rune", [30, 50], 5)
    .add("Fire rune", [30, 50], 5)
    .add("Water rune", [30, 50], 5)
    .add("Chaos rune", [10, 15], 2)
    .add("Cosmic rune", [10, 15], 2)
    .add("Death rune", [10, 15], 2)
    .add("Nature rune", [10, 15], 2)
    .add("Law rune", 5, 1)
    .add("Soul rune", 5, 1)
    .add(HerbDropTable_1.default, 1, 15)
    .add(UncommonSeedDropTable_1.default, 1, 6)
    .add("Coins", [400, 600], 17)
    .add("Red spiders' eggs", [3, 5], 8)
    .add("Superantipoison(2)", 1, 8)
    .add("Weapon poison(+)", 1, 2)
    .add(RareDropTable_1.GemTable, 1, 1);
exports.default = new SimpleMonster_1.default({
    id: 8703,
    name: "Temple Spider",
    table: exports.TempleSpiderTable,
    aliases: ["temple spider"],
});
