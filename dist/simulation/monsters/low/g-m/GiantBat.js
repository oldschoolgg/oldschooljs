"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiantBatTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.GiantBatTable = new LootTable_1.default().every("Bat bones");
exports.default = new SimpleMonster_1.default({
    id: 2834,
    name: "Giant Bat",
    table: exports.GiantBatTable,
    aliases: ["giant bat"],
});
