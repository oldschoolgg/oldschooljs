"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChompyBirdTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.ChompyBirdTable = new LootTable_1.default().every("Bones").every("Raw chompy").oneIn(500, "Chompy chick");
exports.default = new SimpleMonster_1.default({
    id: 1475,
    name: "Chompy bird",
    table: exports.ChompyBirdTable,
    aliases: ["chompy", "chompy bird"],
});
