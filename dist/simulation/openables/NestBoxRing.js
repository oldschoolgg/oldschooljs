"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const SimpleOpenable_1 = __importDefault(require("../../structures/SimpleOpenable"));
const constants_1 = require("./../../constants");
const NestBoxRingTable = new LootTable_1.default()
    .every(constants_1.EMPTY_BIRD_NEST_ID)
    .add("Sapphire ring", 1, 40)
    .add("Gold ring", 1, 35)
    .add("Emerald ring", 1, 15)
    .add("Ruby ring", 1, 9)
    .add("Diamond ring");
exports.default = new SimpleOpenable_1.default({
    id: 12_794,
    name: "Nest box (ring)",
    aliases: ["nest box (ring)", "ring nest box", "nest box ring"],
    table: NestBoxRingTable,
});
