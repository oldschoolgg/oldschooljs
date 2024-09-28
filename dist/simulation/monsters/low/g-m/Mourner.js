"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const MournerTable = new LootTable_1.default()
    .every("Bones")
    .every("Mourner cloak")
    .every("Mourner boots")
    .every("Mourner gloves")
    .every("Gas mask")
    .every("Mourner trousers");
exports.default = new SimpleMonster_1.default({
    id: 8844,
    name: "Mourner",
    table: MournerTable,
    aliases: ["mourner"],
});
