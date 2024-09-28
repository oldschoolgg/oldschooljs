"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const SimpleOpenable_1 = __importDefault(require("../../structures/SimpleOpenable"));
const BoneTable = new LootTable_1.default({ limit: 10_000 })
    .add("Zogre bones", 1, 4996)
    .add("Fayrg bones", 1, 1086)
    .add("Raurg bones", 1, 766)
    .add("Ourg bones", 1, 375);
const OgreCoffinTable = new LootTable_1.default()
    .every(BoneTable)
    .add("Coins", [6, 20], 32)
    .add("Bronze axe", 1, 16)
    .add("Iron axe", 1, 16)
    .add("Steel axe", 1, 16)
    .add("Bronze pickaxe", 1, 16)
    .add("Iron pickaxe", 1, 16)
    .add("Steel pickaxe", 1, 16)
    .add("Bronze dagger", 1, 16)
    .add("Iron dagger", 1, 16)
    .add("Steel dagger", 1, 16)
    .add("Bronze nails", 1, 16)
    .add("Iron nails", 1, 16)
    .add("Steel nails", 1, 16)
    .add("Black nails", 1, 16)
    .add("Knife", 1, 16)
    .add("Rusty sword", 1, 8)
    .add("Damaged armour", 1, 8)
    .add("Leather body", 1, 8)
    .add("Tinderbox", 1, 8)
    .add("Buttons", 1, 4)
    .add("Uncut opal", 1, 4)
    .add("Uncut jade", 1, 4)
    .add("Grimy lantadyme", 1, 4)
    .add("Clue scroll (easy)", 1, 1);
exports.default = new SimpleOpenable_1.default({
    id: 4850,
    name: "Ogre coffin",
    aliases: ["ogre coffin", "ogre chest", "ogre coffin chest"],
    table: OgreCoffinTable,
});
