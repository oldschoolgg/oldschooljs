"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const CommonSeedDropTable_1 = __importDefault(require("../../../subtables/CommonSeedDropTable"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.JogreTable = new LootTable_1.default({ limit: 129 })
    .tertiary(5000, "Jogre champion scroll")
    .tertiary(129, "Clue scroll (medium)")
    .every("Jogre bones")
    .add("Bronze spear", 1, 30)
    .add("Iron spear", 1, 4)
    .add("Nature rune", 2, 10)
    .add("Nature rune", 10, 2)
    .add("Nature rune", 5, 2)
    .add("Steel javelin", 5, 2)
    .add(HerbDropTable_1.default, 1, 6)
    .add(CommonSeedDropTable_1.default, 1, 15)
    .add(RareDropTable_1.GemTable, 1, 1)
    .add("Trading sticks", 22, 27)
    .add("Pineapple", 2, 8)
    .add("Knife", 1, 5)
    .add("Bones", 1, 3)
    .add("Big bones", 1, 3)
    .add("Big bones", 3, 2)
    .add("Bones", 1, 2);
exports.default = new SimpleMonster_1.default({
    id: 2094,
    name: "Jogre",
    table: exports.JogreTable,
    aliases: ["jogre"],
});
