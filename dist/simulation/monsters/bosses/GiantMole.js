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
const GiantMoleTable = new LootTable_1.default()
    .every("Big bones")
    .every("Mole claw", 1)
    .every("Mole skin", [1, 3])
    .tertiary(400, "Long bone")
    .tertiary(500, "Clue scroll (elite)")
    .tertiary(3000, "Baby mole")
    .tertiary(5013, "Curved bone")
    .add("Adamant longsword", 1, 10)
    .add("Mithril platebody", 1, 9)
    .add("Amulet of strength", 1, 7)
    .add("Mithril axe", 1, 2)
    .add("Mithril battleaxe")
    .add("Rune med helm")
    .add("Air rune", 105, 20)
    .add("Blood rune", 15, 19)
    .add("Fire rune", 105, 11)
    .add("Death rune", 7, 3)
    .add("Law rune", 15, 5)
    .add("Iron arrow", 690, 10)
    .add("Yew logs", 100, 10)
    .add("Shark", 4, 4)
    .add("Mithril bar", 1, 3)
    .add("Iron ore", 100, 2)
    .add("Oyster pearls")
    .add(RareDropTable_1.default, 1, 4)
    .add(RareDropTable_1.GemTable, 1, 5);
exports.default = new SimpleMonster_1.default({
    id: 5779,
    name: "Giant Mole",
    table: GiantMoleTable,
    aliases: ["mole", "giant mole"],
});
