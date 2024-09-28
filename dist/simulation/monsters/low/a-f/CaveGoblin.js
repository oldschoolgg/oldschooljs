"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const CaveGoblinTable = new LootTable_1.default()
    .add("Bat shish")
    .add("Coated frogs' legs")
    .add("Fingers")
    .add("Frogburger")
    .add("Frogspawn gumbo")
    .add("Green gloop soup")
    .add("Coins", [10, 50], 7)
    .add("Bullseye lantern", 1)
    .add("Cave goblin wire", 1)
    .add("Iron ore", [1, 4])
    .add("Oil lantern", 1)
    .add("Swamp tar", 1)
    .add("Tinderbox", 1)
    .add("Unlit torch", 1)
    .tertiary(257_211, "Rocky");
exports.default = new SimpleMonster_1.default({
    id: 6434,
    name: "Cave goblin",
    pickpocketTable: CaveGoblinTable,
    aliases: ["cave goblin"],
});
