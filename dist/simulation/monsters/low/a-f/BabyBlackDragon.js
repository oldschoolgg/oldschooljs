"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const BabyBlackDragon = new LootTable_1.default().every("Babydragon bones");
exports.default = new SimpleMonster_1.default({
    id: 1871,
    name: "Baby black Dragon",
    table: BabyBlackDragon,
    aliases: ["baby black dragon", "baby black drags"],
});
