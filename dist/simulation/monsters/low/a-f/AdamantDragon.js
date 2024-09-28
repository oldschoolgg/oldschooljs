"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const RareDropTable_1 = __importDefault(require("../../../subtables/RareDropTable"));
const UsefulHerbTable_1 = __importDefault(require("../../../subtables/UsefulHerbTable"));
const AdamantDragonTable = new LootTable_1.default()
    .every("Dragon bones")
    .every("Adamantite bar", 2)
    .add("Adamant platebody", 1, 9)
    .add("Rune mace", 1, 7)
    .add("Rune scimitar", 1, 7)
    .add("Dragon med helm", 1, 1)
    .add("Dragon platelegs", 1, 1)
    .add("Dragon plateskirt", 1, 1)
    .add("Adamant arrow", [30, 40], 8)
    .add("Wrath rune", [10, 30], 8)
    .add("Chaos rune", [60, 120], 7)
    .add("Death rune", [30, 60], 7)
    .add(UsefulHerbTable_1.default, 1, 8)
    .add("Adamant bolts(unf)", [20, 40], 11)
    .add("Adamant javelin heads", [40, 50], 8)
    .add("Diamond", [1, 3], 7)
    .add("Dragon javelin heads", [20, 30], 7)
    .add("Adamantite ore", [8, 20], 6)
    .add("Adamantite bar", [5, 35], 4)
    .add("Dragon bolts (unf)", [15, 20], 1)
    .add("Wrath talisman", 1, 1)
    .add(RareDropTable_1.default, 1, 1)
    .tertiary(320, "Clue scroll (elite)")
    .tertiary(1000, "Dragon limbs")
    .tertiary(5000, "Dragon metal slice")
    .tertiary(9000, "Draconic visage");
exports.default = new SimpleMonster_1.default({
    id: 8030,
    name: "Adamant Dragon",
    table: AdamantDragonTable,
    aliases: ["adamant dragon", "addy dragon"],
});
