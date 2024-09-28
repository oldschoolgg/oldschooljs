"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WallBeastTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.WallBeastTable = new LootTable_1.default()
    .add("Air rune", 3, 8)
    .add("Cosmic rune", 2, 2)
    .add("Chaos rune", [3, 7], 2)
    .add("Bronze med helm", 1, 8)
    .add("Bronze full helm", 1, 8)
    .add("Iron med helm", 1, 8)
    .add("Steel med helm", 1, 8)
    .add("Steel full helm", 1, 8)
    .add("Black full helm", 1, 4)
    .add("Mithril med helm", 1, 4)
    .add("Mithril full helm", 1, 4)
    .add("Adamant med helm", 1, 4)
    .oneIn(512, "Mystic hat (light)")
    .add("Grimy guam leaf", 1, 8)
    .add("Coins", 15, 24)
    .add("Tinderbox", 1, 8)
    .add("Lantern lens", 1, 8)
    .add("Unlit torch", 1, 8)
    .add("Eye of newt", 1, 4)
    .add("Bullseye lantern (unf)", 1, 1)
    .tertiary(128, "Clue scroll (medium)");
exports.default = new SimpleMonster_1.default({
    id: 476,
    name: "Wall beast",
    table: exports.WallBeastTable,
    aliases: ["wall beast"],
});
