"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const BabyRedDragonTable = new LootTable_1.default().every("Babydragon bones");
exports.default = new SimpleMonster_1.default({
    id: 137,
    name: "Baby red Dragon",
    table: BabyRedDragonTable,
    aliases: ["baby red dragon", "baby red drags"],
});
