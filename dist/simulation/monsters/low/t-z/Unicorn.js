"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnicornTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.UnicornTable = new LootTable_1.default().every("Bones").every("Unicorn horn").tertiary(35, "Ensouled unicorn head");
exports.default = new SimpleMonster_1.default({
    id: 2837,
    name: "Unicorn",
    table: exports.UnicornTable,
    aliases: ["unicorn"],
});
