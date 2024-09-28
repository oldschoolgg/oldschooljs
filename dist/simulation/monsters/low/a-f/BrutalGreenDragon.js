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
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = __importStar(require("../../../subtables/RareDropTable"));
const BrutalGreenDragonTable = new LootTable_1.default()
    .every("Dragon bones")
    .every("Green dragonhide", 2)
    .add("Adamant dart(p)", 25, 5)
    .add("Adamant 2h sword", 1, 4)
    .add("Mithril hasta", 1, 3)
    .add("Adamant knife", 8, 3)
    .add("Adamant med helm", 1, 3)
    .add("Rune thrownaxe", 8, 3)
    .add("Adamant spear", 1, 2)
    .add("Adamant chainbody", 1, 1)
    .add("Adamant kiteshield", 1, 1)
    .add("Adamant platelegs", 1, 1)
    .add("Rune full helm", 1, 1)
    .add("Rune chainbody", 1, 1)
    .add("Blood rune", 20, 29)
    .add("Lava rune", 35, 8)
    .add("Steam rune", 37, 6)
    .add("Nature rune", 17, 5)
    .add("Law rune", 15, 3)
    .add("Adamant arrow", 8, 3)
    .add(HerbDropTable_1.default, 1, 15)
    .add("Dragon javelin heads", 12, 10)
    .add("Mithril ore", 5, 3)
    .add("Coins", 242, 11)
    .add("Coins", 621, 10)
    .add("Curry", [1, 2], 2)
    .add(RareDropTable_1.default, 1, 3)
    .add(RareDropTable_1.GemTable, 1, 2)
    .tertiary(28, "Ensouled dragon head")
    .tertiary(128, "Clue scroll (hard)");
exports.default = new SimpleMonster_1.default({
    id: 2918,
    name: "Brutal green Dragon",
    table: BrutalGreenDragonTable,
    aliases: ["brutal green dragon", "brutal greens", "brutal green"],
});
