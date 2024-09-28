"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrakePreTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const RareSeedTable_1 = __importDefault(require("../../../subtables/RareSeedTable"));
const DrakeNotedHerbTable = new LootTable_1.default()
    .add("Grimy avantoe", [1, 3], 10)
    .add("Grimy kwuarm", [1, 3], 10)
    .add("Grimy ranarr weed", [1, 3], 8)
    .add("Grimy snapdragon", [1, 3], 8)
    .add("Grimy cadantine", [1, 3], 8)
    .add("Grimy dwarf weed", [1, 3], 8)
    .add("Grimy lantadyme", [1, 3], 6)
    .add("Grimy torstol", [1, 3], 6);
const DrakeOnTaskUniqueTable = new LootTable_1.default()
    .oneIn(2000, "Dragon thrownaxe", [100, 200])
    .oneIn(2000, "Dragon knife", [100, 200])
    .oneIn(512, "Drake's tooth")
    .oneIn(512, "Drake's claw");
const DrakeOffTaskUniqueTable = new LootTable_1.default()
    .oneIn(10_000, "Dragon thrownaxe", [100, 200])
    .oneIn(10_000, "Dragon knife", [100, 200])
    .oneIn(2560, "Drake's tooth")
    .oneIn(2560, "Drake's claw");
exports.DrakePreTable = new LootTable_1.default()
    .add("Rune full helm", 1, 3)
    .add("Red d'hide body", 1, 2)
    .add("Black d'hide vambraces", 1, 1)
    .add("Mystic earth staff", 1, 1)
    .add("Dragon mace", 1, 1)
    .add("Fire rune", [100, 200], 10)
    .add("Nature rune", [30, 60], 10)
    .add("Law rune", [25, 50], 10)
    .add("Death rune", [20, 40], 10)
    .add("Rune arrow", [35, 65], 10)
    .add(HerbDropTable_1.default, [1, 3], 5)
    .add(DrakeNotedHerbTable, 1, 6)
    .add(RareSeedTable_1.default, 1, 1)
    .add("Coins", [1000, 2000], 4)
    .add("Coins", [5000, 7000], 1)
    .add("Diamond", [3, 6], 4)
    .add("Swordfish", [1, 2], 4)
    .add(RareDropTable_1.GemTable, 1, 1);
const DrakeTable = new LootTable_1.default()
    .every("Drake bones")
    .every(exports.DrakePreTable)
    .every(DrakeOffTaskUniqueTable)
    .tertiary(128, "Clue scroll (hard)");
const DrakeOnTaskTable = new LootTable_1.default()
    .every("Drake bones")
    .every(exports.DrakePreTable)
    .every(DrakeOnTaskUniqueTable)
    .tertiary(128, "Clue scroll (hard)");
exports.default = new SimpleMonster_1.default({
    id: 8612,
    name: "Drake",
    table: DrakeTable,
    onTaskTable: DrakeOnTaskTable,
    aliases: ["drake", "fire hippos"],
});
