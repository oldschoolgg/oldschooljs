"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const SuqahTable = new LootTable_1.default({ limit: 129 })
    .every("Big bones")
    .every("Suqah hide")
    .add("Suqah tooth", 1, 69)
    .add("Grimy guam leaf", 1, 30)
    .add("Grimy marrentill", 1, 25)
    .add(RareDropTable_1.GemTable, 1, 5)
    .tertiary(129, "Clue scroll (hard)")
    .tertiary(400, "Long bone")
    .tertiary(5013, "Curved bone");
exports.default = new SimpleMonster_1.default({
    id: 787,
    name: "Suqah",
    table: SuqahTable,
    aliases: ["suqah"],
});
