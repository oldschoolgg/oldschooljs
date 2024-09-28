"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UriumShadeTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.UriumShadeTable = new LootTable_1.default().every("Urium remains");
exports.default = new SimpleMonster_1.default({
    id: 10_589,
    name: "Urium Shade",
    table: exports.UriumShadeTable,
    aliases: ["urium shade", "urium"],
});
