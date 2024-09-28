"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PirateTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.PirateTable = new LootTable_1.default({ limit: 128 })
    .every("Bones")
    .add("Iron bolts", [2, 12], 10)
    .add("Iron dagger", 1, 6)
    .add("Bronze scimitar", 1, 4)
    .add("Iron platebody", 1, 1)
    .add("Chaos rune", 2, 6)
    .add("Nature rune", 2, 5)
    .add("Bronze arrow", 9, 3)
    .add("Bronze arrow", 12, 2)
    .add("Air rune", 10, 2)
    .add("Earth rune", 9, 2)
    .add("Fire rune", 5, 2)
    .add("Law rune", 2, 1)
    .add("Coins", 4, 29)
    .add("Coins", 25, 13)
    .add("Coins", 7, 8)
    .add("Coins", 12, 6)
    .add("Coins", 35, 4)
    .add("Coins", 55, 1)
    .add("Right eye patch", 1, 12)
    .add("Chef's hat", 1, 1)
    .add("Iron bar", 1, 1)
    .add(RareDropTable_1.GemTable, 1, 1);
exports.default = new SimpleMonster_1.default({
    id: 521,
    name: "Pirate",
    table: exports.PirateTable,
    aliases: ["pirate"],
});
