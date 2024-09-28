"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const TreeHerbSeedTable = new LootTable_1.default()
    .add("Ranarr seed", 1, 15)
    .add("Snapdragon seed", 1, 14)
    .add("Torstol seed", 1, 11)
    .add("Watermelon seed", 15, 10)
    .add("Willow seed", 1, 10)
    .add("Mahogany seed", 1, 9)
    .add("Maple seed", 1, 9)
    .add("Teak seed", 1, 9)
    .add("Yew seed", 1, 9)
    .add("Papaya tree seed", 1, 7)
    .add("Magic seed", 1, 6)
    .add("Palm tree seed", 1, 5)
    .add("Spirit seed", 1, 4)
    .add("Dragonfruit tree seed", 1, 3)
    .add("Celastrus seed", 1, 2)
    .add("Redwood tree seed", 1, 2);
exports.default = TreeHerbSeedTable;
