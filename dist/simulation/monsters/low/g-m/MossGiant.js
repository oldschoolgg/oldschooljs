"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const UncommonSeedDropTable_1 = __importDefault(require("../../../subtables/UncommonSeedDropTable"));
const MossGiantTable = new LootTable_1.default()
    .every("Big bones")
    .add("Black sq shield", 1, 5)
    .add("Magic staff", 1, 2)
    .add("Steel med helm", 1, 2)
    .add("Mithril sword", 1, 2)
    .add("Mithril spear", 1, 2)
    .add("Steel kiteshield", 1, 1)
    .add("Law rune", 3, 4)
    .add("Air rune", 18, 3)
    .add("Earth rune", 27, 3)
    .add("Chaos rune", 7, 3)
    .add("Nature rune", 6, 3)
    .add("Cosmic rune", 3, 2)
    .add("Iron arrow", 15, 2)
    .add("Steel arrow", 30, 1)
    .add("Death rune", 3, 1)
    .add("Blood rune", 1, 1)
    .add(HerbDropTable_1.default, 1, 5)
    .add(UncommonSeedDropTable_1.default, 1, 35)
    .add("Coins", 37, 19)
    .add("Coins", 2, 8)
    .add("Coins", 119, 10)
    .add("Coins", 300, 2)
    .add("Steel bar", 1, 6)
    .add("Coal", 1, 1)
    .add("Spinach roll", 1, 1)
    .add(RareDropTable_1.GemTable, 1, 4)
    .tertiary(24, "Ensouled giant head")
    .tertiary(45, "Clue scroll (beginner)")
    .tertiary(150, "Mossy key")
    .tertiary(400, "Long bone")
    .tertiary(5000, "Giant champion scroll")
    .tertiary(5013, "Curved bone");
exports.default = new SimpleMonster_1.default({
    id: 2090,
    name: "Moss giant",
    table: MossGiantTable,
    aliases: ["moss giant"],
});
