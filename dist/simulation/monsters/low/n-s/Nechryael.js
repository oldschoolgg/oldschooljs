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
exports.NechryaelPreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = __importStar(require("../../../subtables/RareDropTable"));
const RareSeedTable_1 = __importDefault(require("../../../subtables/RareSeedTable"));
exports.NechryaelPreTable = new LootTable_1.default()
    .add("Adamant platelegs", 1, 8)
    .add("Rune 2h sword", 1, 8)
    .add("Rune full helm", 1, 6)
    .add("Adamant kiteshield", 1, 4)
    .add("Rune boots", 1, 1)
    .add("Chaos rune", 37, 16)
    .add("Death rune", 5, 12)
    .add("Death rune", 10, 12)
    .add("Law rune", [25, 35], 10)
    .add("Blood rune", [15, 20], 8)
    .add("Limpwurt seed", 1, 12)
    .add(RareSeedTable_1.default, 2, 36)
    .add("Coins", [1000, 1499], 26)
    .add("Coins", [1500, 2000], 21)
    .add("Coins", [2500, 2999], 12)
    .add("Coins", [3000, 3500], 6)
    .add("Coins", [500, 999], 5)
    .add("Coins", 5000, 2)
    .add("Soft clay", 25, 8)
    .add("Tuna", 1, 6)
    .add(RareDropTable_1.default, 1, 2)
    .add(RareDropTable_1.GemTable, 1, 10);
const NechryaelTable = new LootTable_1.default()
    .every("Malicious ashes")
    .every(exports.NechryaelPreTable)
    .tertiary(128, "Clue scroll (hard)");
exports.default = new SimpleMonster_1.default({
    id: 8,
    name: "Nechryael",
    table: NechryaelTable,
    aliases: ["nechryael", "nech", "nechs"],
});
