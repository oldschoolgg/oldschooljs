"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MogreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const UncommonSeedDropTable_1 = __importDefault(require("../../../subtables/UncommonSeedDropTable"));
exports.MogreTable = new LootTable_1.default()
    .every("Big bones")
    .add("Water rune", 5, 4)
    .add("Water rune", 7, 4)
    .add("Water rune", 14, 4)
    .add(UncommonSeedDropTable_1.default, 1, 13)
    .add("Raw swordfish", 1, 20)
    .add("Raw tuna", 1, 9)
    .add("Raw pike", 1, 7)
    .add("Raw salmon", 1, 4)
    .add("Raw herring", 1, 3)
    .add("Raw sardine", 1, 3)
    .add("Raw shark", 1, 3)
    .add("Fishing bait", 5, 30)
    .add("Fishing bait", 15, 10)
    .add("Mudskipper hat", 1, 5)
    .add("Oyster", 1, 3)
    .add("Flippers", 1, 2)
    .add("Seaweed", 1, 2)
    .add("Staff of water", 1, 1)
    .add("Fishbowl", 1, 1)
    .tertiary(400, "Long bone")
    .tertiary(5013, "Curved bone");
exports.default = new SimpleMonster_1.default({
    id: 2592,
    name: "Mogre",
    table: exports.MogreTable,
    aliases: ["mogre"],
});
