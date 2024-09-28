"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CyclopseTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const UncommonSeedDropTable_1 = __importDefault(require("../../../subtables/UncommonSeedDropTable"));
exports.CyclopseTable = new LootTable_1.default()
    .every("Big bones")
    .add("Black knife", [4, 13], 16)
    .add("Steel chainbody", 1, 2)
    .add("Iron 2h sword", 1, 2)
    .add("Iron chainbody", 1, 2)
    .add("Steel dagger", 1, 2)
    .add("Steel mace", 1, 2)
    .add("Steel sword", 1, 2)
    .add("Steel battleaxe", 1, 2)
    .add("Steel 2h sword", 1, 2)
    .add("Steel longsword", 1, 2)
    .add("Steel med helm", 1, 2)
    .add("Black 2h sword", 1, 1)
    .add("Mithril dagger", 1, 1)
    .add("Adamant mace", 1, 1)
    .add("Black sword", 1, 1)
    .add("Black longsword", 1, 1)
    .add("Black dagger", 1, 1)
    .add("Adamant 2h sword", 1, 1)
    .add(HerbDropTable_1.default, 1, 3)
    .add(UncommonSeedDropTable_1.default, 1, 1)
    .add("Coins", [3, 102], 31)
    .add("Coins", [5, 204], 10)
    .add(RareDropTable_1.GemTable, 1, 2)
    .tertiary(400, "Long bone")
    .tertiary(512, "Clue scroll (hard)")
    .tertiary(5013, "Curved bone");
exports.default = new SimpleMonster_1.default({
    id: 2097,
    name: "Cyclops",
    table: exports.CyclopseTable,
    aliases: ["cyclops"],
});
