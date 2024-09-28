"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../subtables/RareDropTable");
const RareSeedTable_1 = __importDefault(require("../../subtables/RareSeedTable"));
const TatteredPageTable = new LootTable_1.default()
    .add("Tattered moon page")
    .add("Tattered sun page")
    .add("Tattered temple page");
const HerbTable = new LootTable_1.default()
    .add("Grimy kwuarm", [10, 15], 31)
    .add("Grimy cadantine", [10, 15], 27)
    .add("Grimy dwarf weed", [10, 15], 25)
    .add("Grimy avantoe", [5, 10], 22)
    .add("Grimy lantadyme", [10, 15], 17)
    .add("Grimy ranarr weed", [5, 10], 16)
    .add("Grimy snapdragon", [5, 10], 15)
    .add("Grimy torstol", [5, 10], 12);
const SarachnisTable = new LootTable_1.default()
    .oneIn(192, "Dragon med helm")
    .oneIn(384, "Sarachnis cudgel")
    .add("Battlestaff", [8, 10], 2)
    .add("Rune platebody", 1, 2)
    .add("Rune med helm", 1, 2)
    .add("Rune 2h sword", 1, 2)
    .add("Blood rune", [80, 100], 5)
    .add("Chaos rune", [175, 200], 5)
    .add("Cosmic rune", [125, 150], 5)
    .add("Death rune", [80, 100], 5)
    .add("Soul rune", [80, 100], 5)
    .add("Mithril arrow", [450, 600], 2)
    .add("Mithril bolts", [175, 225], 2)
    .add(HerbTable, 1, 10)
    .add(RareSeedTable_1.default, 3, 2)
    .add("Maple seed", 2, 1)
    .add("Papaya tree seed", 2, 1)
    .add("Yew seed", 1, 1)
    .add("Mithril ore", [60, 90], 6)
    .add("Red dragonhide", [15, 25], 5)
    .add("Uncut sapphire", [20, 30], 4)
    .add("Adamantite ore", [30, 40], 3)
    .add("Uncut emerald", [20, 30], 3)
    .add("Onyx bolt tips", [8, 10], 2)
    .add("Uncut ruby", [20, 30], 2)
    .add("Runite ore", [4, 6], 1)
    .add("Uncut diamond", [20, 30], 1)
    .add("Coins", [17_000, 25_000], 6)
    .add("Dragon bones", [10, 15], 5)
    .add("Egg potato", [5, 8], 5)
    .add("Weapon poison(++)", [4, 6], 2)
    .add("Crystal key", 1, 1)
    .add("Spider carcass", 10, 1)
    .add(RareDropTable_1.GemTable, 1, 1)
    .tertiary(5, TatteredPageTable)
    .tertiary(15, "Grubby key")
    .tertiary(20, "Giant egg sac(full)")
    .tertiary(40, "Clue scroll (hard)")
    .tertiary(60, "Clue scroll (elite)")
    .tertiary(2000, "Jar of eyes")
    .tertiary(3000, "Sraracha");
exports.default = new SimpleMonster_1.default({
    id: 8713,
    name: "Sarachnis",
    table: SarachnisTable,
    aliases: ["sarachnis", "sarac", "sarach", "saracnis"],
});
