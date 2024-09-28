"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const FixedAllotmentSeedTable = new LootTable_1.default()
    .add("Potato seed", 4, 96)
    .add("Onion seed", 4, 72)
    .add("Cabbage seed", 4, 48)
    .add("Tomato seed", 3, 24)
    .add("Sweetcorn seed", 3, 12)
    .add("Strawberry seed", 2, 6)
    .add("Watermelon seed", 2, 3)
    .add("Snape grass seed", 2, 2);
exports.default = FixedAllotmentSeedTable;
