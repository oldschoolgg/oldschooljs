"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaveSlimeTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.CaveSlimeTable = new LootTable_1.default()
    .every("Swamp tar", [1, 6])
    .tertiary(128, "Clue scroll (easy)")
    .add(RareDropTable_1.GemTable, 1, 4)
    .add("Iron sword", 1, 7)
    .add("Bronze axe", 1, 3)
    .add("Iron kiteshield", 1, 2)
    .add("Bronze full helm")
    .add("Iron boots")
    .add("Water rune", 15, 5)
    .add("Earth rune", 5, 3)
    .add("Coins", 10, 39)
    .add("Coins", 4, 30)
    .add("Coins", 22, 10)
    .add("Coins", 1, 7)
    .add("Coins", 46, 2)
    .add("Unlit torch", 1, 1)
    .add("Gold bar", 1, 2)
    .add("Oil lantern frame", 1, 1);
exports.default = new SimpleMonster_1.default({
    id: 480,
    name: "Cave Slime",
    table: exports.CaveSlimeTable,
    aliases: ["cave slime"],
});
