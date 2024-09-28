"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonkeyZombieTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.MonkeyZombieTable = new LootTable_1.default().every("Monkey bones");
exports.default = new SimpleMonster_1.default({
    id: 5281,
    name: "Monkey Zombie",
    table: exports.MonkeyZombieTable,
    aliases: ["monkey zombie"],
});
