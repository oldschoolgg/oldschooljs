"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = __importDefault(require("../../../subtables/RareDropTable"));
const TalismanTable_1 = __importDefault(require("../../../subtables/TalismanTable"));
const TreeHerbSeedTable_1 = __importDefault(require("../../../subtables/TreeHerbSeedTable"));
const HerbSubTable = new LootTable_1.default()
    .add("Grimy kwuarm", 25, 10)
    .add("Grimy dwarf weed", 25, 9)
    .add("Grimy cadantine", 25, 9)
    .add("Grimy lantadyme", 25, 7);
const AbyssalSireTable = new LootTable_1.default()
    .every("Abyssal ashes")
    .add("Battlestaff", 10, 6)
    .add("Rune full helm", 3, 4)
    .add("Mystic lava staff", 2, 4)
    .add("Rune sword", 3, 4)
    .add("Rune platebody", 2, 4)
    .add("Rune kiteshield", 2, 3)
    .add("Mystic air staff", 2, 2)
    .add("Air battlestaff", 6, 2)
    .add("Blood rune", [190, 210], 5)
    .add("Blood rune", [330, 370], 5)
    .add("Law rune", 250, 5)
    .add("Soul rune", [225, 275], 5)
    .add("Cosmic rune", 350, 4)
    .add("Cannonball", 300, 4)
    .add(HerbSubTable, 1, 5)
    .add(TreeHerbSeedTable_1.default, 2, 5, { multiply: true })
    .add("Coal", [380, 420], 6)
    .add("Earth orb", [47, 53], 5)
    .add("Pure essence", 600, 5)
    .add("Magic logs", [50, 70], 5)
    .add("Uncut diamond", 15, 5)
    .add("Runite ore", 6, 4)
    .add("Onyx bolt tips", 10, 3)
    .add("Runite bar", 5, 2)
    .add(TalismanTable_1.default, 1, 3)
    .add("Coins", [48_000, 52_000], 11)
    .add("Chilli potato", 10, 7)
    .add("Super restore(4)", 4, 5)
    .add("Binding necklace", 25, 4)
    .add("Saradomin brew(3)", 6, 2)
    .add("Jug of water", [250, 350], 2)
    .oneIn(100, "Unsired")
    .add(RareDropTable_1.default, 2, 3, { multiply: true })
    .tertiary(180, "Clue scroll (elite)");
exports.default = new SimpleMonster_1.default({
    id: 5886,
    name: "Abyssal Sire",
    table: AbyssalSireTable,
    aliases: ["abbysal sire", "abby sire", "abyssal sire", "sire", "abyssal demon boss"],
});
