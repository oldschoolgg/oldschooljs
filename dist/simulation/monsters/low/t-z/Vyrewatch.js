"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VyrewatchTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = __importDefault(require("../../../subtables/RareDropTable"));
exports.VyrewatchTable = new LootTable_1.default()
    .every("Vampyre dust")
    .add("Rune dagger", 1, 8)
    .add("Adamant platelegs", 1, 8)
    .add("Adamant platebody", 1, 8)
    .add("Rune platelegs", 1, 4)
    .add("Mithril axe", 1, 4)
    .add("Rune full helm", 1, 2)
    .add("Earth rune", [4, 12], 8)
    .add("Death rune", [4, 12], 4)
    .add("Chaos rune", [7, 25], 4)
    .add("Adamant arrow", [8, 16], 4)
    .add("Rune javelin", [9, 15], 2)
    .add("Grimy marrentill", 1, 2)
    .add("Grimy harralander", 1, 2)
    .add("Grimy guam leaf", 1, 2)
    .add("Grimy avantoe", 1, 2)
    .add("Cabbage seed", 4, 4)
    .add("Potato seed", 4, 4)
    .add("Mushroom spore", 1, 4)
    .add("Marigold seed", 1, 2)
    .add("Tarromin seed", 1, 2)
    .add("Torstol seed", 1, 1)
    .add("Asgarnian seed", 3, 1)
    .add("Snapdragon seed", 1, 1)
    .add("Adamantite ore", 1, 4)
    .add("Coal", 6, 4)
    .add("Runite bar", 1, 4)
    .add("Mort myre fungus", 2, 4)
    .add("Yew logs", 4, 3)
    .add("Bark", [6, 10], 3)
    .add("Black axe", 1, 3)
    .add("Opal bolt tips", [4, 7], 2)
    .add("Pearl bolt tips", [5, 10], 2)
    .add("Emerald bolt tips", 6, 2)
    .add("Onyx bolt tips", [4, 10], 2)
    .add("Ruby bolt tips", 9, 2)
    .add("Amethyst bolt tips", 10, 2)
    .add("Diamond bolt tips", [4, 6], 2)
    .add("Dragonstone bolt tips", 5, 2)
    .add("Coins", [244, 1000], 24)
    .add(RareDropTable_1.default, 1, 1)
    .tertiary(128, "Clue scroll (hard)");
exports.default = new SimpleMonster_1.default({
    id: 3717,
    name: "Vyrewatch",
    table: exports.VyrewatchTable,
    aliases: ["vyrewatch"],
});
