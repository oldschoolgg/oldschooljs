"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const util_1 = require("../../../util");
const HerbDropTable_1 = __importDefault(require("../../subtables/HerbDropTable"));
const UncommonSeedDropTable_1 = __importDefault(require("../../subtables/UncommonSeedDropTable"));
const ChaosTable = new LootTable_1.default().add("Chaos rune", 100, 1).add("Chaos rune", 200, 1);
const BryophytaTable = new LootTable_1.default()
    .every("Big bones")
    .every("Clue scroll (beginner)")
    .add("Rune longsword", 1, 6)
    .add("Rune med helm", 2, 6)
    .add("Rune chainbody", 1, 6)
    .add("Rune plateskirt", 1, 6)
    .add("Rune platelegs", 1, 6)
    .add("Rune sq shield", 1, 6)
    .add("Rune sword", 2, 5)
    .add("Adamant platebody", 5, 3)
    .add("Battlestaff", 3, 3)
    .add("Adamant kiteshield", 3, 1)
    .add("Nature rune", 100, 8)
    .add("Cosmic rune", 100, 6)
    .add("Law rune", 100, 6)
    .add(ChaosTable, 1, 6)
    .add("Death rune", 100, 5)
    .add("Blood rune", 100, 1)
    .add("Adamant arrow", 100, 1)
    .add(HerbDropTable_1.default, 1, 5)
    .add(UncommonSeedDropTable_1.default, 1, 6)
    .add("Runite bar", 2, 6)
    .add((0, util_1.itemTupleToTable)([
    ["Uncut ruby", 5],
    ["Uncut diamond", 5],
]), 1, 4)
    .add("Steel bar", 25, 3)
    .add("Coins", 10_000, 5)
    .add("Coins", 8000, 2)
    .add("Bryophyta's essence", 1, 1)
    .tertiary(16, "Mossy key", 1, { freeze: true })
    .tertiary(400, "Long bone")
    .tertiary(5000, "Giant champion scroll")
    .tertiary(5013, "Curved bone");
exports.default = new SimpleMonster_1.default({
    id: 8195,
    name: "Bryophyta",
    table: BryophytaTable,
    aliases: ["bryophyta"],
});
