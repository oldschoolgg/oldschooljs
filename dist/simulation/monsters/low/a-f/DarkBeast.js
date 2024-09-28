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
exports.DarkBeastPreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = __importStar(require("../../../subtables/RareDropTable"));
const RareSeedTable_1 = __importDefault(require("../../../subtables/RareSeedTable"));
const DBHerbTable = new LootTable_1.default().add(HerbDropTable_1.default, 1, 4).add(HerbDropTable_1.default, 2, 1);
exports.DarkBeastPreTable = new LootTable_1.default()
    .add("Black battleaxe", 1, 3)
    .add("Adamant sq shield", 1, 1)
    .add("Rune chainbody", 1, 1)
    .add("Rune med helm", 1, 1)
    .add("Rune full helm", 1, 1)
    .add("Rune 2h sword", 1, 1)
    .add("Rune battleaxe", 1, 1)
    .oneIn(512, "Dark bow")
    .add("Death rune", 20, 8)
    .add("Chaos rune", 30, 7)
    .add("Blood rune", 15, 4)
    .add(DBHerbTable, 1, 24)
    .add(RareSeedTable_1.default, 1, 4)
    .add("Coins", 152, 40)
    .add("Coins", 64, 6)
    .add("Coins", 95, 6)
    .add("Coins", 220, 5)
    .add("Shark", 1, 3)
    .add("Adamantite bar", 3, 2)
    .add("Adamantite ore", 5, 1)
    .add("Death talisman", 1, 1)
    .add("Runite ore", 1, 1)
    .add("Shark", 2, 1)
    .add(RareDropTable_1.default, 1, 3)
    .add(RareDropTable_1.GemTable, 1, 3);
const DarkBeastTable = new LootTable_1.default()
    .every("Big bones")
    .every(exports.DarkBeastPreTable)
    .tertiary(24, "Crystal shard")
    .tertiary(128, "Clue scroll (hard)")
    .tertiary(400, "Long bone")
    .tertiary(1200, "Clue scroll (elite)")
    .tertiary(5013, "Curved bone");
exports.default = new SimpleMonster_1.default({
    id: 4005,
    name: "Dark Beast",
    table: DarkBeastTable,
    aliases: ["dark beast", "dark b"],
});
