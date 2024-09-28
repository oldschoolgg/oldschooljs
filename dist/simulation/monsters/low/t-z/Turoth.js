"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurothPreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const RareSeedTable_1 = __importDefault(require("../../../subtables/RareSeedTable"));
const TurothHerbTable = new LootTable_1.default().add(HerbDropTable_1.default, 1, 15).add(HerbDropTable_1.default, 2, 10).add(HerbDropTable_1.default, 3, 6);
exports.TurothPreTable = new LootTable_1.default({ limit: 128 })
    .add("Steel platelegs", 1, 7)
    .add("Mithril axe", 1, 3)
    .add("Mithril kiteshield", 1, 1)
    .add("Adamant full helm", 1, 1)
    .add("Rune dagger", 1, 1)
    .oneIn(500, "Leaf-bladed sword")
    .oneIn(512, "Mystic robe bottom (light)")
    .add("Law rune", 3, 6)
    .add("Nature rune", 15, 5)
    .add("Nature rune", 37, 1)
    .add(TurothHerbTable, 1, 31)
    .add(RareSeedTable_1.default, 1, 18)
    .add("Limpwurt root", 1, 7)
    .add("Coins", 44, 29)
    .add("Coins", 132, 12)
    .add("Coins", 440, 1)
    .add(RareDropTable_1.GemTable, 1, 5);
const TurothTable = new LootTable_1.default()
    .every("Bones")
    .every(exports.TurothPreTable)
    .tertiary(128, "Clue scroll (hard)");
exports.default = new SimpleMonster_1.default({
    id: 426,
    name: "Turoth",
    table: TurothTable,
    aliases: ["turoth"],
});
