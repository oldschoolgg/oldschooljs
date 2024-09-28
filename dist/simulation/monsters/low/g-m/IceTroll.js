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
const IceTrollTable = new LootTable_1.default()
    .every("Big bones")
    .add("Adamant full helm", 1, 10)
    .add("Steel platebody", 1, 10)
    .add("Mithril warhammer", 1, 5)
    .add("Adamant axe", 1, 5)
    .add("Rune kiteshield", 1, 2)
    .add("Granite shield", 1, 1)
    .add("Rune warhammer", 1, 1)
    .add("Earth rune", [8, 14], 10)
    .add("Earth rune", [12, 36], 10)
    .add("Nature rune", [4, 12], 5)
    .add("Law rune", [4, 8], 5)
    .add(HerbDropTable_1.default, 1, 2)
    .add(UncommonSeedDropTable_1.default, 1, 11)
    .add("Coins", 200, 20)
    .add("Raw shark", [2, 8], 10)
    .add("Seaweed", [3, 9], 10)
    .add("Ball of wool", [18, 42], 10)
    .add(RareDropTable_1.GemTable, 1, 1)
    .tertiary(20, "Ensouled troll head")
    .tertiary(400, "Long bone")
    .tertiary(5013, "Curved bone");
exports.default = new SimpleMonster_1.default({
    id: 648,
    name: "Ice Troll",
    table: IceTrollTable,
    aliases: ["ice troll"],
});
