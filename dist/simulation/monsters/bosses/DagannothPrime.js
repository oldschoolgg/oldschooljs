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
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const RareDropTable_1 = __importStar(require("../../subtables/RareDropTable"));
const RareSeedTable_1 = __importDefault(require("../../subtables/RareSeedTable"));
const TalismanTable_1 = __importDefault(require("../../subtables/TalismanTable"));
const DagannothPrimeTable = new LootTable_1.default()
    .every("Dagannoth bones")
    .every("Dagannoth hide")
    .tertiary(20, "Ensouled dagannoth head")
    .tertiary(42, "Clue scroll (hard)")
    .tertiary(750, "Clue scroll (elite)")
    .tertiary(5000, "Pet dagannoth prime")
    .add("Earth battlestaff", 1, 10)
    .add("Water battlestaff", 1, 5)
    .add("Air battlestaff", 1, 4)
    .add("Battlestaff", [1, 10], 1)
    .add("Fremennik blade")
    .add("Fremennik shield")
    .add("Fremennik helm")
    .add("Mud battlestaff")
    .add("Dragon axe")
    .add("Farseer helm")
    .add("Skeletal top")
    .add("Skeletal bottoms")
    .add("Seers ring")
    .add("Air rune", [100, 200], 6)
    .add("Earth rune", [50, 100], 5)
    .add("Blood rune", [25, 75], 2)
    .add("Law rune", [10, 75], 2)
    .add("Nature rune", [25, 50], 2)
    .add("Mud rune", [25, 75], 2)
    .add("Death rune", [25, 85], 2)
    .add("Earth talisman", [25, 75], 10)
    .add("Air talisman", [25, 75], 7)
    .add("Water talisman", [1, 76], 7)
    .add(TalismanTable_1.default)
    .add("Shark", 5, 10)
    .add("Oyster pearls", 1, 5)
    .add("Pure essence", 150, 5)
    .add("Grimy ranarr weed", 1, 5)
    .add("Coins", [500, 1109], 3)
    .add(RareDropTable_1.default, 1, 8)
    .add(RareDropTable_1.GemTable, 1, 10)
    .add(RareSeedTable_1.default, 1, 7);
exports.default = new SimpleMonster_1.default({
    id: 2266,
    name: "Dagannoth Prime",
    table: DagannothPrimeTable,
    aliases: ["prime", "dagannoth prime"],
});
