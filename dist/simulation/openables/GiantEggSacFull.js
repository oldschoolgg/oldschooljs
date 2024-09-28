"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const SimpleOpenable_1 = __importDefault(require("../../structures/SimpleOpenable"));
const GiantEggSacFullTable = new LootTable_1.default().every("Red spiders' eggs", 100);
exports.default = new SimpleOpenable_1.default({
    id: 23_517,
    name: "Giant egg sac(full)",
    aliases: ["giant egg sac(full)", "giant egg sac full"],
    table: GiantEggSacFullTable,
});
