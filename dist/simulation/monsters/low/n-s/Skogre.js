"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkogreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.SkogreTable = new LootTable_1.default().every("Zogre bones").every("Ogre coffin key");
exports.default = new SimpleMonster_1.default({
    id: 878,
    name: "Skogre",
    table: exports.SkogreTable,
    aliases: ["skogre"],
});
