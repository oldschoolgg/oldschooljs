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
const SteelDragonTable = new LootTable_1.default({ limit: 128 })
    .every("Dragon bones")
    .every("Steel bar", 5)
    .add("Rune dart(p)", 12, 7)
    .add("Rune mace", 1, 4)
    .add("Rune knife", 7, 3)
    .add("Adamant kiteshield", 1, 2)
    .add("Rune axe", 1, 2)
    .add("Rune full helm", 1, 1)
    .oneIn(512, "Dragon plateskirt")
    .oneIn(512, "Dragon platelegs")
    .add("Rune javelin", 7, 20)
    .add("Blood rune", 20, 19)
    .add("Runite bolts", [2, 12], 6)
    .add("Soul rune", 5, 5)
    .add("Coins", 470, 17)
    .add("Super attack(3)", 1, 13)
    .add("Runite limbs", 1, 8)
    .add("Dragon javelin heads", 12, 5)
    .add("Runite bar", 1, 3)
    .add("Super defence(2)", 1, 3)
    .add("Curry", 1, 1)
    .add("Curry", 2, 1)
    .add(RareDropTable_1.default, 1, 4)
    .add(RareDropTable_1.GemTable, 1, 4)
    .tertiary(64, "Clue scroll (hard)")
    .tertiary(500, "Clue scroll (elite)")
    .tertiary(10_000, "Draconic visage");
exports.default = new SimpleMonster_1.default({
    id: 8086,
    name: "Steel Dragon",
    table: SteelDragonTable,
    aliases: ["steel dragon"],
});
