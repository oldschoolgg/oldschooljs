"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const SimpleOpenable_1 = __importDefault(require("../../structures/SimpleOpenable"));
const CasketTable = new LootTable_1.default()
    .add("Coins", 160, 24)
    .add("Coins", 20, 22)
    .add("Coins", 40, 20)
    .add("Coins", 320, 19)
    .add("Coins", 80, 18)
    .add("Coins", 640, 18)
    .add("Uncut sapphire", 1, 64)
    .add("Uncut emerald", 1, 33)
    .add("Uncut ruby", 1, 15)
    .add("Uncut diamond", 1, 4)
    .add("Cosmic talisman", 1, 16)
    .add("Loop half of key", 1, 2)
    .add("Tooth half of key", 1, 2);
exports.default = new SimpleOpenable_1.default({
    id: 405,
    name: "Casket",
    aliases: ["casket"],
    table: CasketTable,
});
