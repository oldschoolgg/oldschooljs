"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VyrewatchSentinelTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = __importDefault(require("../../../subtables/RareDropTable"));
const UncommonSeedDropTable_1 = __importDefault(require("../../../subtables/UncommonSeedDropTable"));
exports.VyrewatchSentinelTable = new LootTable_1.default()
    .every("Vampyre dust")
    .oneIn(1500, "Blood shard")
    .add("Rune dagger", 1, 6)
    .add("Adamant platelegs", 1, 6)
    .add("Adamant platebody", 1, 4)
    .add("Rune full helm", 1, 1)
    .add("Rune kiteshield", 1, 1)
    .add("Death rune", [6, 10], 10)
    .add("Blood rune", [8, 16], 10)
    .add("Nature rune", [6, 11], 10)
    .add("Rune arrow", [4, 10], 4)
    .add("Rune javelin", [5, 15], 2)
    .add(HerbDropTable_1.default, 1, 1)
    .add(UncommonSeedDropTable_1.default, 1, 1)
    .oneIn(589, "Opal bolt tips", [6, 14])
    .oneIn(589, "Pearl bolt tips", [6, 14])
    .oneIn(589, "Diamond bolt tips", [6, 14])
    .oneIn(883, "Emerald bolt tips", [6, 14])
    .oneIn(883, "Ruby bolt tips", [6, 14])
    .oneIn(884, "Dragonstone bolt tips", [6, 14])
    .oneIn(1767, "Jade bolt tips", [6, 14])
    .oneIn(1767, "Topaz bolt tips", [6, 14])
    .oneIn(1767, "Sapphire bolt tips", [6, 14])
    .oneIn(1767, "Onyx bolt tips", [6, 14])
    .add("Bark", [4, 8], 4)
    .add("Coal", 8, 4)
    .add("Runite bar", 1, 2)
    .add("Yew logs", 6, 2)
    .add("Runite ore", 1, 2)
    .add("Coins", [100, 1000], 21)
    .add(RareDropTable_1.default, 1, 1)
    .tertiary(128, "Clue scroll (hard)");
exports.default = new SimpleMonster_1.default({
    id: 9756,
    name: "Vyrewatch Sentinel",
    table: exports.VyrewatchSentinelTable,
    aliases: ["vyrewatch sentinel", "bat people", "bat person"],
});
