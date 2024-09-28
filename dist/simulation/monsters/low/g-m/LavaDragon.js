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
exports.LavaDragonTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = __importStar(require("../../../subtables/RareDropTable"));
exports.LavaDragonTable = new LootTable_1.default()
    .every("Lava dragon bones")
    .every("Black dragonhide")
    .every("Lava scale")
    .add("Rune dart", 12, 6)
    .add("Rune knife", 8, 4)
    .add("Lava battlestaff", 1, 3)
    .add("Adamant 2h sword", 1, 2)
    .add("Adamant platebody", 1, 2)
    .add("Rune axe", 1, 2)
    .add("Rune kiteshield", 1, 2)
    .add("Rune longsword", 1, 2)
    .add("Rune med helm", 1, 1)
    .add("Rune full helm", 1, 1)
    .add("Rune javelin", 20, 10)
    .add("Fire rune", 75, 7)
    .add("Blood rune", 20, 7)
    .add("Runite bolts", 30, 6)
    .add("Death rune", 20, 5)
    .add("Law rune", 20, 5)
    .add("Lava rune", 15, 4)
    .add("Lava rune", 30, 4)
    .add(HerbDropTable_1.default, 2, 5)
    .add("Coins", 66, 15)
    .add("Coins", 690, 1)
    .add("Dragon javelin heads", 15, 7)
    .add("Fire orb", 15, 5)
    .add("Adamantite bar", 2, 5)
    .add("Onyx bolt tips", 12, 5)
    .add("Chocolate cake", 3, 3)
    .add("Fire talisman", 1, 1)
    .add(RareDropTable_1.default, 1, 3)
    .add(RareDropTable_1.GemTable, 1, 5)
    .tertiary(18, "Ensouled dragon head")
    .tertiary(250, "Clue scroll (elite)")
    .tertiary(10_000, "Draconic visage");
exports.default = new SimpleMonster_1.default({
    id: 6593,
    name: "Lava dragon",
    table: exports.LavaDragonTable,
    aliases: ["lava dragon"],
});
