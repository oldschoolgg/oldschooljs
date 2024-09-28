"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const ClubOrSpearTable = new LootTable_1.default().add("Bone club").add("Bone spear");
const CaveGoblinGuardTable = new LootTable_1.default({ limit: 128 })
    .every("Bones")
    .tertiary(5000, "Goblin champion scroll")
    .add(ClubOrSpearTable, 1, 20)
    .add("Iron chainbody", 1, 20)
    .add("Coins", 12, 20)
    .add("Oil lantern", 1, 20)
    .add("Tinderbox", 1, 20);
exports.default = new SimpleMonster_1.default({
    id: 5334,
    name: "Cave goblin guard",
    table: CaveGoblinGuardTable,
    aliases: ["cave goblin guard"],
});
