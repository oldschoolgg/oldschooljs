"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwistedBansheePreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const RareSeedTable_1 = __importDefault(require("../../../subtables/RareSeedTable"));
exports.TwistedBansheePreTable = new LootTable_1.default()
    .add("Battlestaff", 1, 10)
    .add("Air battlestaff", 1, 4)
    .add("Adamant mace", 1, 4)
    .add("Rune dagger", 1, 4)
    .add("Rune med helm", 1, 4)
    .add("Adamant kiteshield", 1, 2)
    .add("Rune full helm", 1, 2)
    .add("Mystic gloves (dark)", 1, 1)
    .add("Cosmic rune", 20, 6)
    .add("Air rune", 30, 5)
    .add("Chaos rune", 30, 4)
    .add("Chaos rune", 17, 2)
    .add("Fire rune", 35, 2)
    .add("Pure essence", 65, 42)
    .add("Eye of newt", 1, 2)
    .add("Mithril ore", 1, 2)
    .add("Coins", 130, 18)
    .add("Coins", 35, 14)
    .add("Coins", 260, 14)
    .add("Swordfish", 1, 10)
    .add(HerbDropTable_1.default, 1, 68)
    .add(RareSeedTable_1.default, 1, 26)
    .add(RareDropTable_1.GemTable, 1, 4);
const TwistedBansheeTable = new LootTable_1.default()
    .every(exports.TwistedBansheePreTable)
    .tertiary(128, "Clue scroll (hard)", 1);
exports.default = new SimpleMonster_1.default({
    id: 7272,
    name: "Twisted Banshee",
    table: TwistedBansheeTable,
    aliases: ["twisted banshee"],
});
