"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const NotedHerbTable_1 = require("../../../subtables/NotedHerbTable");
const RareDropTable_1 = __importDefault(require("../../../subtables/RareDropTable"));
const TreeHerbSeedTable_1 = __importDefault(require("../../../subtables/TreeHerbSeedTable"));
const LizardmanShamanTable = new LootTable_1.default({ limit: 500 })
    .every("Big bones")
    .oneIn(3000, "Dragon Warhammer")
    .add("Rune med helm", 1, 18)
    .add("Earth battlestaff", 1, 17)
    .add("Mystic earth staff", 1, 17)
    .add("Rune warhammer", 1, 16)
    .add("Rune chainbody", 1, 12)
    .add("Red d'hide vambraces", 1, 10)
    .add("Air rune", [60, 80], 25)
    .add("Chaos rune", [40, 60], 25)
    .add("Death rune", [20, 30], 25)
    .add("Fire rune", [60, 80], 25)
    .add("Xerician fabric", 2, 40)
    .add("Coal", [20, 25], 20)
    .add("Iron ore", [30, 35], 20)
    .add("Runite ore", [3, 5], 8)
    .add(NotedHerbTable_1.NotedHerbTable, [2, 3], 45)
    .add(TreeHerbSeedTable_1.default, 1, 10)
    .add("Coins", [100, 6000], 70)
    .add("Lizardman fang", [10, 14], 38)
    .add("Chilli potato", 2, 30)
    .add("Xeric's talisman(inert)", 1, 4)
    .add(RareDropTable_1.default, 1, 20)
    .tertiary(200, "Clue scroll (hard)")
    .tertiary(400, "Long bone")
    .tertiary(1200, "Clue scroll (elite)")
    .tertiary(5013, "Curved bone");
exports.default = new SimpleMonster_1.default({
    id: 6766,
    name: "Lizardman Shaman",
    table: LizardmanShamanTable,
    aliases: ["lizardman shaman", "shaman"],
});
