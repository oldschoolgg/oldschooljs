"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviantSpectrePreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const RareSeedTable_1 = __importDefault(require("../../../subtables/RareSeedTable"));
const DeviantSpectreHerbTable = new LootTable_1.default().add(HerbDropTable_1.default, 2, 29).add(HerbDropTable_1.default, 3, 17);
exports.DeviantSpectrePreTable = new LootTable_1.default()
    .add("Battlestaff", 1, 5)
    .add("Black platelegs", 1, 5)
    .add("Mithril battleaxe", 1, 5)
    .add("Rune full helm", 1, 2)
    .add("Lava battlestaff", 1, 1)
    .add("Rune chainbody", 1, 1)
    .add(DeviantSpectreHerbTable, 1, 46)
    .add("Limpwurt seed", [3, 11], 10)
    .add(RareSeedTable_1.default, 1, 16)
    .add("Adamantite ore", 1, 5)
    .add(RareDropTable_1.GemTable, 1, 32);
const DeviantSpectreTable = new LootTable_1.default()
    .every(exports.DeviantSpectrePreTable)
    .tertiary(128, "Clue scroll (hard)")
    .tertiary(512, "Mystic robe bottom (dark)");
exports.default = new SimpleMonster_1.default({
    id: 7279,
    name: "Deviant Spectre",
    table: DeviantSpectreTable,
    aliases: ["deviant", "deviant spectre"],
});
