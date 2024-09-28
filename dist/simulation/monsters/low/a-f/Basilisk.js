"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasiliskPreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.BasiliskPreTable = new LootTable_1.default()
    .add("Mithril axe", 1, 3)
    .add("Steel battleaxe", 1, 3)
    .add("Mithril spear", 1, 2)
    .add("Adamant full helm", 1, 1)
    .add("Mithril kiteshield", 1, 1)
    .add("Rune dagger", 1, 1)
    .oneIn(512, "Mystic hat (light)")
    .add("Water rune", 75, 8)
    .add("Nature rune", 15, 5)
    .add("Law rune", 3, 3)
    .add("Nature rune", 37, 1)
    .add(HerbDropTable_1.default, 1, 35)
    .add("Adamantite ore", 1, 3)
    .add("Coins", 44, 29)
    .add("Coins", 200, 17)
    .add("Coins", 132, 5)
    .add("Coins", 11, 5)
    .add("Coins", 440, 1)
    .add(RareDropTable_1.GemTable, 1, 5);
const BasiliskTable = new LootTable_1.default()
    .every("Bones")
    .every(exports.BasiliskPreTable)
    .tertiary(2000, "Basilisk head");
exports.default = new SimpleMonster_1.default({
    id: 417,
    name: "Basilisk",
    table: BasiliskTable,
    aliases: ["basilisk", "basi"],
});
