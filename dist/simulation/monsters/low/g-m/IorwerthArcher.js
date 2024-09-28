"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const RareSeedTable_1 = __importDefault(require("../../../subtables/RareSeedTable"));
const IorwerthArcherTable = new LootTable_1.default()
    .every("Bones")
    .add("Green d'hide body", 1, 4)
    .add("Green d'hide chaps", 1, 3)
    .add("Mithril spear", 1, 2)
    .add("Mithril kiteshield", 1, 1)
    .add("Adamant full helm", 1, 1)
    .add("Rune dagger", 1, 1)
    .add("Water rune", 70, 8)
    .add("Nature rune", 12, 5)
    .add("Law rune", 2, 3)
    .add("Fire rune", 37, 2)
    .add(HerbDropTable_1.default, 1, 15)
    .add(RareSeedTable_1.default, 1, 16)
    .add("Coins", 44, 29)
    .add("Coins", 180, 10)
    .add("Coins", 132, 8)
    .add("Coins", 20, 5)
    .add("Coins", 440, 1)
    .add("Bass", 1, 3)
    .add("Shark", 1, 3)
    .add("Adamantite ore", 1, 2)
    .add("teleport crystal (1)", 1, 1)
    .add(RareDropTable_1.GemTable, 1, 5)
    .tertiary(50, "Ensouled elf head")
    .tertiary(128, "Clue scroll (hard)");
exports.default = new SimpleMonster_1.default({
    id: 3428,
    name: "Iorwerth Archer",
    table: IorwerthArcherTable,
    aliases: ["iorwerth archer"],
});
