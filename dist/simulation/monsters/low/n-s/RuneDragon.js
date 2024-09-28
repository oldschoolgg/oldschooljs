"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = __importDefault(require("../../../subtables/RareDropTable"));
const UsefulHerbTable_1 = __importDefault(require("../../../subtables/UsefulHerbTable"));
const RuneDragonTable = new LootTable_1.default()
    .every("Dragon bones")
    .every("Runite bar")
    .add("Rune platebody", 1, 9)
    .add("Rune longsword", 1, 8)
    .add("Rune mace", 1, 7)
    .add("Rune scimitar", 1, 7)
    .add("Rune warhammer", 1, 7)
    .add("Rune platelegs", 1, 6)
    .add("Dragon platelegs", 1, 1)
    .add("Dragon plateskirt", 1, 1)
    .add("Dragon med helm", 1, 1)
    .add("Rune arrow", [30, 40], 8)
    .add("Wrath rune", [30, 50], 8)
    .add("Chaos rune", [75, 150], 7)
    .add("Death rune", [50, 100], 7)
    .add(UsefulHerbTable_1.default, 1, 8)
    .add("Rune javelin heads", [20, 30], 10)
    .add("Runite bolts (unf)", [20, 30], 11)
    .add("Dragonstone", 1, 7)
    .add("Runite ore", [2, 5], 6)
    .add("Dragon javelin heads", [30, 40], 5)
    .add("Dragon bolts (unf)", [20, 40], 1)
    .add("Wrath talisman", 1, 1)
    .add(RareDropTable_1.default, 1, 1)
    .tertiary(300, "Clue scroll (elite)")
    .tertiary(800, "Dragon limbs")
    .tertiary(5000, "Dragon metal lump")
    .tertiary(8000, "Draconic visage");
exports.default = new SimpleMonster_1.default({
    id: 8031,
    name: "Rune Dragon",
    table: RuneDragonTable,
    aliases: ["rune dragon"],
});
