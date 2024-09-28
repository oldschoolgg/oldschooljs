"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AberrantSpectrePreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const RareSeedTable_1 = __importDefault(require("../../../subtables/RareSeedTable"));
const AberrantSpectreHerbTable = new LootTable_1.default()
    .add(HerbDropTable_1.default, 1, 11)
    .add(HerbDropTable_1.default, 2, 11)
    .add(HerbDropTable_1.default, 3, 4);
exports.AberrantSpectrePreTable = new LootTable_1.default({ limit: 128 })
    .add("Steel axe", 1, 3)
    .add("Mithril kiteshield", 1, 1)
    .add("Lava battlestaff", 1, 1)
    .add("Adamant platelegs", 1, 1)
    .add("Rune full helm", 1, 1)
    .oneIn(512, "Mystic robe bottom (dark)")
    .add(AberrantSpectreHerbTable, 1, 78)
    .add(RareSeedTable_1.default, 1, 19)
    .add("Coins", 460, 1)
    .add(RareDropTable_1.GemTable, 1, 5);
const AberrantSpectreTable = new LootTable_1.default()
    .every(exports.AberrantSpectrePreTable)
    .tertiary(128, "Clue scroll (hard)");
exports.default = new SimpleMonster_1.default({
    id: 2,
    name: "Aberrant Spectre",
    table: AberrantSpectreTable,
    aliases: ["aberrant", "aberrant spectre", "abby specs"],
});
