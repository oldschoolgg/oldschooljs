"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.default = new SimpleMonster_1.default({
    id: 4863,
    name: "Jubbly bird",
    table: new LootTable_1.default().every("Big bones").every("Raw jubbly").add("Feather", [25, 32]),
    aliases: ["jubbly bird", "jubbly"],
});
