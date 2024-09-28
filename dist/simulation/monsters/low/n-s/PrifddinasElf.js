"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const Elf_1 = __importDefault(require("../a-f/Elf"));
const PrifddinasElfTable = new LootTable_1.default()
    .oneIn(35, "Crystal shard")
    .oneIn(1024, "Enhanced crystal teleport seed")
    .add(Elf_1.default.pickpocketTable, 1)
    .tertiary(99_175, "Rocky");
exports.default = new SimpleMonster_1.default({
    id: 9076,
    name: "Prifddinas Elf",
    pickpocketTable: PrifddinasElfTable,
    aliases: ["prif elf", "elf prif", "prifddinas elf"],
});
