"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoosterTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.RoosterTable = new LootTable_1.default({ limit: 4 })
    .every("Bones")
    .every("Raw chicken")
    .add("Feather", 5, 2)
    .add("Feather", 15, 1);
exports.default = new SimpleMonster_1.default({
    id: 3663,
    name: "Rooster",
    table: exports.RoosterTable,
    aliases: ["rooster"],
});
