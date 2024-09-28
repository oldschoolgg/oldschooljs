"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const UncommonSeedDropTable_1 = __importDefault(require("../../../subtables/UncommonSeedDropTable"));
const WildySlayerCaveTable = new LootTable_1.default()
    .add("Blighted entangle sack", [1, 10], 13200)
    .add("Blighted anglerfish", [1, 2], 9900)
    .add("Blighted manta ray", [1, 2], 9900)
    .add("Blighted karambwan", [1, 2], 6580)
    .add("Blighted teleport spell sack", [1, 10], 6580)
    .add("Blighted ancient ice sack", [1, 10], 6580)
    .add("Blighted vengeance sack", [1, 10], 6580)
    .add("Blighted super restore(4)", 1, 3290)
    .add("Revenant cave teleport", 1, 3290)
    .add("Dareeyak teleport", 1, 657)
    .add("Wilderness crabs teleport", 1, 657)
    .add("Carrallanger teleport", 1, 657)
    .add("Paddewwa teleport", 1, 657)
    .add("Annakarl teleport", 1, 657)
    .add("Lassar teleport", 1, 657)
    .add("Kharyrll teleport", 1, 657)
    .add("Senntisten teleport", 1, 657)
    .add("Ghorrock teleport", 1, 657)
    .add("Target teleport", 1, 657)
    .add("Magic shortbow scroll", 1, 263)
    .add("Ring of wealth scroll", 1, 263)
    .add("Trouver parchment", 2, 66)
    .add("Looting bag note", 1, 66);
const IceGiantTable = new LootTable_1.default()
    .every("Big bones")
    .add("Iron 2h sword", 1, 5)
    .add("Black kiteshield", 1, 4)
    .add("Steel axe", 1, 4)
    .add("Steel sword", 1, 4)
    .add("Iron platelegs", 1, 1)
    .add("Mithril mace", 1, 1)
    .add("Mithril sq shield", 1, 1)
    .add("Adamant arrow", 5, 6)
    .add("Nature rune", 6, 4)
    .add("Mind rune", 24, 3)
    .add("Body rune", 37, 3)
    .add("Law rune", 3, 2)
    .add("Water rune", 12, 1)
    .add("Cosmic rune", 4, 1)
    .add("Death rune", 3, 1)
    .add("Blood rune", 2, 1)
    .add(UncommonSeedDropTable_1.default, 1, 8)
    .add("Coins", 117, 32)
    .add("Coins", 53, 12)
    .add("Coins", 196, 10)
    .add("Coins", 8, 7)
    .add("Coins", 22, 6)
    .add("Coins", 400, 2)
    .add("Jug of wine", 1, 3)
    .add("Mithril ore", 1, 1)
    .add("Banana", 1, 1)
    .add(RareDropTable_1.GemTable, 1, 4)
    .tertiary(21, "Ensouled giant head")
    .tertiary(40, "Clue scroll (beginner)")
    .tertiary(400, "Long bone")
    .tertiary(5000, "Giant champion scroll")
    .tertiary(5013, "Curved bone");
const IceGiantWildyCaveTable = new LootTable_1.default()
    .every(IceGiantTable)
    .add(WildySlayerCaveTable, 1, 73)
    .add(new LootTable_1.default(), 1, 27);
exports.default = new SimpleMonster_1.default({
    id: 2085,
    name: "Ice giant",
    table: IceGiantTable,
    wildyCaveTable: IceGiantWildyCaveTable,
    aliases: ["ice giant"],
});
