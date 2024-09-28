"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const CommonSeedDropTable_1 = __importDefault(require("../../../subtables/CommonSeedDropTable"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = __importDefault(require("../../../subtables/RareDropTable"));
const ZygomiteTable = new LootTable_1.default()
    .every("Ashes")
    .add("Steel axe", 1, 10)
    .add("Steel 2h sword", 1, 10)
    .add("Mithril full helm", 1, 5)
    .add("Rune full helm", 1, 5)
    .add("Nature rune", 5, 15)
    .add("Law rune", [10, 20], 10)
    .add("Earth rune", 15, 10)
    .add(HerbDropTable_1.default, 1, 16)
    .add(CommonSeedDropTable_1.default, 1, 10)
    .add("Coins", [44, 460], 9)
    .add("Supercompost", [1, 3], 7)
    .add("Mort myre fungus", [1, 5], 7)
    .add("Clay", 1, 7)
    .add("Fungicide", 1, 7)
    .add(RareDropTable_1.default, 1, 1);
exports.default = new SimpleMonster_1.default({
    id: 537,
    name: "Zygomite",
    table: ZygomiteTable,
    aliases: ["mutated zygomite", "zygomite"],
});
