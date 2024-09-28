"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManiacalMonkeyTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.ManiacalMonkeyTable = new LootTable_1.default()
    .every("Small ninja monkey bones")
    .add("Steel scimitar", 1, 2)
    .add("Maple shortbow", 1, 1)
    .add("Oak plank", 1, 3)
    .add("Grimy guam leaf", 1, 2)
    .add("Bass", 2, 4)
    .add("Banana", 1, 2)
    .add("Antipoison(2)", 1, 2)
    .add("Prayer potion(1)", 1, 2)
    .add("Adamant arrow(p++)", 1, 1)
    .add("Rope", 1, 1);
exports.default = new SimpleMonster_1.default({
    id: 7118,
    name: "Maniacal monkey",
    table: exports.ManiacalMonkeyTable,
    aliases: ["maniacal monkey", "maniacal", "mm"],
});
