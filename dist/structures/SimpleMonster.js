"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const e_1 = require("e");
const monsterData_1 = require("../meta/monsterData");
const util_1 = require("../util/util");
const Bank_1 = __importDefault(require("./Bank"));
const Monster_1 = __importDefault(require("./Monster"));
class SimpleMonster extends Monster_1.default {
    table;
    onTaskTable;
    wildyCaveTable;
    pickpocketTable;
    customKillLogic;
    constructor(options) {
        let allItems = [];
        if (options.table) {
            allItems = allItems.concat(options.table.allItems);
        }
        if (options.pickpocketTable) {
            allItems = allItems.concat(options.pickpocketTable.allItems);
        }
        super({ ...options, allItems });
        this.table = options.table;
        this.pickpocketTable = options.pickpocketTable;
        this.onTaskTable = options.onTaskTable;
        this.wildyCaveTable = options.wildyCaveTable;
        this.customKillLogic = options.customKillLogic;
    }
    kill(quantity = 1, options = {}) {
        const loot = new Bank_1.default();
        const canGetBrimKey = options.onSlayerTask && options.slayerMaster === monsterData_1.MonsterSlayerMaster.Konar;
        const wildySlayer = options.onSlayerTask && options.slayerMaster === monsterData_1.MonsterSlayerMaster.Krystilia;
        const slayerMonster = Boolean(options.onSlayerTask && this.data.slayerLevelRequired > 1);
        const lootTableOptions = { ...options.lootTableOptions, targetBank: loot };
        for (let i = 0; i < quantity; i++) {
            if (canGetBrimKey) {
                if ((0, e_1.roll)((0, util_1.getBrimKeyChanceFromCBLevel)(this.data.combatLevel))) {
                    loot.add("Brimstone key");
                }
            }
            if (wildySlayer && this.data.hitpoints) {
                if ((0, e_1.roll)((0, util_1.getSlayersEnchantmentChanceFromHP)(this.data.hitpoints))) {
                    loot.add("Slayer's enchantment");
                }
                if ((0, e_1.roll)((0, util_1.getLarranKeyChanceFromCBLevel)(this.data.combatLevel, slayerMonster))) {
                    loot.add("Larran's key");
                }
            }
            if (options.inCatacombs && this.data.hitpoints && !wildySlayer) {
                if ((0, e_1.roll)((0, util_1.getAncientShardChanceFromHP)(this.data.hitpoints))) {
                    loot.add("Ancient shard");
                }
                if ((0, e_1.roll)((0, util_1.getTotemChanceFromHP)(this.data.hitpoints))) {
                    loot.add("Dark totem base");
                }
            }
            if (options.onSlayerTask) {
                if (wildySlayer && this.wildyCaveTable) {
                    this.wildyCaveTable.roll(1, lootTableOptions);
                }
                else if (this.onTaskTable) {
                    this.onTaskTable.roll(1, lootTableOptions);
                }
                else {
                    this.table?.roll(1, lootTableOptions);
                }
            }
            else {
                this.table?.roll(1, lootTableOptions);
            }
            if (this.customKillLogic) {
                this.customKillLogic(options, loot);
            }
        }
        return loot;
    }
}
exports.default = SimpleMonster;
