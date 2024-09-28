"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const SimpleOpenable_1 = __importDefault(require("../../structures/SimpleOpenable"));
const MuddyChestTable = new LootTable_1.default()
    .every("Uncut ruby")
    .every("Mithril bar", 2)
    .every("Law rune", 5)
    .every("Death rune", 5)
    .every("Chaos rune", 15);
exports.default = new SimpleOpenable_1.default({
    id: 991,
    name: "Muddy chest",
    aliases: ["muddy chest", "muddy"],
    table: MuddyChestTable,
});
