"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.revsUniqueTable = void 0;
exports.resolvePlayerFromHiscores = resolvePlayerFromHiscores;
exports.isValidUsername = isValidUsername;
exports.convertLVLtoXP = convertLVLtoXP;
exports.convertXPtoLVL = convertXPtoLVL;
exports.getBrimKeyChanceFromCBLevel = getBrimKeyChanceFromCBLevel;
exports.getLarranKeyChanceFromCBLevel = getLarranKeyChanceFromCBLevel;
exports.JSONClone = JSONClone;
exports.getAncientShardChanceFromHP = getAncientShardChanceFromHP;
exports.getTotemChanceFromHP = getTotemChanceFromHP;
exports.getSlayersEnchantmentChanceFromHP = getSlayersEnchantmentChanceFromHP;
exports.makeRevTable = makeRevTable;
exports.randomVariation = randomVariation;
exports.getItem = getItem;
exports.getItemOrThrow = getItemOrThrow;
exports.resolveItems = resolveItems;
exports.deepResolveItems = deepResolveItems;
exports.itemTupleToTable = itemTupleToTable;
const e_1 = require("e");
const constants_1 = require("../constants");
const Items_1 = __importDefault(require("../structures/Items"));
const LootTable_1 = __importDefault(require("../structures/LootTable"));
function resolvePlayerFromHiscores(csvData, accountType) {
    const data = csvData
        .trim()
        .split("\n")
        .map((str) => str.split(","));
    const resolvedPlayer = {
        skills: {},
        minigames: {},
        clues: {},
        bossRecords: {},
    };
    let accumulativeIndex = 0;
    for (let i = 0; i < constants_1.SKILLS.length; i++) {
        resolvedPlayer.skills[constants_1.SKILLS[i]] = {
            rank: Number(data[i][0]),
            level: Number(data[i][1]),
            xp: Number(data[i][2]),
        };
    }
    if (accountType === "seasonal") {
        resolvedPlayer.leaguePoints = {
            rank: Number(data[accumulativeIndex + constants_1.SKILLS.length][0]),
            points: Number(data[accumulativeIndex + constants_1.SKILLS.length][1]),
        };
    }
    accumulativeIndex += constants_1.SKILLS.length + 2;
    for (let i = 0; i < 4; i++) {
        resolvedPlayer.minigames[constants_1.MINIGAMES[i]] = {
            rank: Number(data[i + accumulativeIndex][0]),
            score: Number(data[i + accumulativeIndex][1]),
        };
    }
    accumulativeIndex += 4;
    for (let i = 0; i < constants_1.CLUES.length; i++) {
        resolvedPlayer.clues[constants_1.CLUES[i]] = {
            rank: Number(data[i + accumulativeIndex][0]),
            score: Number(data[i + accumulativeIndex][1]),
        };
    }
    accumulativeIndex += constants_1.CLUES.length;
    for (let i = 0; i < 5; i++) {
        const minigameKey = constants_1.MINIGAMES[i + 4];
        const minigameData = {
            rank: Number(data[i + accumulativeIndex][0]),
            score: Number(data[i + accumulativeIndex][1]),
        };
        resolvedPlayer.minigames[minigameKey] = minigameData;
    }
    accumulativeIndex += 5;
    for (let i = 0; i < constants_1.mappedBossNames.length; i++) {
        if (!data[i + accumulativeIndex])
            continue;
        const bossName = constants_1.mappedBossNames[i][0];
        resolvedPlayer.bossRecords[bossName] = {
            rank: Number(data[i + accumulativeIndex][0]),
            score: Number(data[i + accumulativeIndex][1]),
        };
    }
    return resolvedPlayer;
}
function isValidUsername(username) {
    return Boolean(username.match("^[A-Za-z0-9]{1}[A-Za-z0-9 -_\u00A0]{0,11}$"));
}
function convertLVLtoXP(lvl) {
    let points = 0;
    for (let i = 1; i < lvl; i++) {
        points += Math.floor(i + 300 * Math.pow(2, i / 7));
    }
    return Math.floor(points / 4);
}
function convertXPtoLVL(xp, cap = 99) {
    let points = 0;
    for (let lvl = 1; lvl <= cap; lvl++) {
        points += Math.floor(lvl + 300 * Math.pow(2, lvl / 7));
        if (Math.floor(points / 4) >= xp + 1) {
            return lvl;
        }
    }
    return cap;
}
function getBrimKeyChanceFromCBLevel(combatLevel) {
    if (combatLevel < 100) {
        return Math.round(0.2 * (combatLevel - 100) ** 2 + 100);
    }
    return Math.max(Math.round((-1 / 5) * combatLevel + 120), 50);
}
function getLarranKeyChanceFromCBLevel(combatLevel, slayerMonster) {
    let baseChance = 0;
    if (combatLevel <= 80) {
        baseChance = (3 / 10) * Math.pow(80 - combatLevel, 2) + 100;
    }
    else if (combatLevel <= 350) {
        baseChance = (-5 / 27) * combatLevel + 115;
    }
    else {
        baseChance = 50;
    }
    const adjustedChance = slayerMonster ? baseChance * 0.8 : baseChance;
    return adjustedChance;
}
function JSONClone(object) {
    return JSON.parse(JSON.stringify(object));
}
function getAncientShardChanceFromHP(hitpoints) {
    return Math.round((500 - hitpoints) / 1.5);
}
function getTotemChanceFromHP(hitpoints) {
    return 500 - hitpoints;
}
function getSlayersEnchantmentChanceFromHP(hitpoints) {
    const chanceHitpoints = Math.min(hitpoints, 300);
    return Math.round(320 - (chanceHitpoints * 8) / 10);
}
exports.revsUniqueTable = new LootTable_1.default()
    .add("Amulet of avarice", 1, 2)
    .add("Craw's bow (u)", 1, 1)
    .add("Thammaron's sceptre (u)", 1, 1)
    .add("Viggora's chainmace (u)", 1, 1);
