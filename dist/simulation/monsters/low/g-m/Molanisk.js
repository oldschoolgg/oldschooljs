"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = __importDefault(require("../../../subtables/RareDropTable"));
const MolaniskTable = new LootTable_1.default()
    .every("Bones")
    .add("Water rune", [1, 14], 10)
    .add("Earth rune", [1, 20], 10)
    .add("Cosmic rune", [1, 7], 5)
    .add("Nature rune", [1, 5], 3)
    .add("Mud rune", [1, 15], 2)
    .add(HerbDropTable_1.default, 1, 32)
    .add("Swamp weed", [1, 4], 37)
    .add("Swamp weed", [5, 8], 10)
    .add("Coins", [1, 75], 10)
    .add("Mole claw", 1, 1)
    .add(RareDropTable_1.default, 1, 7)
    .tertiary(128, "Clue scroll (easy)");
exports.default = new SimpleMonster_1.default({
    id: 1,
    name: "Molanisk",
    table: MolaniskTable,
    aliases: ["molanisk"],
});
