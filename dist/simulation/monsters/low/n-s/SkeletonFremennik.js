"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkeletonFremennikTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const UncommonSeedDropTable_1 = __importDefault(require("../../../subtables/UncommonSeedDropTable"));
exports.SkeletonFremennikTable = new LootTable_1.default()
    .every("Bones")
    .tertiary(5000, "Skeleton champion scroll")
    .add("Steel med helm", 1, 6)
    .add("Steel sword", 1, 4)
    .add("Black axe", 1, 2)
    .add("Mithril scimitar", 1, 1)
    .add("Air rune", 60, 3)
    .add("Chaos rune", 9, 3)
    .add("Water rune", 20, 3)
    .add("Law rune", 2, 2)
    .add("Mithril arrow", 8, 2)
    .add("Cosmic rune", 4, 1)
    .add(UncommonSeedDropTable_1.default, 1, 20)
    .add("Coins", 80, 23)
    .add("Coins", 20, 22)
    .add("Coins", 50, 8)
    .add("Coins", 90, 4)
    .add("Coins", 185, 3)
    .add("Coins", 200, 2)
    .add("Mithril bar", 1, 5)
    .add(RareDropTable_1.GemTable);
exports.default = new SimpleMonster_1.default({
    id: 4498,
    name: "Skeleton fremennik",
    table: exports.SkeletonFremennikTable,
    aliases: ["skeleton fremennik"],
});
