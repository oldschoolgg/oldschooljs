"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const TrollGeneralTable = new LootTable_1.default()
    .every("Big bones")
    .add("Steel platebody", 1, 4)
    .add("Black warhammer", 1, 3)
    .add("Steel warhammer", 1, 3)
    .add("Adamant axe", 1, 2)
    .add("Adamant sq shield", 1, 1)
    .add("Granite shield", 1, 1)
    .add("Mithril platebody", 1, 1)
    .add("Rune warhammer", 1, 1)
    .add("Earth rune", 80, 8)
    .add("Nature rune", 16, 5)
    .add("Law rune", 4, 3)
    .add("Earth rune", 65, 1)
    .add("Earth rune", 25, 1)
    .add(HerbDropTable_1.default, 1, 15)
    .add("Coins", 40, 29)
    .add("Coins", 135, 25)
    .add("Coins", 190, 10)
    .add("Coins", 20, 4)
    .add("Coins", 420, 1)
    .add("Coal", 6, 3)
    .add("Raw tuna", 4, 2)
    .add(RareDropTable_1.GemTable, 1, 5)
    .tertiary(28, "Ensouled troll head")
    .tertiary(400, "Long bone")
    .tertiary(5013, "Curved bone");
exports.default = new SimpleMonster_1.default({
    id: 4120,
    name: "Troll general",
    table: TrollGeneralTable,
    aliases: ["troll general"],
});
