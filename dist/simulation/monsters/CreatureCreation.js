"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatureCreation = void 0;
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../structures/SimpleMonster"));
const Newtroost = new SimpleMonster_1.default({
    id: 3605,
    name: "Newtroost",
    table: new LootTable_1.default()
        .every("Bones")
        .every("Eye of newt", [4, 10])
        .add(new LootTable_1.default({ limit: 20 }).add("Rune satchel", 1, 3).add("Tea flask", 1)),
    aliases: ["newtroost"],
});
const Unicow = new SimpleMonster_1.default({
    id: 3601,
    name: "Unicow",
    table: new LootTable_1.default()
        .every("Bones")
        .every("Unicorn horn", [2, 4])
        .add(new LootTable_1.default({ limit: 20 }).add("Green satchel", 1, 3).add("Tea flask", 1)),
    aliases: ["unicow"],
});
const Spidine = new SimpleMonster_1.default({
    id: 3602,
    name: "Spidine",
    table: new LootTable_1.default()
        .every("Bones")
        .every("Red spiders' eggs", [3, 6])
        .add(new LootTable_1.default({ limit: 20 }).add("Red satchel", 1, 3).add("Tea flask", 1)),
    aliases: ["spidine"],
});
const Swordchick = new SimpleMonster_1.default({
    id: 3603,
    name: "Swordchick",
    table: new LootTable_1.default()
        .every("Bones")
        .every("Feather", [10, 40])
        .add(new LootTable_1.default({ limit: 20 }).add("Black satchel", 1, 3).add("Tea flask", 1)),
    aliases: ["swordchick"],
});
const Jubster = new SimpleMonster_1.default({
    id: 3604,
    name: "Jubster",
    table: new LootTable_1.default()
        .every("Bones")
        .every("Raw jubbly", [3, 7])
        .add(new LootTable_1.default({ limit: 20 }).add("Gold satchel", 1, 3).add("Tea flask", 1)),
    aliases: ["jubster"],
});
const Frogeel = new SimpleMonster_1.default({
    id: 3600,
    name: "Frogeel",
    table: new LootTable_1.default()
        .every("Bones")
        .every("Raw cave eel", [5, 10])
        .add(new LootTable_1.default({ limit: 20 }).add("Plain satchel", 1, 3).add("Tea flask")),
    aliases: ["frogeel"],
});
exports.CreatureCreation = { Frogeel, Newtroost, Spidine, Swordchick, Unicow, Jubster };
