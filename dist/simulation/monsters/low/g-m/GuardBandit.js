"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardBanditTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.GuardBanditTable = new LootTable_1.default().every("Bones");
exports.default = new SimpleMonster_1.default({
    id: 1027,
    name: "Guard Bandit",
    table: exports.GuardBanditTable,
    aliases: ["guard bandit"],
});
