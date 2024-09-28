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
const RareSeedTable_1 = __importDefault(require("../../../subtables/RareSeedTable"));
const ScarabMageTable = new LootTable_1.default({ limit: 128 })
    .every("Bones")
    .add("Adamant kiteshield", 1, 3)
    .add("Battlestaff", 3, 2)
    .add("Rune dagger", 1, 2)
    .add("Rune mace", 1, 1)
    .add("Rune sq shield", 1, 1)
    .add("Adamant arrow", 36, 4)
    .add("Blood rune", 18, 4)
    .add("Fire rune", 250, 2)
    .add("Cosmic rune", 35, 2)
    .add("Lava rune", 150, 2)
    .add("Rune arrow", 18, 2)
    .add(HerbDropTable_1.default, 1, 20)
    .add(RareSeedTable_1.default, 1, 2)
    .add("Raw lobster", 15, 7)
    .add("Coal", 32, 6)
    .add("Raw bass", 24, 4)
    .add("Uncut sapphire", 4, 3)
    .add("Adamantite ore", 14, 2)
    .add("Desert goat horn", 6, 2)
    .add("Mithril bar", 22, 2)
    .add("Coins", [2000, 3000], 32)
    .add("Bass", 6, 4)
    .add("Waterskin(4)", 1, 1)
    .add("Lobster", 5, 1)
    .add("Marrentill tar", 80, 1)
    .add(RareDropTable_1.default, 1, 1)
    .add(RareDropTable_1.GemTable, 1, 15);
exports.default = new SimpleMonster_1.default({
    id: 794,
    name: "Scarab Mage",
    table: ScarabMageTable,
    aliases: ["scarab mage", "scarab"],
});
