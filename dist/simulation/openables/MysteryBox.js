"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const SimpleOpenable_1 = __importDefault(require("../../structures/SimpleOpenable"));
const RareDropTable_1 = __importDefault(require("../subtables/RareDropTable"));
const ClueTable = new LootTable_1.default()
    .add("Clue scroll (easy)", 1, 5)
    .add("Clue scroll (medium)", 1, 3)
    .add("Clue scroll (hard)", 1, 2);
const MysteryBoxTable = new LootTable_1.default()
    .oneIn(256, "Stale baguette")
    .add(2528)
    .add("Cabbage")
    .add("Diamond")
    .add("Bucket")
    .add("Flyer")
    .add("Old boot")
    .add("Body rune")
    .add("Onion")
    .add("Mithril scimitar")
    .add("Casket")
    .add("Steel platebody")
    .add("Nature rune", 20)
    .add(ClueTable, 1, 2)
    .add(RareDropTable_1.default);
exports.default = new SimpleOpenable_1.default({
    id: 6199,
    name: "Mystery box",
    aliases: ["mystery box", "mystery"],
    table: MysteryBoxTable,
});
