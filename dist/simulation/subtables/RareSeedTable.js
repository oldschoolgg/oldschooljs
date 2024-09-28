"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const RareSeedTable = new LootTable_1.default()
    .add("Toadflax seed", 1, 47)
    .add("Irit seed", 1, 32)
    .add("Belladonna seed", 1, 31)
    .add("Avantoe seed", 1, 22)
    .add("Poison ivy seed", 1, 22)
    .add("Cactus seed", 1, 21)
    .add("Kwuarm seed", 1, 15)
    .add("Potato cactus seed", 1, 15)
    .add("Snapdragon seed", 1, 10)
    .add("Cadantine seed", 1, 7)
    .add("Lantadyme seed", 1, 5)
    .add("Snape grass seed", 3, 4)
    .add("Dwarf weed seed", 1, 3)
    .add("Torstol seed", 1, 2);
exports.default = RareSeedTable;
