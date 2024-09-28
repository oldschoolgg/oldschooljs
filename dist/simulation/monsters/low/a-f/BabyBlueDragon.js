"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const BabyBlueDragonTable = new LootTable_1.default()
    .every("Babydragon bones")
    .tertiary(100, "Scaly blue dragonhide");
exports.default = new SimpleMonster_1.default({
    id: 241,
    name: "Baby blue Dragon",
    table: BabyBlueDragonTable,
    aliases: ["baby blue dragon", "baby blue drags"],
});
