"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TzHaarMej = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const TzHaarMejTable = new LootTable_1.default()
    .oneIn(4096, "Toktz-mej-tal")
    .oneIn(4096, "Obsidian cape")
    .add("Tokkul", [1, 71], 10)
    .add("Earth rune", 25)
    .add("Fire rune", 25)
    .add("Air rune", 25)
    .add("Chaos rune", 5)
    .add("Nature rune", 2)
    .add("Death rune", 2)
    .add("Uncut diamond", 1);
exports.TzHaarMej = new SimpleMonster_1.default({
    id: 2154,
    name: "TzHaar-Mej",
    table: TzHaarMejTable,
    aliases: ["tzhaar-mej", "mej"],
});
