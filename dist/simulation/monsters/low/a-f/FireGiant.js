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
const FireGiantTable = new LootTable_1.default()
    .every("Big bones")
    .add("Steel axe", 1, 3)
    .add("Mithril sq shield", 1, 2)
    .add("Fire battlestaff", 1, 1)
    .add("Rune scimitar", 1, 1)
    .add("Fire rune", 150, 10)
    .add("Chaos rune", 5, 7)
    .add("Rune arrow", 12, 5)
    .add("Blood rune", 5, 4)
    .add("Fire rune", 37, 1)
    .add("Law rune", 2, 1)
    .add(HerbDropTable_1.default, 1, 19)
    .add("Coins", 60, 40)
    .add("Coins", 15, 7)
    .add("Coins", 25, 6)
    .add("Coins", 300, 2)
    .add("Coins", 50, 1)
    .add("Lobster", 1, 3)
    .add("Steel bar", 1, 2)
    .add("Strength potion(2)", 1, 1)
    .add(RareDropTable_1.default, 1, 1)
    .add(RareDropTable_1.GemTable, 1, 11)
    .tertiary(20, "Ensouled giant head")
    .tertiary(400, "Long bone")
    .tertiary(5000, "Giant champion scroll")
    .tertiary(5013, "Curved bone");
exports.default = new SimpleMonster_1.default({
    id: 2075,
    name: "Fire Giant",
    table: FireGiantTable,
    aliases: ["fire giant", "fire g", "fires"],
});
