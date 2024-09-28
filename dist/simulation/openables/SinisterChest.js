"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const SimpleOpenable_1 = __importDefault(require("../../structures/SimpleOpenable"));
const SinisterChestTable = new LootTable_1.default()
    .every("Grimy ranarr weed", 3)
    .every("Grimy harralander", 2)
    .every("Grimy irit leaf")
    .every("Grimy avantoe")
    .every("Grimy kwuarm")
    .every("Grimy torstol");
exports.default = new SimpleOpenable_1.default({
    id: 993,
    name: "Sinister chest",
    aliases: ["sinister chest", "sinister"],
    table: SinisterChestTable,
});
