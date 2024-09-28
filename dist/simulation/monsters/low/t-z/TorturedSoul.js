"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TorturedSoulTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const UncommonSeedDropTable_1 = __importDefault(require("../../../subtables/UncommonSeedDropTable"));
exports.TorturedSoulTable = new LootTable_1.default({ limit: 128 })
    .add("Body rune", 7, 7)
    .add("Water rune", 6, 6)
    .add("Law rune", 2, 3)
    .add("Grimy harralander", 1, 5)
    .add("Grimy tarromin", 1, 3)
    .add("Grimy marrentill", 1, 2)
    .add("Grimy guam leaf", 1, 1)
    .add("Grimy ranarr weed", 1, 1)
    .add("Coins", 3, 30)
    .add("Coins", 2, 21)
    .add("Coins", 6, 3)
    .add("Coins", 5, 3)
    .add("Coins", 2, 2)
    .add("Coins", 12, 1)
    .add("Limpwurt root", 1, 3)
    .add("Vial of water", 1, 1)
    .add(UncommonSeedDropTable_1.default, 1, 20);
exports.default = new SimpleMonster_1.default({
    id: 2999,
    name: "Tortured soul",
    table: exports.TorturedSoulTable,
    aliases: ["tortured soul"],
});
