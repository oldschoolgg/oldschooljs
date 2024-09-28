"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = __importDefault(require("../../../subtables/RareDropTable"));
const CerberusUniqueTable = new LootTable_1.default()
    .add("Primordial crystal")
    .add("Pegasian crystal")
    .add("Eternal crystal")
    .add("Smouldering stone");
const CerberusTable = new LootTable_1.default()
    .every("Infernal ashes")
    .add(CerberusUniqueTable)
    .tertiary(15, "Ensouled hellhound head")
    .tertiary(100, "Clue scroll (elite)")
    .tertiary(2000, "Jar of souls")
    .tertiary(3000, "Hellpuppy")
    .add("Rune platebody", 1, 5)
    .add("Rune chainbody", 1, 4)
    .add("Rune 2h sword", 1, 4)
    .add("Black d'hide body", 1, 3)
    .add("Rune axe", 1, 3)
    .add("Rune pickaxe", 1, 3)
    .add("Battlestaff", 6, 3)
    .add("Rune full helm", 1, 3)
    .add("Lava battlestaff", 1, 2)
    .add("Rune halberd", 1, 2)
    .add("Fire rune", 300, 6)
    .add("Soul rune", 100, 6)
    .add("Pure essence", 300, 5)
    .add("Blood rune", 60, 4)
    .add("Cannonball", 50, 4)
    .add("Runite bolts (unf)", 40, 4)
    .add("Death rune", 100, 3)
    .add("Coal", 120, 6)
    .add("Super restore(4)", 2, 6)
    .add("Summer pie", 3, 6)
    .add("Coins", [10_000, 20_000], 5)
    .add("Dragon Bones", 20, 5)
    .add("Unholy symbol", 1, 5)
    .add("Wine of zamorak", 15, 5)
    .add("Ashes", 50, 4)
    .add("Fire orb", 20, 4)
    .add("Grimy Torstol", 6, 4)
    .add("Runite ore", 5, 3)
    .add("Uncut diamond", 5, 3)
    .add("Key master teleport", 3, 2)
    .add("Torstol seed", 3, 2)
    .add(RareDropTable_1.default, 1, 3);
exports.default = new SimpleMonster_1.default({
    id: 5862,
    name: "Cerberus",
    table: CerberusTable,
    aliases: ["cerb", "cerberus", "hellhound boss"],
});
