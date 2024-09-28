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
exports.MammothTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = __importStar(require("../../../subtables/RareDropTable"));
const AllotmentSeedTable = new LootTable_1.default()
    .add("Potato seed", 3, 15)
    .add("Onion seed", 3, 10)
    .add("Cabbage seed", 3, 8)
    .add("Tomato seed", 3, 7)
    .add("Sweetcorn seed", 3, 5)
    .add("Strawberry seed", 3, 4)
    .add("Watermelon seed", 3, 1);
const BushSeedTable = new LootTable_1.default()
    .add("Redberry seed", 2, 6)
    .add("Cadavaberry seed", 2, 4)
    .add("Dwellberry seed", 2, 3)
    .add("Jangerberry seed", 2, 3)
    .add("Whiteberry seed", 2, 2)
    .add("Poison ivy seed", 2, 2);
const HopsSeedTable = new LootTable_1.default()
    .add("Barley seed", 4, 15)
    .add("Hammerstone seed", 4, 10)
    .add("Asgarnian seed", 4, 8)
    .add("Jute seed", 4, 7)
    .add("Yanillian seed", 4, 5)
    .add("Krandorian seed", 4, 4)
    .add("Wildblood seed", 4, 1);
const FruitTreeSeedTable = new LootTable_1.default()
    .add("Apple tree seed", 1, 18)
    .add("Banana tree seed", 1, 12)
    .add("Orange tree seed", 1, 10)
    .add("Curry tree seed", 1, 6)
    .add("Pineapple seed", 1, 3)
    .add("Papaya tree seed", 1, 1);
exports.MammothTable = new LootTable_1.default()
    .every("Big bones")
    .add(HerbDropTable_1.default, 1, 8)
    .add(AllotmentSeedTable, 1, 20)
    .add(BushSeedTable, 1, 20)
    .add(HopsSeedTable, 1, 20)
    .add(FruitTreeSeedTable, 1, 10)
    .add("Coins", 30, 13)
    .add("Coins", 180, 7)
    .add("Acorn", 1, 5)
    .add("Limpwurt seed", 2, 5)
    .add("Prayer potion(1)", 1, 5)
    .add("Steel arrow", 5, 5)
    .add("Lobster", 2, 3)
    .add("Dark fishing bait", 12, 2)
    .add(RareDropTable_1.default, 1, 2)
    .add(RareDropTable_1.GemTable, 1, 3)
    .oneIn(128, "Clue scroll (medium)")
    .oneIn(400, "Long bone")
    .oneIn(5013, "Curved bone");
exports.default = new SimpleMonster_1.default({
    id: 6604,
    name: "Mammoth",
    table: exports.MammothTable,
    aliases: ["mammoth"],
});
