"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmadylianGuardTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
exports.ArmadylianGuardTable = new LootTable_1.default()
    .every("Bones")
    .add("Rune thrownaxe", 6, 3)
    .add("Rune spear", 1, 1)
    .oneIn(1_000_000, "Armadyl helmet")
    .oneIn(1_000_000, "Bandos boots")
    .add("Nature rune", 20, 5)
    .add("Blood rune", 20, 5)
    .add("Cosmic rune", 20, 5)
    .add(HerbDropTable_1.default, 1, 10)
    .add("Coins", 35, 37)
    .add("Coins", 350, 12)
    .add("Headless arrow", 30, 10)
    .add("Coal", 1, 7)
    .add("Hammer", 1, 5)
    .add("Feather", 30, 5)
    .add("Shark", 1, 3)
    .add("Adamantite bar", 5, 1)
    .add(RareDropTable_1.GemTable, 1, 9);
exports.default = new SimpleMonster_1.default({
    id: 6587,
    name: "Armadylian Guard",
    table: exports.ArmadylianGuardTable,
    aliases: ["armadylian guard", "arma guard"],
});
