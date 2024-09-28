"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WyrmPreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const RareSeedTable_1 = __importDefault(require("../../../subtables/RareSeedTable"));
const WyrmOnTaskUniqueTable = new LootTable_1.default()
    .oneIn(2000, "Dragon knife", [75, 150])
    .oneIn(2000, "Dragon thrownaxe", [75, 150])
    .oneIn(2000, "Dragon sword")
    .oneIn(2000, "Dragon harpoon");
const WyrmOffTaskUniqueTable = new LootTable_1.default()
    .oneIn(10_000, "Dragon knife", [75, 150])
    .oneIn(10_000, "Dragon thrownaxe", [75, 150])
    .oneIn(10_000, "Dragon sword")
    .oneIn(10_000, "Dragon harpoon");
exports.WyrmPreTable = new LootTable_1.default({ limit: 76 })
    .add("Red d'hide chaps", 1, 3)
    .add("Adamant axe", 1, 2)
    .add("Adamant sq shield", 1, 2)
    .add("Adamant battleaxe", 1, 2)
    .add("Adamant 2h sword", 1, 2)
    .add("Rune med helm", 1, 2)
    .add("Earth battlestaff", 1, 1)
    .add("Rune battleaxe", 1, 1)
    .add("Dragon dagger", 1, 1)
    .add("Fire rune", 200, 10)
    .add("Earth rune", [75, 150], 10)
    .add("Soul rune", [15, 20], 5)
    .add("Blood rune", [25, 30], 5)
    .add(HerbDropTable_1.default, 2, 4)
    .add(RareSeedTable_1.default, 1, 3)
    .add("Coins", [950, 1450], 8)
    .add("Bass", 1, 7)
    .add("Pure essence", [200, 300], 3)
    .add("Rune arrowtips", [8, 12], 2)
    .add("Adamant arrowtips", [8, 12], 2)
    .add(RareDropTable_1.GemTable, 1, 1);
const WyrmTable = new LootTable_1.default()
    .every("Wyrm bones")
    .every(WyrmOffTaskUniqueTable)
    .every(exports.WyrmPreTable)
    .tertiary(256, "Clue scroll (hard)");
const WyrmOnTaskTable = new LootTable_1.default()
    .every("Wyrm bones")
    .every(WyrmOnTaskUniqueTable)
    .every(exports.WyrmPreTable)
    .tertiary(256, "Clue scroll (hard)");
exports.default = new SimpleMonster_1.default({
    id: 8610,
    name: "Wyrm",
    table: WyrmTable,
    onTaskTable: WyrmOnTaskTable,
    aliases: ["wyrm", "wurms", "worms", "wyrms", "worm", "wurm"],
});
