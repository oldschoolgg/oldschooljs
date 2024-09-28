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
const UniqueTable = new LootTable_1.default()
    .add("Zenyte shard", 1, 5)
    .add("Ballista limbs", 1, 3)
    .add("Ballista spring", 1, 3)
    .add("Light frame", 1, 2)
    .add("Heavy frame", 1, 1)
    .add("Monkey tail", 1, 1);
const DemonicGorillaTable = new LootTable_1.default({ limit: 500 })
    .every("Malicious ashes")
    .add(UniqueTable, 1, 5)
    .add("Rune platelegs", 1, 35)
    .add("Rune plateskirt", 1, 35)
    .add("Rune chainbody", 1, 20)
    .add("Dragon scimitar", 1, 10)
    .add("Law rune", [50, 75], 35)
    .add("Death rune", [50, 75], 35)
    .add("Runite bolts", [100, 150], 25)
    .add(NotedHerbTable_1.NotedHerbTable, [7, 13], 18)
    .add(TreeHerbSeedTable_1.default, 2, 25, { multiply: true })
    .add("Prayer potion(3)", 2, 40)
    .add("Shark", [2, 3], 35)
    .add("Coins", [5000, 10_000], 25)
    .add("Saradomin brew(2)", 1, 25)
    .add("Javelin shaft", [750, 1250], 25)
    .add("Rune javelin heads", [45, 55], 25)
    .add("Dragon javelin heads", [27, 33], 25)
    .add("Adamantite bar", 6, 20)
    .add("Diamond", [4, 6], 17)
    .add("Runite bar", 3, 15)
    .add(RareDropTable_1.default, 1, 5)
    .tertiary(100, "Clue scroll (hard)")
    .tertiary(500, "Clue scroll (elite)");
exports.default = new SimpleMonster_1.default({
    id: 7144,
    name: "Demonic Gorilla",
    table: DemonicGorillaTable,
    aliases: ["demonic gorilla", "demonic", "demonics"],
});
