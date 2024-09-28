"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevenantOrkTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const util_1 = require("../../../../util");
exports.RevenantOrkTable = new LootTable_1.default()
    .every("Revenant ether", [1, 11])
    .add("Bracelet of ethereum (uncharged)", 1, 15)
    .add("Battlestaff", 3, 5)
    .add("Rune full helm", 1, 2)
    .add("Rune platebody", 1, 2)
    .add("Rune platelegs", 1, 2)
    .add("Rune kiteshield", 1, 2)
    .add("Rune warhammer", 1, 2)
    .add("Dragon platelegs", 1, 1)
    .add("Dragon plateskirt", 1, 1)
    .add("Dragon dagger", 1, 1)
    .add("Dragon longsword", 1, 1)
    .oneIn(677, "Dragon med helm")
    .add("Coal", [50, 100], 6)
    .add("Adamantite bar", [8, 12], 6)
    .add("Runite ore", [3, 6], 6)
    .add("Runite bar", [3, 5], 6)
    .add("Black dragonhide", [10, 15], 6)
    .add("Mahogany plank", [15, 25], 5)
    .add("Manta ray", [30, 50], 3)
    .add("Yew logs", [60, 100], 3)
    .add("Magic logs", [15, 25], 2)
    .add("Uncut dragonstone", [5, 7], 1)
    .add("Coins", [1, 251], 49)
    .add("Revenant cave teleport", 1, 7)
    .add("Super restore(4)", [3, 5], 4)
    .add("Dragonstone bolt tips", [40, 70], 4)
    .add("Onyx bolt tips", [5, 10], 4)
    .add("Law rune", [80, 120], 3)
    .add("Death rune", [60, 100], 3)
    .add("Blood rune", [60, 100], 3);
exports.default = new SimpleMonster_1.default({
    id: 7937,
    name: "Revenant ork",
    table: exports.RevenantOrkTable,
    aliases: ["revenant ork"],
    customKillLogic: (0, util_1.makeRevTable)({
        seeds: [1210, 1210],
        uniqueTable: [3227, 645],
        ancientEmblem: [4840, 4840],
        ancientTotem: [1210, 1210],
        ancientCrystal: [1613, 1613],
        ancientStatuette: [2420, 2420],
        topThree: [4840, 4840],
    }),
});
