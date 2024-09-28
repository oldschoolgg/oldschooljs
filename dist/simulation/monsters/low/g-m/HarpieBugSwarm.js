"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const HarpieBugSwarmTable = new LootTable_1.default()
    .add("Steel axe", 1, 4)
    .add("Steel full helm", 1, 4)
    .add("Staff of fire", 1, 3)
    .add("Mithril chainbody", 1, 2)
    .add("Adamant med helm", 1, 1)
    .add("Steel boots", 1, 1)
    .add("Fire rune", 30, 20)
    .add("Fire rune", 60, 8)
    .add("Chaos rune", 15, 5)
    .add("Death rune", 3, 3)
    .add("Coins", 40, 25)
    .add("Coins", 160, 20)
    .add("Coins", 230, 10)
    .add("Coins", 30, 7)
    .add("Coins", 490, 2)
    .add("Gold ore", 1, 8)
    .add("Jug of wine", 1, 2)
    .add(RareDropTable_1.GemTable, 1, 3)
    .tertiary(128, "Clue scroll (medium)");
exports.default = new SimpleMonster_1.default({
    id: 464,
    name: "Harpie Bug Swarm",
    table: HarpieBugSwarmTable,
    aliases: ["harpie bug swarm"],
});
