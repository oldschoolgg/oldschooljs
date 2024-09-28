"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheatreOfBlood = exports.TheatreOfBloodClass = exports.ToBUniqueTable = exports.TOBRooms = void 0;
const e_1 = require("e");
const Bank_1 = __importDefault(require("../../structures/Bank"));
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const SimpleTable_1 = __importDefault(require("../../structures/SimpleTable"));
const util_1 = require("../../util");
exports.TOBRooms = [
    {
        name: "Maiden",
        difficultyRating: 1,
        timeWeighting: 11,
    },
    {
        name: "Bloat",
        difficultyRating: 4,
        timeWeighting: 11,
    },
    {
        name: "Nylocas",
        difficultyRating: 3,
        timeWeighting: 22,
    },
    {
        name: "Sotetseg",
        difficultyRating: 2,
        timeWeighting: 11,
    },
    {
        name: "Xarpus",
        difficultyRating: 2,
        timeWeighting: 17,
    },
    {
        name: "Verzik",
        difficultyRating: 6,
        timeWeighting: 28,
    },
];
exports.ToBUniqueTable = new LootTable_1.default()
    .add("Scythe of vitur (uncharged)")
    .add("Ghrazi rapier", 1, 2)
    .add("Sanguinesti staff (uncharged)", 1, 2)
    .add("Justiciar faceguard", 1, 2)
    .add("Justiciar chestguard", 1, 2)
    .add("Justiciar legguards", 1, 2)
    .add("Avernic defender hilt", 1, 8);
const HardModeUniqueTable = new LootTable_1.default()
    .add("Scythe of vitur (uncharged)")
    .add("Ghrazi rapier", 1, 2)
    .add("Sanguinesti staff (uncharged)", 1, 2)
    .add("Justiciar faceguard", 1, 2)
    .add("Justiciar chestguard", 1, 2)
    .add("Justiciar legguards", 1, 2)
    .add("Avernic defender hilt", 1, 7);
const NonUniqueTable = new LootTable_1.default()
    .tertiary(25, "Clue scroll (elite)")
    .add("Vial of blood", [50, 60], 2)
    .add("Death rune", [500, 600])
    .add("Blood rune", [500, 600])
    .add("Swamp tar", [500, 600])
    .add("Coal", [500, 600])
    .add("Gold ore", [300, 360])
    .add("Molten glass", [200, 240])
    .add("Adamantite ore", [130, 156])
    .add("Runite ore", [60, 72])
    .add("Wine of zamorak", [50, 60])
    .add("Potato cactus", [50, 60])
    .add("Grimy cadantine", [50, 60])
    .add("Grimy avantoe", [40, 48])
    .add("Grimy irit leaf", [34, 40])
    .add("Grimy ranarr weed", [30, 36])
    .add("Grimy snapdragon", [27, 32])
    .add("Grimy lantadyme", [26, 31])
    .add("Grimy dwarf weed", [24, 28])
    .add("Grimy torstol", [20, 24])
    .add("Battlestaff", [15, 18])
    .add("Mahogany seed", [8, 12])
    .add("Rune battleaxe", 4)
    .add("Rune platebody", 4)
    .add("Rune chainbody", 4)
    .add("Palm tree seed", 3)
    .add("Yew seed", 3)
    .add("Magic seed", 3);
const HardModeExtraTable = new LootTable_1.default()
    .tertiary(275, "Sanguine dust")
    .tertiary(150, "Sanguine ornament kit")
    .tertiary(100, "Holy ornament kit");
class TheatreOfBloodClass {
    nonUniqueLoot(member, isHardMode, deaths) {
        if (deaths.length === exports.TOBRooms.length) {
            return new Bank_1.default().add("Cabbage");
        }
        const loot = new Bank_1.default();
        for (let i = 0; i < 3; i++) {
            loot.add(NonUniqueTable.roll());
        }
        if (isHardMode) {
            for (const [item] of loot.items()) {
                loot.set(item.id, Math.ceil(loot.amount(item.id) * 1.15));
            }
            loot.add(HardModeExtraTable.roll());
        }
        let petChance = isHardMode ? 500 : 650;
        if (member.numDeaths > 0) {
            petChance *= member.numDeaths;
        }
        if ((0, e_1.roll)(petChance)) {
            loot.add("Lil' zik");
        }
        return loot;
    }
    uniqueDecide(team) {
        const table = new SimpleTable_1.default();
        for (const member of team) {
            table.add(member, member.points);
        }
        return table.roll();
    }
    complete(_options) {
        const options = (0, util_1.JSONClone)(_options);
        if (options.team.length < 2 || options.team.length > 4) {
            throw new Error("Only team sizes of 2-4 are supported in ToB");
        }
        const maxPointsPerPerson = 22;
        const penaltyForDeath = 4;
        const maxPointsTeamCanGet = options.team.length * maxPointsPerPerson;
        const parsedTeam = _options.team.map(t => ({
            id: t.id,
            deaths: t.deaths,
            numDeaths: t.deaths.length,
            points: maxPointsPerPerson - t.deaths.length * penaltyForDeath,
        }));
        const teamPoints = (0, e_1.sumArr)(parsedTeam.map(val => val.points));
        const totalDeaths = (0, e_1.sumArr)(parsedTeam.map(i => i.numDeaths));
        const percentBaseChanceOfUnique = (options.hardMode ? 13 : 11) * (teamPoints / maxPointsTeamCanGet);
        const purpleReceived = (0, e_1.percentChance)(percentBaseChanceOfUnique);
        const purpleRecipient = purpleReceived ? this.uniqueDecide(parsedTeam) : null;
        const lootResult = {};
        for (const member of parsedTeam) {
            if (member === purpleRecipient) {
                lootResult[member.id] = new Bank_1.default().add(options.hardMode ? HardModeUniqueTable.roll() : exports.ToBUniqueTable.roll());
            }
            else {
                lootResult[member.id] = this.nonUniqueLoot(member, options.hardMode, member.deaths);
            }
        }
        return {
            loot: lootResult,
            percentChanceOfUnique: percentBaseChanceOfUnique,
            totalDeaths,
            teamPoints,
        };
    }
}
exports.TheatreOfBloodClass = TheatreOfBloodClass;
exports.TheatreOfBlood = new TheatreOfBloodClass();
