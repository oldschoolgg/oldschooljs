"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const SimpleOpenable_1 = __importDefault(require("../../structures/SimpleOpenable"));
const ZombiePirateLocker = new LootTable_1.default()
    .oneIn(275, "Teleport anchoring scroll")
    .add("Blood rune", [60, 120], 4)
    .add("Death rune", [60, 180], 4)
    .add("Chaos rune", [60, 180], 4)
    .add("Mind rune", [60, 180], 4)
    .add("Battlestaff", [2, 6], 8)
    .add("Adamant platebody", 2, 6)
    .add("Rune med helm", 2, 6)
    .add("Rune warhammer", 2, 6)
    .add("Rune battleaxe", 2, 6)
    .add("Rune longsword", 2, 6)
    .add("Rune sword", 2, 6)
    .add("Rune mace", 2, 6)
    .add("Dragon dagger", 2, 1)
    .add("Dragon longsword", 2, 1)
    .add("Dragon scimitar", 2, 1)
    .add("Blighted ancient ice sack", [20, 60], 12)
    .add("Blighted anglerfish", [10, 30], 12)
    .add("Blighted manta ray", [10, 30], 12)
    .add("Blighted karambwan", [10, 30], 12)
    .add("Blighted super restore(4)", [2, 6], 12)
    .add("Coins", [2_000, 16_000], 12)
    .add("Cannonball", [40, 200], 12)
    .add("Gold ore", [10, 30], 12)
    .add("Adamant seeds", [10, 20], 8);
exports.default = new SimpleOpenable_1.default({
    id: 29_449,
    name: "Zombie Pirate's Locker",
    aliases: ["zombie pirate locker", "pirate locker"],
    table: ZombiePirateLocker,
});
