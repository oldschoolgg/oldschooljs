"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GhoulTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.GhoulTable = new LootTable_1.default().tertiary(5000, "Ghoul champion scroll").every("Bones");
exports.default = new SimpleMonster_1.default({
    id: 289,
    name: "Ghoul",
    table: exports.GhoulTable,
    aliases: ["ghoul"],
});
