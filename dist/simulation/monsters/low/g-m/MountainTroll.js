"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const CommonSeedDropTable_1 = __importDefault(require("../../../subtables/CommonSeedDropTable"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const MountainTrollTable = new LootTable_1.default({ limit: 128 })
    .every("Big bones")
    .add("Steel med helm", 1, 4)
    .add("Black warhammer", 1, 3)
    .add("Steel warhammer", 1, 3)
    .add("Adamant med helm", 1, 1)
    .add("Adamant warhammer", 1, 1)
    .add("Mithril sq shield", 1, 1)
    .add("Earth rune", 60, 8)
    .add("Nature rune", 7, 5)
    .add("Law rune", 2, 3)
    .add("Earth rune", 45, 1)
    .add("Earth rune", 25, 1)
    .add(HerbDropTable_1.default, 1, 15)
    .add(CommonSeedDropTable_1.default, 1, 19)
    .add("Coins", 35, 29)
    .add("Coins", 100, 10)
    .add("Coins", 8, 7)
    .add("Coins", 50, 6)
    .add("Coins", 250, 1)
    .add("Coal", 3, 3)
    .add("Raw mackerel", 3, 2)
    .add(RareDropTable_1.GemTable, 1, 5)
    .tertiary(45, "Ensouled troll head")
    .tertiary(400, "Long bone")
    .tertiary(5013, "Curved bone");
exports.default = new SimpleMonster_1.default({
    id: 936,
    name: "Mountain Troll",
    table: MountainTrollTable,
    aliases: ["mountain troll", "troll", "trolls"],
});
