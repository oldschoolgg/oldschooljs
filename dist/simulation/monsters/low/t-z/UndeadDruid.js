"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UndeadDruidTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const UncommonSeedDropTable_1 = __importDefault(require("../../../subtables/UncommonSeedDropTable"));
const TatteredPageTable = new LootTable_1.default()
    .add("Tattered moon page")
    .add("Tattered sun page")
    .add("Tattered temple page");
const HerbHerbDropTable = new LootTable_1.default().add(HerbDropTable_1.default, 1, 1).add(HerbDropTable_1.default, 2, 1).add(HerbDropTable_1.default, 3, 1);
exports.UndeadDruidTable = new LootTable_1.default()
    .every("Bones")
    .tertiary(30, TatteredPageTable)
    .tertiary(75, "Grubby key")
    .tertiary(100, "Clue scroll (hard)")
    .tertiary(5000, "Zombie champion scroll")
    .add("Air battlestaff", 1, 2)
    .add("Earth battlestaff", 1, 2)
    .oneIn(1000, "Mask of ranul")
    .add("Air rune", [200, 300], 5)
    .add("Earth rune", [200, 300], 5)
    .add("Blood rune", [20, 30], 3)
    .add("Chaos rune", [50, 80], 3)
    .add("Cosmic rune", [20, 30], 3)
    .add("Death rune", [20, 30], 3)
    .add("Nature rune", [20, 30], 3)
    .add("Mud rune", [30, 70], 3)
    .add("Law rune", [10, 20], 2)
    .add(HerbHerbDropTable, 1, 22)
    .add(UncommonSeedDropTable_1.default, 1, 12)
    .add("Eye of newt", [25, 30], 2)
    .add("Potato cactus", [10, 15], 2)
    .add("White berries", [10, 15], 2)
    .add("Wine of zamorak", [5, 8], 2)
    .add("Coins", [1000, 5000], 6)
    .add("Amulet of defence", 1, 5)
    .add("Amulet of magic", 1, 5)
    .add("Amulet of strength", 1, 5)
    .add(RareDropTable_1.GemTable, 1, 1);
exports.default = new SimpleMonster_1.default({
    id: 2145,
    name: "Undead Druid",
    table: exports.UndeadDruidTable,
    aliases: ["undead druid"],
});
