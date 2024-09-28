"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = __importStar(require("../../../subtables/RareDropTable"));
const ancientPageTable = new LootTable_1.default()
    .add(11_341, 1, 1)
    .add(11_342, 1, 1)
    .add(11_343, 1, 1)
    .add(11_344, 1, 1)
    .add(11_345, 1, 1)
    .add(11_346, 1, 1)
    .add(11_347, 1, 1)
    .add(11_348, 1, 1)
    .add(11_349, 1, 1)
    .add(11_350, 1, 1)
    .add(11_351, 1, 1)
    .add(11_352, 1, 1)
    .add(11_353, 1, 1)
    .add(11_354, 1, 1)
    .add(11_355, 1, 1)
    .add(11_356, 1, 1)
    .add(11_357, 1, 1)
    .add(11_358, 1, 1)
    .add(11_359, 1, 1)
    .add(11_360, 1, 1)
    .add(11_361, 1, 1)
    .add(11_362, 1, 1)
    .add(11_363, 1, 1)
    .add(11_364, 1, 1)
    .add(11_365, 1, 1)
    .add(11_366, 1, 1);
const MithrilDragonTable = new LootTable_1.default()
    .every("Dragon bones")
    .every("Mithril bar", 3)
    .add("Rune battleaxe", 1, 12)
    .add("Rune dart(p)", 14, 7)
    .add("Rune knife", 8, 3)
    .add("Rune mace", 1, 3)
    .add("Rune spear", 1, 2)
    .add("Rune full helm", 1, 1)
    .oneIn(32_768, "Dragon full helm")
    .add("Blood rune", 27, 19)
    .add("Rune javelin", 8, 14)
    .add("Runite bolts", [10, 21], 6)
    .add("Soul rune", 10, 5)
    .add("Rune arrow", 8, 3)
    .add("Shark", 1, 6)
    .add("Prayer mix(2)", 1, 2)
    .add("Shark", 6, 2)
    .add("Superattack mix(2)", 1, 2)
    .add("Super def. mix(2)", 1, 2)
    .add("Super str. mix(2)", 1, 2)
    .add("Coins", 600, 17)
    .add("Dragon javelin heads", 15, 7)
    .add("Chewed bones", 1, 3)
    .add("Runite bar", 2, 3)
    .add(ancientPageTable, 2, 1)
    .add(RareDropTable_1.default, 1, 1)
    .add(RareDropTable_1.GemTable, 1, 4)
    .tertiary(350, "Clue scroll (elite)")
    .tertiary(10_000, "Draconic visage");
exports.default = new SimpleMonster_1.default({
    id: 2919,
    name: "Mithril Dragon",
    table: MithrilDragonTable,
    aliases: ["mithril dragon", "mith dragon", "mith drags", "mithril dragons"],
});
