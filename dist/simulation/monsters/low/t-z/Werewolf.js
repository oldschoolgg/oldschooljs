"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const WerewolfTable = new LootTable_1.default({ limit: 512 })
    .every("Wolf bones")
    .add("Steel scimitar", 1, 32)
    .add("Steel axe", 1, 25)
    .add("Steel full helm", 1, 15)
    .add("Mithril chainbody", 1, 10)
    .add("Mithril sq shield", 1, 10)
    .add("Rune med helm", 1, 3)
    .add(HerbDropTable_1.default, 1, 3)
    .add("Jug of wine", 1, 20)
    .add("Raw chicken", 5, 10)
    .add("Raw beef", 5, 10)
    .add("Raw bear meat", 5, 10)
    .add("Coins", 10, 80)
    .add("Coins", 90, 20)
    .add("Coins", 120, 20)
    .add("Coins", 222, 20)
    .add("Coins", 364, 20)
    .add("Grey wolf fur", 1, 100)
    .add("Fur", 1, 100)
    .add(RareDropTable_1.GemTable, 1, 2)
    .tertiary(128, "Clue scroll (easy)")
    .tertiary(512, "Clue scroll (medium)");
exports.default = new SimpleMonster_1.default({
    id: 2593,
    name: "Werewolf",
    table: WerewolfTable,
    aliases: ["werewolf"],
});
