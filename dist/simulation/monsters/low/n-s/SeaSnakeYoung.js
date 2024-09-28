"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const SeaSnakeYoungTable = new LootTable_1.default()
    .every("Big bones")
    .add("Water rune", 15, 2)
    .add("Mist rune", 1, 2)
    .add("Broad arrows", 4, 2)
    .add("Coins", 44, 41)
    .add("Coins", 32, 11)
    .add("Coins", 24, 9)
    .add("Coins", 23, 7)
    .add("Adamant dart tip", 2, 10)
    .add("Fishing bait", 50, 4)
    .add("Pearl bolt tips", 3, 4)
    .add("Raw bass", 2, 4)
    .add("Water orb", 1, 3)
    .add("Raw lobster", 1, 2)
    .add("Seaweed", 5, 2)
    .add("Edible seaweed", 5, 2)
    .add("Oyster pearl", 2, 1)
    .add("Oyster pearls", 1, 1)
    .add("Casket", 1, 1)
    .add(RareDropTable_1.GemTable, 1, 1)
    .tertiary(128, "Clue scroll (medium)")
    .tertiary(400, "Long bone")
    .tertiary(5013, "Curved bone");
exports.default = new SimpleMonster_1.default({
    id: 1097,
    name: "Sea Snake Young",
    table: SeaSnakeYoungTable,
    aliases: ["sea snake young"],
});
