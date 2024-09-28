"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Collection_1 = __importDefault(require("../../structures/Collection"));
const CreatureCreation_1 = require("./CreatureCreation");
const bosses_1 = require("./bosses");
const low_1 = require("./low");
const camdozaalGolems_1 = require("./low/camdozaalGolems");
const reanimated_1 = require("./low/reanimated");
const special_1 = require("./special");
const superiorMonsters_1 = require("./superiorMonsters");
const monstersObject = {
    ...bosses_1.allBosses,
    ...low_1.allLowMonsters,
    ...special_1.specialBosses,
    ...superiorMonsters_1.allSuperiorMonsters,
    ...CreatureCreation_1.CreatureCreation,
    ...reanimated_1.ReanimatedMonsters,
    ...camdozaalGolems_1.CamdozaalGolems,
};
const allMonsters = Object.values(monstersObject).map((monster) => [monster.id, monster]);
class MonstersCollection extends Collection_1.default {
}
const Monsters = Object.assign(new MonstersCollection(allMonsters), monstersObject);
exports.default = Monsters;
