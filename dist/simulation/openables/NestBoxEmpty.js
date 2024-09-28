"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const SimpleOpenable_1 = __importDefault(require("../../structures/SimpleOpenable"));
const constants_1 = require("./../../constants");
const NestBoxEmptyTable = new LootTable_1.default().every(constants_1.EMPTY_BIRD_NEST_ID);
exports.default = new SimpleOpenable_1.default({
    id: 12_792,
    name: "Nest box (empty)",
    aliases: ["nest box (empty)", "empty nest box", "nest box empty"],
    table: NestBoxEmptyTable,
});
