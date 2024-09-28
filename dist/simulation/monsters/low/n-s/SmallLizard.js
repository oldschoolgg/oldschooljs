"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallLizardTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const FixedAllotmentSeedTable_1 = __importDefault(require("../../../subtables/FixedAllotmentSeedTable"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const HerbFireRuneTable = new LootTable_1.default().every(HerbDropTable_1.default).every("Fire rune", 42);
const SeedWaterskinTable = new LootTable_1.default().every(FixedAllotmentSeedTable_1.default).every("Waterskin(0)", 2);
exports.SmallLizardTable = new LootTable_1.default()
    .every("Bones")
    .oneIn(512, "Mystic gloves (light)")
    .add("Fire rune", 5, 30)
    .add("Fire rune", 42, 14)
    .add("Nature rune", 5, 4)
    .add(HerbFireRuneTable, 1, 10)
    .add(SeedWaterskinTable, 1, 9)
    .add("Iron ore", 1, 22)
    .add("Coal", 1, 13)
    .add("Tin ore", 1, 4)
    .add("Copper ore", 1, 3)
    .add("Silver ore", 1, 3)
    .add("Silver bar", 1, 2)
    .add("Mithril ore")
    .add("Kebab", 1, 13)
    .add("Waterskin(0)", 2, 13)
    .add(RareDropTable_1.GemTable, 1, 4)
    .add(RareDropTable_1.GemTable, 2, 2);
exports.default = new SimpleMonster_1.default({
    id: 463,
    name: "Small Lizard",
    table: exports.SmallLizardTable,
    aliases: ["small lizard"],
});
