"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const AviansieTable = new LootTable_1.default({ limit: 128 })
    .every("Bones")
    .every("Feather", [1, 6])
    .add("Air rune", 15, 18)
    .add("Water rune", 30, 13)
    .add("Law rune", 2, 4)
    .add("Nature rune", 9, 4)
    .add("Chaos rune", 3, 3)
    .add("Body rune", 12, 2)
    .add("Blood rune", 11, 2)
    .add("Mind rune", 5, 1)
    .add("Chaos rune", 16, 1)
    .add(HerbDropTable_1.default, 1, 15)
    .add("Adamantite bar", 4, 30)
    .add("Silver ore", 1, 10)
    .add("Runite limbs", 1, 1)
    .add("Rune dagger(p+)", 1, 11)
    .add("Antipoison(3)", 5, 5)
    .add("Swordfish", 5, 2)
    .add(RareDropTable_1.GemTable, 1, 3)
    .tertiary(35, "Ensouled aviansie head")
    .tertiary(128, "Clue scroll (hard)");
exports.default = new SimpleMonster_1.default({
    id: 3169,
    name: "Aviansie",
    table: AviansieTable,
    aliases: ["aviansie", "avi"],
});
