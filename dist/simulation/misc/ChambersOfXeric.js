"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChambersOfXeric = exports.ChambersOfXericClass = exports.CoXUniqueTable = void 0;
const e_1 = require("e");
const Bank_1 = __importDefault(require("../../structures/Bank"));
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const Minigame_1 = __importDefault(require("../../structures/Minigame"));
const SimpleTable_1 = __importDefault(require("../../structures/SimpleTable"));
const bank_1 = require("../../util/bank");
const itemID_1 = __importDefault(require("../../util/itemID"));
const util_1 = require("../../util/util");
const itemScales = (0, bank_1.resolveNameBank)({
    "Death rune": 36,
    "Blood rune": 32,
    "Soul rune": 20,
    "Rune arrow": 14,
    "Dragon arrow": 202,
    "Grimy toadflax": 525,
    "Grimy ranarr weed": 800,
    "Grimy irit leaf": 162,
    "Grimy avantoe": 234,
    "Grimy kwuarm": 378,
    "Grimy snapdragon": 1348,
    "Grimy cadantine": 358,
    "Grimy lantadyme": 249,
    "Grimy dwarf weed": 201,
    "Grimy torstol": 824,
    "Silver ore": 20,
    Coal: 20,
    "Gold ore": 44,
    "Mithril ore": 32,
    "Adamantite ore": 167,
    "Runite ore": 2093,
    "Uncut sapphire": 189,
    "Uncut emerald": 142,
    "Uncut ruby": 250,
    "Uncut diamond": 514,
    "Lizardman fang": 28,
    "Pure essence": 2,
    Saltpetre: 24,
    "Teak plank": 100,
    "Mahogany plank": 240,
    Dynamite: 54,
    "Torn prayer scroll": 999_999,
    "Dark relic": 999_999,
});
const NonUniqueTable = new SimpleTable_1.default();
for (const itemID of Object.keys(itemScales))
    NonUniqueTable.add(Number.parseInt(itemID));
exports.CoXUniqueTable = new LootTable_1.default()
    .add("Dexterous prayer scroll", 1, 20)
    .add("Arcane prayer scroll", 1, 20)
    .add("Twisted buckler", 1, 4)
    .add("Dragon hunter crossbow", 1, 4)
    .add("Dinh's bulwark", 1, 3)
    .add("Ancestral hat", 1, 3)
    .add("Ancestral robe top", 1, 3)
    .add("Ancestral robe bottom", 1, 3)
    .add("Dragon claws", 1, 3)
    .add("Elder maul", 1, 2)
    .add("Kodai insignia", 1, 2)
    .add("Twisted bow", 1, 2);
const cmTeamTimes = [
    [1, e_1.Time.Hour + e_1.Time.Minute * 10],
    [2, e_1.Time.Hour + e_1.Time.Minute * 5],
    [3, e_1.Time.Minute * 50],
    [4, e_1.Time.Minute * 45],
    [10, e_1.Time.Minute * 42],
    [15, e_1.Time.Minute * 45],
    [23, e_1.Time.Hour],
];
class ChambersOfXericClass extends Minigame_1.default {
    id = 1;
    aliases = ["raids", "cox"];
    name = "Chambers of Xeric";
    allItems = [...exports.CoXUniqueTable.allItems, ...NonUniqueTable.table.map(i => i.item)];
    maxRoll = 570_000 * (1 / 8675);
    determineUniqueChancesFromTeamPoints(teamPoints) {
        const chances = [];
        let totalChancePercentage = teamPoints * (1 / 8675);
        for (let i = 0; i < 3; i++) {
            if (totalChancePercentage > this.maxRoll) {
                chances.push(this.maxRoll);
                totalChancePercentage -= this.maxRoll;
            }
            else {
                chances.push(totalChancePercentage);
                break;
            }
        }
        return chances;
    }
    elligibleForDust(teamSize, completionTime) {
        for (const [teamSizeRange, timeRequired] of cmTeamTimes) {
            if (teamSize <= teamSizeRange) {
                return completionTime <= timeRequired;
            }
        }
        return completionTime <= e_1.Time.Hour + e_1.Time.Minute * 20;
    }
    rollLootFromChances(chances) {
        let rolls = 0;
        for (const chance of chances) {
            if ((0, e_1.randFloat)(0, 100) < chance) {
                rolls++;
            }
        }
        return exports.CoXUniqueTable.roll(rolls);
    }
    rollNonUniqueLoot(personalPoints) {
        const items = [];
        while (items.length < 2) {
            const rolledItem = NonUniqueTable.roll();
            if (!items.includes(rolledItem))
                items.push(rolledItem);
        }
        const loot = {
            [items[0]]: Math.max(1, Math.floor(personalPoints / itemScales[items[0]])),
            [items[1]]: Math.max(1, Math.floor(personalPoints / itemScales[items[1]])),
        };
        if ((0, e_1.roll)(12)) {
            loot[(0, itemID_1.default)("Clue scroll (elite)")] = 1;
        }
        return loot;
    }
    complete(_options) {
        const options = (0, util_1.JSONClone)(_options);
        const elligibleForDust = typeof options.timeToComplete === "number" &&
            options.challengeMode &&
            this.elligibleForDust(options.team.length, options.timeToComplete);
        if (elligibleForDust) {
            for (const member of options.team) {
                member.personalPoints += 5000;
            }
        }
        const teamPoints = (0, e_1.sumArr)(options.team.map(val => val.personalPoints));
        const dropChances = this.determineUniqueChancesFromTeamPoints(teamPoints);
        const uniqueLoot = this.rollLootFromChances(dropChances);
        const lootResult = {};
        const uniqueDeciderTable = new SimpleTable_1.default();
        for (const teamMember of options.team) {
            lootResult[teamMember.id] = new Bank_1.default();
            if (elligibleForDust && teamMember.canReceiveDust && (0, e_1.roll)(400)) {
                lootResult[teamMember.id].add("Metamorphic dust");
            }
            if (elligibleForDust && (0, e_1.roll)(75)) {
                lootResult[teamMember.id].add("Twisted ancestral colour kit");
            }
            if (teamMember.canReceiveAncientTablet && (0, e_1.roll)(10)) {
                lootResult[teamMember.id].add("Ancient tablet");
            }
            uniqueDeciderTable.add(teamMember.id, teamMember.personalPoints);
        }
        while (uniqueLoot.length > 0) {
            if (uniqueDeciderTable.table.length === 0)
                break;
            const receipientID = uniqueDeciderTable.roll();
            const uniqueItem = uniqueLoot.random();
            lootResult[receipientID].add(uniqueItem.id, 1);
            uniqueLoot.remove(uniqueItem.id, 1);
            if ((0, e_1.roll)(53)) {
                lootResult[receipientID].add("Olmlet");
            }
            uniqueDeciderTable.delete(receipientID);
        }
        for (const leftOverRecipient of uniqueDeciderTable.table) {
            const pointsOfThisMember = options.team.find(member => member.id === leftOverRecipient.item).personalPoints;
            const entries = Object.entries(this.rollNonUniqueLoot(pointsOfThisMember));
            for (const [itemID, quantity] of entries) {
                lootResult[leftOverRecipient.item].add(Number.parseInt(itemID), quantity);
            }
        }
        const onyxChance = options.team.length * 70;
        for (const bank of (0, e_1.shuffleArr)(Object.values(lootResult))) {
            if ((0, e_1.roll)(onyxChance)) {
                bank.add("Onyx");
                break;
            }
        }
        return lootResult;
    }
}
exports.ChambersOfXericClass = ChambersOfXericClass;
exports.ChambersOfXeric = new ChambersOfXericClass();
