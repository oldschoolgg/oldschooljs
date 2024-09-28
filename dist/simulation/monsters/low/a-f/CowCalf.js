"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowCalfTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.CowCalfTable = new LootTable_1.default()
    .every("Bones")
    .every("Cowhide")
    .every("Raw beef")
    .tertiary(128, "Clue scroll (beginner)");
exports.default = new SimpleMonster_1.default({
    id: 2792,
    name: "Cow calf",
    table: exports.CowCalfTable,
    aliases: ["cow calf"],
});
