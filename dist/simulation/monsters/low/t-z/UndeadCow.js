"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UndeadCowTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.UndeadCowTable = new LootTable_1.default().every("Bones").every("Cowhide").every(4287);
exports.default = new SimpleMonster_1.default({
    id: 2992,
    name: "Undead cow",
    table: exports.UndeadCowTable,
    aliases: ["undead cow"],
});
