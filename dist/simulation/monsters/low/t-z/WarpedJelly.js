"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarpedJellyPreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.WarpedJellyPreTable = new LootTable_1.default()
    .add("Adamant battleaxe", 1, 11)
    .add("Black 2h sword", 1, 5)
    .add("Adamant axe", 1, 3)
    .add("Adamant 2h sword", 1, 2)
    .add("Mithril boots", 1, 2)
    .add("Rune kiteshield", 1, 2)
    .add("Rune full helm", 1, 1)
    .add("Chaos rune", 45, 5)
    .add("Death rune", 15, 3)
    .add("Coins", 44, 27)
    .add("Coins", 102, 27)
    .add("Coins", 220, 9)
    .add("Coins", 11, 6)
    .add("Coins", 460, 2)
    .add("Lobster", 2, 16)
    .add("Gold bar", 1, 2)
    .add("Thread", 10, 1)
    .add(RareDropTable_1.GemTable, 1, 4);
const WarpedJellyTable = new LootTable_1.default()
    .every(exports.WarpedJellyPreTable)
    .tertiary(64, "Clue scroll (hard)");
exports.default = new SimpleMonster_1.default({
    id: 7277,
    name: "Warped Jelly",
    table: WarpedJellyTable,
    aliases: ["warped jelly", "mouldy jelly", "moldy jello"],
});
