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
const KalphiteGuardianTable = new LootTable_1.default({ limit: 128 })
    .add("Mithril sword", 1, 4)
    .add("Steel battleaxe", 1, 3)
    .add("Mithril axe", 1, 2)
    .add("Adamant dagger", 1, 2)
    .add("Mithril kiteshield", 1, 1)
    .add("Rune med helm", 1, 1)
    .add("Rune chainbody", 1, 1)
    .add("Air rune", 50, 8)
    .add("Chaos rune", 10, 7)
    .add("Blood rune", 7, 4)
    .add("Fire rune", 37, 1)
    .add("Law rune", 3, 1)
    .add(HerbDropTable_1.default, 1, 23)
    .add("Coins", 132, 40)
    .add("Coins", 30, 7)
    .add("Coins", 44, 6)
    .add("Coins", 220, 6)
    .add("Coins", 460, 1)
    .add("Lobster", 1, 3)
    .add("Defence potion(3)", 1, 1)
    .add(RareDropTable_1.default, 1, 1)
    .add(RareDropTable_1.GemTable, 1, 5)
    .tertiary(35, "Ensouled kalphite head");
exports.default = new SimpleMonster_1.default({
    id: 959,
    name: "Kalphite Guardian",
    table: KalphiteGuardianTable,
    aliases: ["kalphite guardian"],
});
