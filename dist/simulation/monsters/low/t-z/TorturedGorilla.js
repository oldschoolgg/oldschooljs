"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = __importDefault(require("../../../subtables/RareDropTable"));
const TreeHerbSeedTable_1 = __importDefault(require("../../../subtables/TreeHerbSeedTable"));
const UniqueTable = new LootTable_1.default()
    .add("Zenyte shard", 1, 5)
    .add("Ballista limbs", 1, 3)
    .add("Ballista spring", 1, 3)
    .add("Light frame", 1, 2)
    .add("Heavy frame", 1, 1)
    .add("Monkey tail", 1, 1);
const TorturedGorillaTable = new LootTable_1.default()
    .every("Big bones")
    .oneIn(1000, UniqueTable)
    .add("Rune med helm", 1, 8)
    .add("Rune scimitar", 1, 8)
    .add("Adamant bolts", 1, 36)
    .add("Earth rune", [418, 599], 10)
    .add("Law rune", [50, 75], 35)
    .add("Death rune", [50, 75], 35)
    .add("Grimy cadantine", 1, 8)
    .add("Grimy kwuarm", 1, 8)
    .add("Grimy dwarf weed", 1, 8)
    .add(TreeHerbSeedTable_1.default, 1, 25)
    .add("Javelin shaft", [100, 299], 10)
    .add("Adamantite bar", [1, 2], 5)
    .add("Ruby", [2, 3], 5)
    .add("Rune javelin heads", [45, 55], 5)
    .add("Dragon javelin heads", [27, 33], 5)
    .add("Coins", [1171, 1969], 30)
    .add("Shark", 1, 5)
    .add("Prayer potion(1)", 1, 5)
    .add(RareDropTable_1.default, 1, 5)
    .tertiary(300, "Clue scroll (hard)")
    .tertiary(400, "Long bone")
    .tertiary(1500, "Clue scroll (elite)")
    .tertiary(5013, "Curved bone");
exports.default = new SimpleMonster_1.default({
    id: 7097,
    name: "Tortured Gorilla",
    table: TorturedGorillaTable,
    aliases: ["tortured gorilla"],
});
