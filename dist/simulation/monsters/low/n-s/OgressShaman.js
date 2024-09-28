"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const UncommonSeedDropTable_1 = __importDefault(require("../../../subtables/UncommonSeedDropTable"));
const OgressShamanTable = new LootTable_1.default()
    .every("Big bones")
    .add("Mithril kiteshield", 1, 7)
    .add("Mithril arrow", [5, 15], 7)
    .add("Chaos rune", [15, 30], 7)
    .add("Law rune", [8, 15], 7)
    .add("Nature rune", [8, 15], 7)
    .add("Death rune", [8, 15], 6)
    .add("Air rune", [10, 20], 5)
    .add("Cosmic rune", [10, 15], 5)
    .add("Earth rune", [10, 20], 5)
    .add("Fire rune", [10, 20], 5)
    .add("Mind rune", [10, 20], 5)
    .add("Water rune", [10, 20], 5)
    .add("Steel arrow", [10, 30], 5)
    .add("Iron arrow", [20, 40], 5)
    .add(UncommonSeedDropTable_1.default, 1, 5)
    .add("Limpwurt root", 1, 5)
    .add("Uncut diamond", 1, 4)
    .add("Uncut emerald", 1, 4)
    .add("Uncut ruby", 1, 4)
    .add("Uncut sapphire", 1, 4)
    .add("Coins", [500, 1000], 9)
    .add(RareDropTable_1.GemTable, 1, 4)
    .tertiary(20, "Salmon", [1, 3])
    .tertiary(30, "Ensouled ogre head")
    .tertiary(40, "Rune med helm")
    .tertiary(100, "Rune full helm")
    .tertiary(100, "Rune battleaxe")
    .tertiary(400, "Long bone")
    .tertiary(1200, "Shaman mask")
    .tertiary(5013, "Curved bone");
exports.default = new SimpleMonster_1.default({
    id: 7991,
    name: "Ogress Shaman",
    table: OgressShamanTable,
    aliases: ["ogress shaman"],
});
