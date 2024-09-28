"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WildDogTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.WildDogTable = new LootTable_1.default().every("Bones").tertiary(25, "Ensouled dog head");
exports.default = new SimpleMonster_1.default({
    id: 112,
    name: "Wild dog",
    table: exports.WildDogTable,
    aliases: ["wild dog"],
});
