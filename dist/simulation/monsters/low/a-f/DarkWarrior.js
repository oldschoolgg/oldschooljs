"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkWarriorTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
exports.DarkWarriorTable = new LootTable_1.default({ limit: 128 })
    .every("Bones")
    .add("Bronze med helm", 1, 3)
    .add("Iron mace", 1, 1)
    .add("Black med helm", 1, 1)
    .add("Black mace", 1, 1)
    .add("Bronze arrow", 8, 4)
    .add("Mind rune", 2, 3)
    .add("Water rune", 3, 2)
    .add("Nature rune", 3, 2)
    .add("Earth rune", 2, 1)
    .add("Chaos rune", 2, 1)
    .add(HerbDropTable_1.default, 1, 3)
    .add("Coins", 1, 31)
    .add("Coins", 2, 20)
    .add("Coins", 6, 20)
    .add("Coins", 13, 7)
    .add("Coins", 20, 6)
    .add("Coins", 30, 2)
    .add("Iron ore", 1, 1)
    .add("Sardine", 1, 1);
exports.default = new SimpleMonster_1.default({
    id: 531,
    name: "Dark warrior",
    table: exports.DarkWarriorTable,
    aliases: ["dark warrior"],
});
