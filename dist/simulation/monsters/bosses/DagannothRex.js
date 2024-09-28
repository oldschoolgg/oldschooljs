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
const TalismanTable_1 = __importDefault(require("../../subtables/TalismanTable"));
const DagannothRexTable = new LootTable_1.default()
    .every("Dagannoth bones")
    .every("Dagannoth hide")
    .tertiary(20, "Ensouled dagannoth head")
    .tertiary(42, "Clue scroll (hard)")
    .tertiary(750, "Clue scroll (elite)")
    .tertiary(5000, "Pet dagannoth Rex")
    .add("Steel kiteshield", 1, 17)
    .add("Mithril warhammer", 1, 11)
    .add("Adamant axe", 1, 7)
    .add("Steel platebody", 1, 4)
    .add("Mithril pickaxe", 1, 3)
    .add("Adamant platebody", 1, 2)
    .add("Fremennik blade", 1, 2)
    .add("Rune axe")
    .add("Fremennik shield")
    .add("Fremennik helm")
    .add("Mithril 2h sword")
    .add("Dragon axe")
    .add("Ring of life")
    .add("Rock-shell plate")
    .add("Rock-shell legs")
    .add("Berserker ring")
    .add("Warrior ring")
    .add("Antifire potion(2)")
    .add("Prayer potion(2)")
    .add("Restore potion(2)")
    .add("Super attack(2)")
    .add("Super strength(2)")
    .add("Super defence(2)")
    .add("Zamorak brew(2)")
    .add("Mithril ore", 25, 10)
    .add("Adamantite bar", 1, 3)
    .add("Coal", 100, 2)
    .add("Iron ore", 150, 1)
    .add("Steel bar", [15, 30], 1)
    .add("Coins", [500, 1109], 10)
    .add("Grimy ranarr weed", 1, 7)
    .add("Bass", 5, 7)
    .add("Swordfish", 5, 4)
    .add("Shark", 5, 1)
    .add(RareDropTable_1.default, 1, 8)
    .add(RareDropTable_1.GemTable, 1, 10)
    .add(TalismanTable_1.default);
exports.default = new SimpleMonster_1.default({
    id: 2267,
    name: "Dagannoth Rex",
    table: DagannothRexTable,
    aliases: ["rex", "dagannoth rex"],
});