function makeRevTable(table) {
    return (options, currentLoot) => {
        const index = options.onSlayerTask ? 1 : 0;
        if ((0, e_1.roll)(table.uniqueTable[index])) {
            currentLoot.add(exports.revsUniqueTable.roll());
            return;
        }
        if ((0, e_1.roll)(table.seeds[index])) {
            currentLoot.add("Yew seed", (0, e_1.randInt)(2, 7));
            return;
        }
        if ((0, e_1.roll)(table.seeds[index])) {
            currentLoot.add("Magic seed", (0, e_1.randInt)(2, 7));
            return;
        }
        for (const [key, itemName] of [
            ["ancientEmblem", "Ancient emblem"],
            ["ancientTotem", "Ancient totem"],
            ["ancientCrystal", "Ancient crystal"],
            ["ancientStatuette", "Ancient statuette"],
            ["topThree", "Ancient medallion"],
            ["topThree", "Ancient effigy"],
            ["topThree", "Ancient relic"],
        ]) {
            if ((0, e_1.roll)(table[key][index])) {
                currentLoot.add(itemName);
                return;
            }
        }
    };
}
function randomVariation(value, percentage) {
    const lowerLimit = value * (1 - percentage / 100);
    const upperLimit = value * (1 + percentage / 100);
    return (0, e_1.randFloat)(lowerLimit, upperLimit);
}
function getItem(itemName) {
    if (!itemName)
        return null;
    let identifier = "";
    if (typeof itemName === "number") {
        identifier = itemName;
    }
    else {
        const parsed = Number(itemName);
        identifier = Number.isNaN(parsed) ? itemName : parsed;
    }
    if (typeof identifier === "string") {
        identifier = identifier.replace(/’/g, "'");
    }
    return Items_1.default.get(identifier) ?? null;
}
function getItemOrThrow(itemName) {
    const item = getItem(itemName);
    if (!item)
        throw new Error(`Item ${itemName} not found.`);
    return item;
}
function resolveItems(_itemArray) {
    const itemArray = Array.isArray(_itemArray) ? _itemArray : [_itemArray];
    const newArray = [];
    for (const item of itemArray) {
        if (typeof item === "number") {
            newArray.push(item);
        }
        else {
            const osItem = Items_1.default.get(item);
            if (!osItem) {
                throw new Error(`No item found for: ${item}.`);
            }
            newArray.push(osItem.id);
        }
    }
    return newArray;
}
function deepResolveItems(itemArray) {
    const newArray = [];
    for (const item of itemArray) {
        if (typeof item === "number") {
            newArray.push(item);
        }
        else if (Array.isArray(item)) {
            const test = resolveItems(item);
            newArray.push(test);
        }
        else {
            const osItem = Items_1.default.get(item);
            if (!osItem) {
                throw new Error(`No item found for: ${item}.`);
            }
            newArray.push(osItem.id);
        }
    }
    return newArray;
}
function itemTupleToTable(items) {
    const table = new LootTable_1.default();
    for (const [item, quantity] of items) {
        table.every(item, quantity ?? 1);
    }
    return table;
}
__exportStar(require("./smallUtils"), exports);
