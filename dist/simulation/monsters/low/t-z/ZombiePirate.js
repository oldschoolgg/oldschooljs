"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZombiePirateTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.ZombiePirateTable = new LootTable_1.default()
    .every("Bones")
    .oneIn(2, new LootTable_1.default())
    .oneIn(24, "Zombie pirate key")
    .oneIn(20_000, "Teleport anchoring scroll")
    .add("Blood rune", [30, 60], 4)
    .add("Death rune", [30, 90], 4)
    .add("Chaos rune", [30, 90], 4)
    .add("Mind rune", [30, 90], 4)
    .add("Battlestaff", [1, 3], 8)
    .add("Adamant platebody", 1, 6)
    .add("Rune med helm", 1, 6)
    .add("Rune warhammer", 1, 6)
    .add("Rune battleaxe", 1, 6)
    .add("Rune longsword", 1, 6)
    .add("Rune sword", 1, 6)
    .add("Rune mace", 1, 6)
    .add("Dragon dagger", 1, 1)
    .add("Dragon longsword", 1, 1)
    .add("Dragon scimitar", 1, 1)
    .add("Blighted ancient ice sack", [10, 30], 12)
    .add("Blighted anglerfish", [5, 15], 12)
    .add("Blighted manta ray", [5, 15], 12)
    .add("Blighted karambwan", [5, 15], 12)
    .add("Blighted super restore(4)", [1, 3], 12)
    .add("Coins", [1_000, 8_000], 12)
    .add("Cannonball", [20, 100], 12)
    .add("Gold ore", [5, 15], 12)
    .add("Adamant seeds", [5, 10], 8)
    .tertiary(5000, "Zombie champion scroll");
exports.default = new SimpleMonster_1.default({
    id: 13_489,
    name: "Zombie pirate",
    table: exports.ZombiePirateTable,
    aliases: ["zombie pirate"],
});
