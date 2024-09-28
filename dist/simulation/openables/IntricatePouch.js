"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const SimpleOpenable_1 = __importDefault(require("../../structures/SimpleOpenable"));
const PreRoll = new LootTable_1.default()
    .oneIn(15, "Lamp")
    .oneIn(40, "Tarnished locket")
    .oneIn(60, "Lost bag")
    .oneIn(200, "Blood essence");
const IntricatePouchTable = new LootTable_1.default()
    .every(PreRoll)
    .add("Astral rune", [150, 200], 5)
    .add("Blood rune", [150, 200], 5)
    .add("Chaos rune", [200, 300], 5)
    .add("Cosmic rune", [200, 300], 5)
    .add("Death rune", [150, 200], 5)
    .add("Law rune", [200, 250], 5)
    .add("Nature rune", [200, 300], 5)
    .add("Soul rune", [150, 200], 5)
    .add("Shield left half", 1, 1)
    .add("Dragon spear", 1, 1)
    .add("Crystal key", 1, 1)
    .add("Dragon med helm", 1, 1)
    .add("Pure essence", [500, 1000], 1)
    .tertiary(10, "Clue scroll (hard)");
exports.default = new SimpleOpenable_1.default({
    id: 26_908,
    name: "Intricate pouch",
    aliases: ["intricate pouch", "intri pouch", "int pouch"],
    table: IntricatePouchTable,
});
