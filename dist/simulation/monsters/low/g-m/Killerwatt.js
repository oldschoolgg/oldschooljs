"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KillerwattTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.KillerwattTable = new LootTable_1.default()
    .every("Ashes")
    .add("Staff of fire", 1, 2)
    .add("Staff of air", 1, 2)
    .add("Fire battlestaff", 1, 1)
    .add("Air battlestaff", 1, 1)
    .oneIn(512, "Mystic firestaff")
    .add("Nature rune", 8, 11)
    .add("Chaos rune", 4, 9)
    .add("Fire rune", 45, 8)
    .add("Fire rune", 18, 5)
    .add("Air rune", 5, 3)
    .add("Death rune", 2, 3)
    .add("Air rune", 17, 2)
    .add("Steam rune", 2, 2)
    .add("Cannonball", 3, 2)
    .add("Nature rune", 37, 1)
    .add(HerbDropTable_1.default, 1, 35)
    .add("Coins", 44, 28)
    .add("Coins", 11, 23)
    .add("Coins", 200, 11)
    .add("Coins", 76, 1)
    .add("Coins", 127, 1)
    .add("Fire orb", 2, 1)
    .add("Soda ash", 4, 1)
    .add(RareDropTable_1.GemTable, 1, 5);
exports.default = new SimpleMonster_1.default({
    id: 469,
    name: "Killerwatt",
    table: exports.KillerwattTable,
    aliases: ["killerwatt"],
});
