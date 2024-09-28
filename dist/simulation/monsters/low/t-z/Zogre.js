"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZogreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.ZogreTable = new LootTable_1.default()
    .every("Zogre bones")
    .every("Ogre coffin key")
    .tertiary(5000, "Zombie champion scroll");
exports.default = new SimpleMonster_1.default({
    id: 866,
    name: "Zogre",
    table: exports.ZogreTable,
    aliases: ["zogre"],
});
