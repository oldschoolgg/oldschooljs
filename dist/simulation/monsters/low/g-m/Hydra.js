"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HydraPreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const NotedHerbTable_1 = require("../../../subtables/NotedHerbTable");
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const RareSeedTable_1 = __importDefault(require("../../../subtables/RareSeedTable"));
const HydraBrimstoneRingTable = new LootTable_1.default().add("Hydra's eye").add("Hydra's fang").add("Hydra's heart");
const HydraOffTaskUniqueTable = new LootTable_1.default()
    .oneIn(10_000, "Dragon thrownaxe", [200, 400])
    .oneIn(10_000, "Dragon knife", [200, 400])
    .oneIn(5000, "Hydra tail")
    .oneIn(1800, HydraBrimstoneRingTable);
const HydraOnTaskUniqueTable = new LootTable_1.default()
    .oneIn(2000, "Dragon thrownaxe", [200, 400])
    .oneIn(2000, "Dragon knife", [200, 400])
    .oneIn(1000, "Hydra tail")
    .oneIn(360, HydraBrimstoneRingTable);
exports.HydraPreTable = new LootTable_1.default()
    .add("Fire battlestaff", 1, 5)
    .add("Water battlestaff", 1, 5)
    .add("Black d'hide chaps", 1, 3)
    .add("Rune kiteshield", 1, 3)
    .add("Battlestaff", [2, 3], 2)
    .add("Rune platebody", 1, 1)
    .add("Mystic robe bottom", 1, 1)
    .add("Dragon longsword", 1, 1)
    .add("Blood rune", [15, 45], 9)
    .add("Chaos rune", [20, 50], 9)
    .add("Death rune", [30, 60], 9)
    .add("Fire rune", [70, 90], 9)
    .add("Law rune", [30, 60], 9)
    .add("Water rune", [70, 90], 9)
    .add(HerbDropTable_1.default, 1, 4)
    .add(NotedHerbTable_1.NotedHerbTable, 1, 2)
    .add(RareSeedTable_1.default, 1, 4)
    .oneIn(256, "Diamond bolt tips", 20)
    .oneIn(285, "Ruby bolt tips", 20)
    .oneIn(284, "Emerald bolt tips", 20)
    .oneIn(366, "Dragonstone bolt tips", 20)
    .oneIn(853, "Onyx bolt tips", 20)
    .oneIn(1280, "Sapphire bolt tips", 20)
    .add("Coins", [500, 3500], 16)
    .add("Monkfish", 1, 11)
    .add("Super restore(1)", [1, 2], 6)
    .add("Super combat potion(1)", 1, 4)
    .add("Dragon bones", [3, 5], 3)
    .add(RareDropTable_1.GemTable, 1, 5);
const HydraTable = new LootTable_1.default()
    .every("Hydra bones")
    .every(exports.HydraPreTable)
    .every(HydraOffTaskUniqueTable)
    .tertiary(128, "Clue scroll (hard)")
    .tertiary(512, "Clue scroll (elite)");
const HydraOnTaskTable = new LootTable_1.default()
    .every("Hydra bones")
    .every(exports.HydraPreTable)
    .every(HydraOnTaskUniqueTable)
    .tertiary(128, "Clue scroll (hard)")
    .tertiary(512, "Clue scroll (elite)");
exports.default = new SimpleMonster_1.default({
    id: 8609,
    name: "Hydra",
    table: HydraTable,
    onTaskTable: HydraOnTaskTable,
    aliases: ["hydra"],
});
