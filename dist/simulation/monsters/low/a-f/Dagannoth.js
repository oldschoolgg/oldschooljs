"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const RareSeedTable_1 = __importDefault(require("../../../subtables/RareSeedTable"));
const DagannothTable = new LootTable_1.default()
    .every("Bones")
    .add("Iron spear", 1, 6)
    .add("Bronze spear", 1, 5)
    .add("Mithril spear", 1, 1)
    .add("Water rune", 15, 4)
    .add("Steel arrow", 15, 2)
    .add("Mithril javelin", 3, 1)
    .add(RareSeedTable_1.default, 1, 18)
    .add("Lobster pot", 1, 12)
    .add("Raw herring", 3, 4)
    .add("Raw sardine", 5, 4)
    .add("Harpoon", 1, 3)
    .add("Feather", 15, 2)
    .add("Fishing bait", 50, 2)
    .add("Raw lobster", 1, 2)
    .add("Raw tuna", 1, 2)
    .add("Seaweed", 10, 2)
    .add("Oyster pearls", 1, 1)
    .add("Oyster pearl", 2, 1)
    .add("Coins", 56, 29)
    .add("Coins", 25, 9)
    .add("Coins", 44, 8)
    .add("Coins", 41, 6)
    .add("Opal bolt tips", 12, 2)
    .add("Casket", 1, 1)
    .add(RareDropTable_1.GemTable, 1, 1)
    .tertiary(40, "Ensouled dagannoth head")
    .tertiary(128, "Clue scroll (medium)");
exports.default = new SimpleMonster_1.default({
    id: 3185,
    name: "Dagannoth",
    table: DagannothTable,
    aliases: ["dagannoth"],
});
