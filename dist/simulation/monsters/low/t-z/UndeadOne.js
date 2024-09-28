"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UndeadOneTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const ScrollTable = new LootTable_1.default().add("Skeleton champion scroll").add("Zombie champion scroll");
exports.UndeadOneTable = new LootTable_1.default().every("Bones").tertiary(5000, ScrollTable);
exports.default = new SimpleMonster_1.default({
    id: 5342,
    name: "Undead one",
    table: exports.UndeadOneTable,
    aliases: ["undead one"],
});
