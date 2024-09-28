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
exports.ElderChaosDruidTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = __importStar(require("../../../subtables/RareDropTable"));
const ZamorakRobesTable = new LootTable_1.default()
    .add("Zamorak monk top", 1, 4)
    .add("Zamorak monk top", 1, 4)
    .add("Elder chaos hood", 1, 1)
    .add("Elder chaos robe", 1, 1)
    .add("Elder chaos top", 1, 1);
exports.ElderChaosDruidTable = new LootTable_1.default()
    .every("Bones")
    .add(ZamorakRobesTable, 1, 1)
    .add("Law rune", 6, 7)
    .add("Mithril bolts", [8, 28], 6)
    .add("Air rune", 56, 5)
    .add("Body rune", 19, 5)
    .add("Chaos rune", 7, 5)
    .add("Earth rune", 19, 5)
    .add("Mind rune", 22, 5)
    .add("Nature rune", 12, 1)
    .add(HerbDropTable_1.default, 1, 15)
    .add(HerbDropTable_1.default, 2, 20)
    .add(HerbDropTable_1.default, 3, 15)
    .add(HerbDropTable_1.default, 4, 5)
    .add("Coins", 80, 7)
    .add("Coins", 250, 6)
    .add("Vial of water", 4, 10)
    .add("Steel longsword", 1, 5)
    .add("Dark fishing bait", [10, 24], 2)
    .add("Snape grass", 4, 1)
    .add("Unholy mould", 1, 1)
    .add(RareDropTable_1.default, 1, 1)
    .add(RareDropTable_1.GemTable, 1, 1)
    .tertiary(20, "Ensouled chaos druid head")
    .tertiary(128, "Clue scroll (hard)");
exports.default = new SimpleMonster_1.default({
    id: 6607,
    name: "Elder Chaos druid",
    table: exports.ElderChaosDruidTable,
    aliases: ["elder chaos druid"],
});
