"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = __importDefault(require("../../../subtables/RareDropTable"));
const ChaosElementalMinorTable = new LootTable_1.default()
    .add("Blighted anglerfish", 2, 1)
    .add("Blighted karambwan", 3, 1)
    .add("Blighted super restore(4)", 1, 1)
    .add("Dragon bones", 1, 1)
    .add("Super combat potion(1)", 1, 1);
const ChaosElementalTable = new LootTable_1.default()
    .every(ChaosElementalMinorTable, 1)
    .tertiary(200, "Clue scroll (elite)")
    .tertiary(300, "Pet chaos elemental")
    .oneIn(256, "Dragon pickaxe")
    .add("Rune dart", 100, 5)
    .add("Rune platelegs", 1, 4)
    .add("Rune plateskirt", 1, 4)
    .add("Rune 2h sword", 1, 3)
    .add("Rune battleaxe", 1, 3)
    .add("Rune full helm", 1, 3)
    .add("Rune kiteshield", 1, 3)
    .add("Mystic air staff", 1, 3)
    .add("Mystic water staff", 1, 3)
    .add("Mystic earth staff", 1, 3)
    .add("Mystic fire staff", 1, 3)
    .add("Dragon dagger", 1, 2)
    .add("Dragon 2h sword", 1, 2)
    .add("Dragon platelegs", 1, 2)
    .add("Dragon plateskirt", 1, 2)
    .add("Chaos rune", [300, 500], 8)
    .add("Blood rune", [100, 250], 8)
    .add("Rune arrow", 150, 5)
    .add("Grimy ranarr weed", [5, 8], 4)
    .add("Grimy snapdragon", [5, 8], 4)
    .add("Grimy avantoe", [5, 8], 3)
    .add("Grimy kwuarm", [5, 8], 3)
    .add("Coal", [75, 150], 5)
    .add("Mahogany plank", [8, 16], 5)
    .add("Runite bar", [3, 5], 4)
    .add("Adamantite bar", [8, 12], 4)
    .add("Coins", [20_005, 29_995], 7)
    .add("Blighted ancient ice sack", [20, 40], 5)
    .add("Blighted karambwan", [15, 25], 4)
    .add("Blighted anglerfish", [10, 15], 4)
    .add("Wilderness crabs teleport", 2, 2)
    .add(RareDropTable_1.default, 1, 8);
exports.default = new SimpleMonster_1.default({
    id: 2054,
    name: "Chaos Elemental",
    table: ChaosElementalTable,
    aliases: ["chaos ele", "chaos elemental", "chaos el"],
});
