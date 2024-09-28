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
const DagannothSupremeTable = new LootTable_1.default()
    .every("Dagannoth bones")
    .every("Dagannoth hide")
    .tertiary(20, "Ensouled dagannoth head")
    .tertiary(42, "Clue scroll (hard)")
    .tertiary(750, "Clue scroll (elite)")
    .tertiary(5000, "Pet dagannoth supreme")
    .add("Mithril knife", [25, 50], 10)
    .add("Red d'hide vambraces", 1, 7)
    .add("Rune thrownaxe", [5, 10], 5)
    .add("Adamant dart", [10, 25], 5)
    .add("Iron knife", [200, 500], 5)
    .add("Steel knife", [50, 150], 5)
    .add("Fremennik blade")
    .add("Fremennik shield")
    .add("Fremennik helm")
    .add("Seercull")
    .add("Dragon axe")
    .add("Archer helm")
    .add("Spined body")
    .add("Spined chaps")
    .add("Archers ring")
    .add("Steel arrow", [50, 250], 5)
    .add("Runite bolts", [2, 12], 5)
    .add("Iron arrow", [200, 700], 4)
    .add("Coins", [500, 1109], 10)
    .add("Oyster pearls", 1, 6)
    .add("Opal bolt tips", [10, 30], 5)
    .add("Shark", 5, 5)
    .add("Yew logs", [50, 150], 5)
    .add("Grimy ranarr weed", 1, 5)
    .add("Maple logs", [15, 65], 3)
    .add("Runite limbs", 1, 2)
    .add("Feather", [250, 500], 1)
    .add(RareDropTable_1.default, 1, 8)
    .add(RareDropTable_1.GemTable, 1, 10)
    .add(RareSeedTable_1.default, 1, 7)
    .add(TalismanTable_1.default);
exports.default = new SimpleMonster_1.default({
    id: 2265,
    name: "Dagannoth Supreme",
    table: DagannothSupremeTable,
    aliases: ["supreme", "dagannoth supreme"],
});
