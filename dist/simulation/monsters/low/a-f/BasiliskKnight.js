"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasiliskKnightPreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const UsefulHerbTable_1 = __importDefault(require("../../../subtables/UsefulHerbTable"));
exports.BasiliskKnightPreTable = new LootTable_1.default({ limit: 52 })
    .add("Rune axe", 1, 2)
    .add("Adamant platelegs", 1, 1)
    .add("Adamant kiteshield", 1, 1)
    .add("Rune battleaxe", 1, 1)
    .add("Rune dagger", 1, 1)
    .add("Rune scimitar", 1, 1)
    .add("Rune spear", 1, 1)
    .add("Rune med helm", 1, 1)
    .add("Astral rune", [15, 35], 6)
    .add("Nature rune", [15, 30], 6)
    .add("Law rune", [20, 30], 6)
    .add("Death rune", [10, 25], 3)
    .add("Blood rune", [8, 20], 3)
    .add(UsefulHerbTable_1.default, 1, 3)
    .add("Coins", [500, 2498], 7)
    .add("Adamantite ore", [1, 2], 1)
    .add(RareDropTable_1.GemTable, 1, 8);
const BasiliskKnightTable = new LootTable_1.default()
    .every("Big bones")
    .every(exports.BasiliskKnightPreTable)
    .tertiary(192, "Clue scroll (hard)")
    .tertiary(256, "Mystic hat (light)")
    .tertiary(400, "Long bone")
    .tertiary(1000, "Basilisk head")
    .tertiary(5000, "Basilisk jaw")
    .tertiary(5013, "Curved bone");
const BasiliskKnightOnTaskTable = new LootTable_1.default()
    .every("Big bones")
    .every(exports.BasiliskKnightPreTable)
    .tertiary(192, "Clue scroll (hard)")
    .tertiary(256, "Mystic hat (light)")
    .tertiary(400, "Long bone")
    .tertiary(1000, "Basilisk head")
    .tertiary(1000, "Basilisk jaw")
    .tertiary(5013, "Curved bone");
exports.default = new SimpleMonster_1.default({
    id: 9293,
    name: "Basilisk Knight",
    table: BasiliskKnightTable,
    onTaskTable: BasiliskKnightOnTaskTable,
    aliases: ["basilisk knight", "bas knight"],
});
